import { useState } from 'react';
import cars from '../data/cars';
import carsDetails from '../data/carDetail';
import CarCard from '../components/CarCard';
import CarDetail from '../components/carDetail';
import '../styles/components/carDetail.css';
import '../styles/app.css';
import '../styles/components/carCard.css';


function Home() {

  const [selectedCarId, setSelectedCarId] = useState(null);

  return (
    
      <main className="layout">
        <section className="cars-section">
          {cars.map((car) => (
            <div key={car.id} className="car-column">
              <CarCard
                car={car}
                onSelect={() =>
                  setSelectedCarId(
                    selectedCarId === car.id ? null : car.id
                  )
                }
              />

              {selectedCarId === car.id && (
                <CarDetail
                  car={car}
                  details={carsDetails[car.id]}
                />
              )}

            </div>
          ))}
        </section>
      </main>

  );
}

export default Home;
