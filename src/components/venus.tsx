import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import ToolbarWithDropdown from './ToolbarWithDropdown';
import './planet_pages.css'
import venusImage from './images/venus.png';


const Venus: React.FC = () => {
    return (
        <IonPage>
            <ToolbarWithDropdown />
            <IonContent id="main-content">
                <div className="planet-back">
                    <div className="title venus">
                        <div className="wave-container">
                            <h1 className="wave-text">
                                <span>V</span>
                                <span>E</span>
                                <span>N</span>
                                <span>U</span>
                                <span>S</span>
                            </h1>
                        </div>
                    </div>
                    <div className="planet_img venus">
                        <img className="planet-img" src={venusImage} alt='Mercury' />
                    </div>
                    <div className="hist-cont">
                        <p>Venus is the second planet from the sun and the third brightest oject in sky. The only planet
                            named after a female god, Venus gets its namesake from the Roman god of love and beauty.
                        </p>
                    </div>
                    <div className="facts-cont">
                        <div>Radius: <i>6,102 km</i></div>
                        <div>AU from Sun: <i>0.72</i></div>
                        <div>Tilt: <i>177.4 deg</i></div>
                        <div>Known moons: <i>0</i></div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Venus;