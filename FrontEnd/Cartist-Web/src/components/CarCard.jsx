const CarCard = ({ car, onSelect }) => {
  return (
    <div className="car-card" onClick={onSelect}>
      <img src={car.image} />
        <div className="car-overlay">
          <h1>{car.brand} {car.name}</h1>
          <h2>{car.price}</h2>
          <h3>{car.year}</h3>
        </div>
    </div>
  );
};

export default CarCard;
