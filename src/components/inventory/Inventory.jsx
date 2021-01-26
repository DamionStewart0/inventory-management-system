import { useParams } from "react-router-dom";
import {baseURL, config} from "../../services";
import axios from "axios";

function Inventory(props) {
//    const params = useParams();
//    const car = props.inventory.find((car) =>
//         return car.id === params.id
//   });
  console.log(props);

//   const handleDelete = async () => {
//    const recordURL = `${baseURL}/${cars.id}`;
//    await axios.delete(recordURL, config);
//    props.setToggleFetch((prev) => !prev);
   // history.push('/')
//  };

  return (
    <div className="cars">
      {props.cars &&
        props.cars.map((car) => (
          <div>
            <div className="car-image">
              <img src={car.fields.image} />
            </div>
            <div className="car-info">
              <h4>{car.fields.year}</h4>
              <h4>{car.fields.make}</h4>
              <h4>{car.fields.model}</h4>
              <h4>{car.fields.color}</h4>
              <button>Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Inventory;
