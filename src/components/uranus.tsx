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
                    <h1 className="title">Uranus</h1>
                    <div className="planet_img">
                        <img className="planet-img" src={uranusImage} alt='Mercury' />
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

export default Uranus;