const carDetail = ({ details }) => {
    return (
        <div className="car-detail">
            <h4>{details.description}</h4>
            <h4>{details.features}</h4>
        </div>
    );

}

export default carDetail;