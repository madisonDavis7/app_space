import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';
import './ExploreContainer.css';

// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.VITE_API_KEY,
    authDomain: process.env.VITE_AUTH_DOMAIN,
    projectId: process.env.VITE_PROJECT_ID,
    storageBucket: process.env.VITE_PROJECT_ID,
    messagingSenderId: process.env.VITE_SENDER_ID,
    appId: process.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const center = {
    lat: 0,
    lng: 0
};

const MapPage: React.FC = () => {
    const [issPosition, setIssPosition] = useState<{ lat: number, lng: number } | null>(null);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, "facts", "current"), (doc) => {
            if (doc.exists()) {
                const data = doc.data().current;
                const lat = parseFloat(data.iss_position.latitude);
                const lng = parseFloat(data.iss_position.longitude);
                setIssPosition({ lat, lng });
                setLoading(false); // Stop loading once data is fetched
                console.log('ISS Position:', { lat, lng }); // Debugging log
            } else {
                console.log('Document not found');
                setLoading(false); // Stop loading if the document doesn't exist
            }
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Add loading message while data is fetched
    }

    return (
        <div className="map-container">
            <h1 className="nav-title">Explore Where the ISS is Currently</h1>
            <div className="map-cord">
                {issPosition && (
                    <p>Latitude: {issPosition.lat} |   Longitude: {issPosition.lng}</p>
                )}
            </div>
            <div className="map-wrapper"> {/* Container for the map */}
                <LoadScript googleMapsApiKey={process.env.VITE_GOOGLE_MAPS_API_KEY!}>
                    <GoogleMap
                        center={issPosition || center}
                        zoom={4}
                    >
                        {issPosition && (
                            <Circle
                                center={issPosition}
                                radius={100000} // Radius in meters
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
