import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <IonTitle>Home</IonTitle>
          </Link>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <IonTitle size="large">Home</IonTitle>
            </Link>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
