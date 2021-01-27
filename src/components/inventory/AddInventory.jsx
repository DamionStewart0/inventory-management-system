import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../../services";
import "./AddInventory.css"

function AddInventory(props) {
  const [year, setYear] = useState(0);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [door, setDoor] = useState(0);
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      year,
      make,
      model,
      color,
      door,
      image,
    };

    await axios.post(baseURL, { fields }, config);
    console.log("success");
    props.setToggleFetch((prev) => !prev);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add new car</h3>
      <label htmlFor="year">Year:</label>
      <input
        year="year"
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.valueAsNumber)}
      />

      <label htmlFor="make">Make:</label>
      <input
        year="make"
        type="text"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />

      <label htmlFor="model">Model:</label>
      <input
        year="model"
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />

      <label htmlFor="color">Color:</label>
      <input
        year="color"
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <label htmlFor="door">Door:</label>
      <input
        year="door"
        type="number"
        value={door}
        onChange={(e) => setDoor(e.target.valueAsNumber)}
      />

      <label htmlFor="image">Image:</label>
      <input
        year="image"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button type="submit">Cha Ching</button>
    </form>
  );
}

export default AddInventory;
