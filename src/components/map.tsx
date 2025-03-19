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

// Fixed location for the Circle
const fixedLocation = {
    lat: 37.7749,
    lng: -122.4194
};

const MapPage: React.FC = () => {
    const [issPosition, setIssPosition] = useState<{ lat: number, lng: number } | null>(null);
    const [loading, setLoading] = useState(true); // Added loading state

    const fetchISSPosition = async () => {
        try {
            console.log('Fetching ISS position...');
            const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
            const data = await response.json();
            const lat = data.latitude;
            const lng = data.longitude;
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

    useEffect(() => {
        if (issPosition) {
            console.log('Rendering Circle with ISS Position:', issPosition);
        } else {
            console.error('Circle not rendered: ISS Position is null');
        }
    }, [issPosition]);

    if (loading) {
        return <div>Loading...</div>; // Add loading message while data is fetched
    }

    console.log('Rendering GoogleMap with ISS Position:', issPosition);
    console.log('Rendering Circle at Fixed Location:', fixedLocation);

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
                            <>
                                {console.log('Rendering Circle with ISS Location:', issPosition)}
                                <Circle
                                //wont render in a local server need to use firebase serve to see it
                                    center={issPosition}
                                    radius={80000} // Radius in meters
                                    options={{
                                        strokeColor: "#e63674",
                                        strokeOpacity: 1,
                                        strokeWeight: 10,
                                        fillColor: "#e63674",
                                        fillOpacity: 0.35,
                                        zIndex: 3 // Ensure the circle is on top
                                    }}
                                    onLoad={() => console.log('Circle loaded')}
                                    onUnmount={() => console.log('Circle unmounted')}
                                />
                            </>
                        )}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
}

export default MapPage;
