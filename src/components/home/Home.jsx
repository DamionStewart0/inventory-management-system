import Car from "../car/Car";
import './Home.css';

function Home(props) {
    
    
    console.log(props);

  
    return (
      <div className="Home">
        {props.cars &&
          props.cars.map((car) => (
            <div>
             <Car car={car}/>
            </div>
          ))}
      </div>
    );
  }
  
  export default Home;
  