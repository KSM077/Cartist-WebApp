import cars from './data/cars';
import CarCard from './components/CarCard';
import './styles/app.css';
import './styles/components/carCard.css';

function App() {
  return (
    <div className='app'>
        <img src="" alt="" />
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
      
    </div>
  );
}

export default App;
