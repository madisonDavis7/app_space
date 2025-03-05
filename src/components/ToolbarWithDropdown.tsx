import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonPopover, IonList, IonItem } from '@ionic/react';
import { useHistory, Link } from 'react-router-dom';

const ToolbarWithDropdown: React.FC = () => {
    const history = useHistory();
    const [showPopover, setShowPopover] = useState(false);

    const handleNavigation = (destination: string) => {
        setShowPopover(false); // Close the popover
        history.push(destination);
    };

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => setShowPopover(true)}>
                            Menu
                        </IonButton>
                    </IonButtons>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <IonTitle>Home</IonTitle>
                    </Link>
                </IonToolbar>
            </IonHeader>

            <IonPopover
                isOpen={showPopover}
                onDidDismiss={() => setShowPopover(false)}
            >
                <IonList>
                    <IonItem button onClick={() => handleNavigation('/mercury')}>
                        Mercury
                    </IonItem>
                    <IonItem button onClick={() => handleNavigation('/venus')}>
                        Venus
                    </IonItem>
                    <IonItem button onClick={() => handleNavigation('/earth')}>
                        Earth
                    </IonItem>
                    <IonItem button onClick={() => handleNavigation('/mars')}>
                        Mars
                    </IonItem>
                    <IonItem button onClick={() => handleNavigation('/jupiter')}>
                        Jupiter
                    </IonItem>
                    <IonItem button onClick={() => handleNavigation('/saturn')}>
                        Saturn
                    </IonItem>
                    <IonItem button onClick={() => handleNavigation('/uranus')}>
                        Uranus
                    </IonItem>
                    <IonItem button onClick={() => handleNavigation('/neptune')}>
                        Neptune
                    </IonItem>
                </IonList>
            </IonPopover>
        </>
    );
};

export default ToolbarWithDropdown;