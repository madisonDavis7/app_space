import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import ToolbarWithDropdown from '../components/ToolbarWithDropdown';

const Home: React.FC = () => {
  return (
    <IonPage>
      <ToolbarWithDropdown />
      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
