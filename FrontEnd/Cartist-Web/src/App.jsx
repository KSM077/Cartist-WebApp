import { useState } from 'react';
import cars from './data/cars';
import carsDetails from './data/carDetail';
import CarCard from './components/CarCard';
import CarDetail from './components/carDetail';
import './styles/components/carDetail.css';
import './styles/app.css';
import './styles/components/carCard.css';


function App() {

  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className='app cars-list'>
      <img src="" alt="" />
          {cars.map(car => (
            <CarCard
              key={car.id}
              car={car}
              onSelect={() => setSelectedCar(car)}
            />
          ))}

      {selectedCar && (
        <CarDetail
          car={selectedCar}
          details={carsDetails[selectedCar.id]}
        />
      )}


    </div>
  );
}

export default App;
