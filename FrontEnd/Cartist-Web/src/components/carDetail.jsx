import Typewriter from "../components/typewriter.jsx";

const CarDetail = ({ car, details }) => {
  return (
    <div className="car-detail">
      <h2>{car.brand} {car.name}</h2>
      <Typewriter text={details.description} />
      <Typewriter text={details.motor} />
      <Typewriter text={details.transmision} />
      <Typewriter text={details.speed} />
    </div>
  );
};

export default CarDetail;
