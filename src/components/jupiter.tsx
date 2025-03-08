import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import ToolbarWithDropdown from './ToolbarWithDropdown';
import './planet_pages.css'
import jupiterImage from './images/jupiter.jpg';
const Jupiter: React.FC = () => {
    return (
        <IonPage>
            <ToolbarWithDropdown />
            <IonContent id="main-content">
                <div className="planet-back">
                    <div className="title jupiter">
                        <div className="wave-container">
                            <h1 className="wave-text">
                                <span>J</span>
                                <span>U</span>
                                <span>P</span>
                                <span>I</span>
                                <span>T</span>
                                <span>E</span>
                                <span>R</span>
                            </h1>
                        </div>
                    </div>
                    <div className="planet_img jupiter">
                        <img className="planet-img" src={jupiterImage} alt='Jupiter' />
                    </div>
                    <div className="hist-cont">
                        <p>Jupiter is both the largest and oldest planet. It's namesake comes from the the king of gods,
                            Jupiter, in Roman mythology. The first of the gas giants, Jupiter is made mainly of
                            hydrogen and helium.  </p>
                    </div>
                    <div className="facts-cont">
                        <div>Radius: <i>69,911 km</i></div>
                        <div>AU from Sun: <i>5.2</i></div>
                        <div>Tilt: <i>3 deg</i></div>
                        <div>Known moons: <i>95</i></div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Jupiter;