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
        </IonPage >
    );
};

export default Earth;