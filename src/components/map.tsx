import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import './ExploreContainer.css';

// Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_PROJECT_ID,
    messagingSenderId: import.meta.env.VITE_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 0,
    lng: 0
};

const MapPage: React.FC = () => {
    const [issPosition, setIssPosition] = useState<{ lat: number, lng: number } | null>(null);
    const [loading, setLoading] = useState(true); // Added loading state

    const fetchISSPosition = async () => {
        try {
            console.log('Fetching ISS position...');
            //wont work over https so need to use a CORS proxy to get around it 
            const response = await fetch("http://api.open-notify.org/iss-now.json"); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const lat = parseFloat(data.iss_position.latitude);
            const lng = parseFloat(data.iss_position.longitude);
            setIssPosition({ lat, lng });
            setLoading(false); // Stop loading once data is fetched
            console.log('ISS Position updated:', { lat, lng }); // Debugging log
        } catch (error) {
            console.error('Error fetching ISS position:', error);
            setLoading(false); // Stop loading if there is an error
        }
    };

    useEffect(() => {
        fetchISSPosition(); // Fetch initial position
        const intervalId = setInterval(fetchISSPosition, 5000); // Fetch new position every 5 seconds

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Add loading message while data is fetched
    }

    console.log('Rendering GoogleMap with ISS Position:', issPosition);

    return (
        <div className="map-container">
            <h1 className="nav-title">Explore Where the ISS is Currently</h1>
            <div className="map-cord">
                {issPosition && (
                    <p>Latitude: {issPosition.lat} | Longitude: {issPosition.lng}</p>
                )}
            </div>
            <div className="map-wrapper">
                <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY!}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={issPosition || center}
                        zoom={4}
                    >
                        {issPosition && (
                            <Circle
                                center={issPosition}
                                radius={5000} // Radius in meters
                                options={{
                                    strokeColor: "#FF0000",
                                    strokeOpacity: 0.8,
                                    strokeWeight: 8,
                                    fillColor: "#FF0000",
                                    fillOpacity: 0.35,
                                }}
                            />
                        )}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
}

export default MapPage;
