import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import ToolbarWithDropdown from './ToolbarWithDropdown';
import './planet_pages.css';
import mercuryImage from './images/mercury.png';

const Mercury: React.FC = () => {
    return (
        <IonPage>
            <ToolbarWithDropdown />
            <IonContent id="main-content">
                <div className="planet-back">
                    <div className="title">
                        <div className="wave-container">
                            <h1 className="wave-text">
                                <span>M</span>
                                <span>E</span>
                                <span>R</span>
                                <span>C</span>
                                <span>U</span>
                                <span>R</span>
                                <span>Y</span>
                            </h1>
                        </div>
                    </div>
                    <div className="planet_img mercury">
                        <img className="planet-img" src={mercuryImage} alt='Mercury' />
                    </div>
                    <div className="hist-cont">
                        <p>Mercury is named after the swiftest of the Roman gods due to it's qucik orbit. Being the
                            closest planet to the sun, it has a very short year of only 88 Earth days.
                        </p>
                    </div>
                    <div className="facts-cont">
                        <div>Radius: <i>2,440 km</i></div>
                        <div>AU from Sun: <i>0.4</i></div>
                        <div>Tilt: <i>2 deg</i></div>
                        <div>Known moonds: <i>0</i></div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Mercury;