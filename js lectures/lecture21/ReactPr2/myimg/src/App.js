import './myimages/hero.css';
import Ironman from './myimages/Ironman';
import Captain from './myimages/Captain';
import Hulk from './myimages/Hulk';

function App() {
  return (
    <div>
      <h1>Marvel Superheroes</h1>
      <div className='row'>
        <Ironman />
        <Captain />
        <Hulk />
      </div>
    </div>
    
  );
}

export default App;
