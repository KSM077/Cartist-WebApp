const CarCard = ({ car, onSelect }) => {
  return (
    <div className="car-card" onClick={onSelect}>
      <img src={car.image} />
        <div className="car-overlay">
          <h1>{car.name}</h1>
          <h3>{car.brand}</h3>
          <p>{car.year}</p>
        </div>
    </div>
  );
};

export default CarCard;
