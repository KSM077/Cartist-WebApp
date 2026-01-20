const CarDetail = ({ car, details }) => {
  return (
    <div className="car-detail">
      <h2>{car.name}</h2>
      <p>{details.description}</p>
      <p>{details.motor}</p>
      <p>{details.transmision}</p>
      <p>{details.speed}</p>
    </div>
  );
};

export default CarDetail;
