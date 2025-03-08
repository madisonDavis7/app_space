import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import ToolbarWithDropdown from './ToolbarWithDropdown';
import './planet_pages.css'
import uranusImage from './images/uranus.png';


const Uranus: React.FC = () => {
    return (
        <IonPage>
            <ToolbarWithDropdown />
            <IonContent id="main-content">
                <div className="planet-back">
                    <div className="title uranus">
                        <div className="wave-container">
                            <h1 className="wave-text">
                                <span>U</span>
                                <span>R</span>
                                <span>A</span>
                                <span>N</span>
                                <span>U</span>
                                <span>S</span>
                            </h1>
                        </div>
                    </div>
                    <div className="planet_img uranus">
                        <img className="planet-img" src={uranusImage} alt='Mercury' />
                    </div>
                    <div className="hist-cont">
                        <p>Uranus was the first planet discovered with a telescope in 1781 by William Herschel. It was originally
                            named "Georgium Sidus" after King George III. It was later renamed Uranus, the Greek god of the sky.
                        </p>
                    </div>
                    <div className="facts-cont">
                        <div>Radius: <i>25, 559 km</i></div>
                        <div>AU from Sun: <i>19</i></div>
                        <div>Tilt: <i>97.77 deg</i></div>
                        <div>Known moons: <i>28</i></div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Uranus;