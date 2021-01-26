import "./App.css";
import axios from "axios";
import AddInventory from "./components/inventory/AddInventory";
import { baseURL, config } from "./services/index";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Inventory from "./components/inventory/Inventory";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/nav/Nav";

function App() {
  const [cars, setCars] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getCars = async () => {
      const response = await axios.get(baseURL, config);
      setCars(response.data.records);
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
        <Inventory cars={cars} />
      </Route>
      <Route path="/new-inventory">
        <AddInventory setToggleFetch={setToggleFetch}/>
      </Route>
    </div>
  );
}

export default App;
