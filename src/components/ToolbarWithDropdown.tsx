import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonMenu, IonContent, IonList, IonItem, IonMenuButton } from '@ionic/react';
import { menuController } from '@ionic/core';
import { useHistory, Link } from 'react-router-dom';

const ToolbarWithDropdown: React.FC = () => {
    const history = useHistory();

    const handleNavigation = async (destination: string) => {
        await menuController.close(); // Close the menu
        history.push(destination);
    };

    return (
        <>
            <IonMenu side="start" menuId="first" contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
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
                </IonContent>
            </IonMenu>

            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton menu="first" />
                    </IonButtons>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <IonTitle>Home</IonTitle>
                    </Link>
                </IonToolbar>
            </IonHeader>
        </>
    );
};

export default ToolbarWithDropdown;