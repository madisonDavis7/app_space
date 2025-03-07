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

export default Saturn;