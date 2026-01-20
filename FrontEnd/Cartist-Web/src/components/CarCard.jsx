const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <h1>{car.name}</h1>
      <h3>{car.brand}</h3>
      <p>{car.year}</p>
      <img src={car.image} />
    </div>
  );
};

export default CarCard;
