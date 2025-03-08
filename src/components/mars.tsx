import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import ToolbarWithDropdown from './ToolbarWithDropdown';
import './planet_pages.css'
import marsImage from './images/mars.png';


const Mars: React.FC = () => {
    return (
        <IonPage>
            <ToolbarWithDropdown />
            <IonContent id="main-content">
                <div className="planet-back">
                    <div className="title mars">
                        <div className="wave-container">
                            <h1 className="wave-text">
                                <span>M</span>
                                <span>A</span>
                                <span>R</span>
                                <span>S</span>

                            </h1>
                        </div>
                    </div>
                    <div className="planet_img mars">
                        <img className="planet-img" src={marsImage} alt='Mercury' />
                    </div>
                    <div className="hist-cont">
                        <p>Mars is the only planet where rovers have explored the surface. Named after the Roman god of war,
                            Mars is often called the "Red Planet" due to its reddish appearance.
                        </p>
                    </div>
                    <div className="facts-cont">
                        <div>Radius: <i>3,390 km</i></div>
                        <div>AU from Sun: <i>1.5</i></div>
                        <div>Tilt: <i>25 deg</i></div>
                        <div>Known moons: <i>2</i></div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Mars;