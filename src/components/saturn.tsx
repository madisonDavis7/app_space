import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import ToolbarWithDropdown from './ToolbarWithDropdown';
import './planet_pages.css'
import saturnImage from './images/saturn.png';


const Saturn: React.FC = () => {
    return (
        <IonPage>
            <ToolbarWithDropdown />
            <IonContent id="main-content">
                <div className="planet-back">
                    <div className="title saturn">
                        <div className="wave-container">
                            <h1 className="wave-text">
                                <span>S</span>
                                <span>A</span>
                                <span>T</span>
                                <span>U</span>
                                <span>R</span>
                                <span>N</span>
                            </h1>
                        </div>
                    </div>
                    <div className="planet_img saturn">
                        <img className="planet-img" src={saturnImage} alt='Mercury' />
                    </div>
                    <div className="hist-cont">
                        <p>Saturn was named after the Roman god of agriculture and wealth. It is the sixth planet from
                            the sun and the second largest in the solar system.
                        </p>
                    </div>
                    <div className="facts-cont">
                        <div>Radius: <i>110, 250 km</i></div>
                        <div>AU from Sun: <i>9.5</i></div>
                        <div>Tilt: <i>26.73 deg</i></div>
                        <div>Known moons: <i>146</i></div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Saturn;