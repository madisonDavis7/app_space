import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import ToolbarWithDropdown from './ToolbarWithDropdown';
import './planet_pages.css'
import neptuneImage from './images/neptune.png';


const Neptune: React.FC = () => {
    return (
        <IonPage>
            <ToolbarWithDropdown />
            <IonContent id="main-content">
                <div className="planet-back">
                    <div className="title neptune">
                        <div className="wave-container">
                            <h1 className="wave-text">
                                <span>N</span>
                                <span>E</span>
                                <span>P</span>
                                <span>T</span>
                                <span>U</span>
                                <span>N</span>
                                <span>E</span>
                            </h1>
                        </div>
                    </div>
                    <div className="planet_img neptune">
                        <img className="planet-img" src={neptuneImage} alt='Mercury' />
                    </div>
                    <div className="hist-cont">
                        <p>Because of it's deep blue color Neptune was named after the Roman god of the sea. It was the
                            first planet to be discovered using mathematics. It was discovered in 1846 by Urbain Le Verrier.
                        </p>
                    </div>
                    <div className="facts-cont">
                        <div>Radius: <i>49,528 km</i></div>
                        <div>AU from Sun: <i>30</i></div>
                        <div>Tilt: <i>28 deg</i></div>
                        <div>Known moon: <i>16</i></div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Neptune;