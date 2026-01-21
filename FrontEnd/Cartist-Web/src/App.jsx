import { useState } from 'react';
import cars from './data/cars';
import carsDetails from './data/carDetail';
import CarCard from './components/CarCard';
import CarDetail from './components/carDetail';
import Navbar from './components/Navbar'
import './styles/components/carDetail.css';
import './styles/app.css';
import './styles/components/carCard.css';


function App() {

  const [selectedCar, setSelectedCar] = useState(null);

  return (

    <>
      <Navbar />

      <main className="layout">
        <section className="cars-section">
          {cars.map(car => (
            <CarCard
              key={car.id}
              car={car}
              onSelect={() => setSelectedCar(car)}
            />
          ))}
        </section>

        {selectedCar && (
          <aside className="details-section">
            <CarDetail
              car={selectedCar}
              details={carsDetails[selectedCar.id]}
            />
          </aside>
        )}
      </main>

    </>



  );
}

export default App;
