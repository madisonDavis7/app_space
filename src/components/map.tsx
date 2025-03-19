import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';
import './ExploreContainer.css';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: 0,
    lng: 0,
};

const MapPage: React.FC = () => {
    const [issPosition, setIssPosition] = useState<{ lat: number, lng: number } | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchISSPosition = async () => {
        try {
            console.log('Fetching ISS position...');
            const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
            const data = await response.json();
            const lat = data.latitude;
            const lng = data.longitude;

            setIssPosition({ lat, lng });
            setLoading(false);
            console.log('ISS Position updated:', { lat, lng });
        } catch (error) {
            console.error('Error fetching ISS position:', error);
            setLoading(false);
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
                    <p>Latitude: {issPosition.lat.toFixed(2)} | Longitude: {issPosition.lng.toFixed(2)}</p>
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
                                radius={80000} // Radius in meters
                                options={{
                                    strokeColor: "#e63674",
                                    strokeOpacity: 1,
                                    strokeWeight: 10,
                                    fillColor: "#e63674",
                                    fillOpacity: 0.35,
                                    zIndex: 3, // Ensure the circle is on top
                                }}
                                onLoad={() => console.log('Circle loaded')}
                                onUnmount={() => console.log('Circle unmounted')}
                            />
                        )}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default MapPage;
