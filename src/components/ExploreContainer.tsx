import './ExploreContainer.css';
import NavigationPage from './navigation';
import ToolbarWithDropdown from './ToolbarWithDropdown';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="main-cont">
      <h1 className="title-txt">Welcome to</h1>
      <div className="wave-container">
        <h1 className="wave-text">
          <span>C</span>
          <span>E</span>
          <span>L</span>
          <span>E</span>
          <span>S</span>
          <span>T</span>
          <span>I</span>
          <span>A</span>
        </h1>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="background-container">
      <div className="stars"></div>
      <ExploreContainer />
      <NavigationPage />
    </div>
  );
};


export default HomePage;