import "./Car.css"


function Car(props) {
  return (
    <div className="car-info">
      <div>{props.car.fields.year}</div>
      <div>{props.car.fields.make}</div>
      <div>{props.car.fields.model}</div>
      <div>{props.car.fields.color}</div>
      {props.handleDelete ? (
        <button onClick={() => props.handleDelete(props.car)}>Delete</button>
      ) : (
        <div className="indicator">
          <span style={{ color: props.car.fields.rented ? "red" : "black" }}>
            ·
          </span>
        </div>
      )}
    </div>
  );
}
export default Car;
