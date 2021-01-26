import {useState} from "react";

function Home(props) {
    const [rented, setRented] = useState(true);
    //  const params = useParams();
    //  const car = props.inventory.find((car) =>
    //       return car.id === params.id
    // });
    console.log(props);

  
    return (
      <div className="Home">
        {props.cars &&
          props.cars.map((car) => (
            <div>
              <div className="car-info">
                  
                <div>{car.fields.year}</div>
                <div>{car.fields.make}</div>
                <div>{car.fields.model}</div>
                <div>{car.fields.color}</div>
                <div className="indicator"><span>.</span></div>
              </div>
            </div>
          ))}
      </div>
    );
  }
  
  export default Home;
  