import React from 'react';
import { useHistory } from 'react-router-dom';

const NavigationPage: React.FC = () => {
    const history = useHistory();

    const handleNavigation = (destination: string) => {
        history.push(destination);
    };

    return (
        <div className="nav-page">
            <h2 className="nav-title">Choose a Planet to Explore</h2>
            <div className="planet-btns">
                <button className="planet-btn mercury" onClick={() => handleNavigation('/mercury')}></button>
                <button className="planet-btn venus" onClick={() => handleNavigation('/venus')}></button>
                <button className="planet-btn earth" onClick={() => handleNavigation('/earth')}></button>
                <button className="planet-btn mars" onClick={() => handleNavigation('/mars')}></button>
                <button className="planet-btn jupiter" onClick={() => handleNavigation('/jupiter')}></button>
                <button className="planet-btn saturn" onClick={() => handleNavigation('/saturn')}></button>
                <button className="planet-btn uranus" onClick={() => handleNavigation('/uranus')}></button>
                <button className="planet-btn neptune" onClick={() => handleNavigation('/neptune')}></button>
            </div>
        </div>
    );
};

export default NavigationPage;