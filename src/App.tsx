import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import NavigationPage from './components/navigation';
import Mercury from './components/mercury';
import Venus from './components/venus';
import Earth from './components/earth';
import Mars from './components/mars';
import Jupiter from './components/jupiter';
import Saturn from './components/saturn';
import Uranus from './components/uranus';
import Neptune from './components/neptune';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/mercury" component={Mercury} />
        <Route path="/venus" component={Venus} />
        <Route path="/earth" component={Earth} />
        <Route path="/mars" component={Mars} />
        <Route path="/jupiter" component={Jupiter} />
        <Route path="/saturn" component={Saturn} />
        <Route path="/uranus" component={Uranus} />
        <Route path="/neptune" component={Neptune} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
