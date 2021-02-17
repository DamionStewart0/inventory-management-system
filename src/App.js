import "./App.css";
import axios from "axios";
import AddInventory from "./components/inventory/AddInventory";
import { baseURL, config } from "./services/index";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Inventory from "./components/inventory/Inventory";
import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/nav/Nav";

function App() {
  const [cars, setCars] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const history = useHistory();


  useEffect(() => {
    const getCars = async () => {
      const response = await axios.get(baseURL, config);
      setCars(response.data.records);
      // history.push('/')
    };
    getCars();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Route exact path="/">
        <Home cars={cars}/>
      </Route>

      <Route path="/inventory">
        <Inventory cars={cars} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/new-inventory">
        <AddInventory setToggleFetch={setToggleFetch}/>
      </Route>
      < Footer />
    </div>
  );
}

export default App;
