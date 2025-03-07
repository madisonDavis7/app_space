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
                        <p>Here is where a bunch of history and brief facts can go</p>
                    </div>
                    <div className="facts-cont">
                        <div>Fact 1</div>
                        <div>Fact 2</div>
                        <div>Fact 3</div>
                        <div>Fact 4</div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Jupiter;