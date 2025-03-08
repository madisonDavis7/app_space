import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import ToolbarWithDropdown from './ToolbarWithDropdown';
import './planet_pages.css'
import earthImage from './images/earth.png';


const Earth: React.FC = () => {
    return (
        <IonPage>
            <ToolbarWithDropdown />
            <IonContent id="main-content">
                <div className="planet-back">
                    <div className="title earth">
                        <div className="wave-container">
                            <h1 className="wave-text">
                                <span>E</span>
                                <span>A</span>
                                <span>R</span>
                                <span>T</span>
                                <span>H</span>
                            </h1>
                        </div>
                    </div>
                    <div className="planet_img earth">
                        <img className="planet-img" src={earthImage} alt='Earth' />
                    </div>
                    <div className="hist-cont">
                        <p>Earth is the only planet to not have a name derived from Roman or Greek mythology, instead it means
                            "the ground" and was taken from Old English and Germanic. It is the fifth largest planet in the solar system
                            and the only planet with liquid water on its surface.
                        </p>
                    </div>
                    <div className="facts-cont">
                        <div>Diameter: <i>12,760 km</i></div>
                        <div>AU from Sun: <i>1</i></div>
                        <div>Tilt: <i>23.4 deg</i></div>
                        <div>Known moons: <i>1</i></div>
                    </div>
                </div>
            </IonContent>
        </IonPage >
    );
};

export default Earth;