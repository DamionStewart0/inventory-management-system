import Car from "../car/Car";
import {baseURL, config} from "../../services";
import axios from "axios";
import "./Inventory.css"

function Inventory(props) {
  console.log(props);

  const handleDelete = async (car) => {
   const carURL = `${baseURL}/${car.id}`;
   await axios.delete(carURL, config);
   props.setToggleFetch((prev) => !prev);

 };

  return (
    <div className="cars">
      {props.cars &&
        props.cars.map((car) => (
          <div className="car">
            <div className="car-image">
              <img src={car.fields.image} />
            </div>
            <Car car={car} handleDelete={handleDelete}/>
          </div>
        ))}
    </div>
  );
}

export default Inventory;
