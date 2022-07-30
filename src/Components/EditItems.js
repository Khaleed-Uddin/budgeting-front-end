import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL

export default function EditItems() {

  let { index } = useParams();
  const navigate = useNavigate();

  const [items, setItems] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
  });

  const handleTextChange = (event) => {
    setItems({ ...items, [event.target.id]: event.target.value })
  }

  useEffect(() => {
    axios.get(`${API}/items/${index}`)
      .then(response => setItems(response.data))
      .catch(error => console.error(error))
  }, []);

  const updateItem = () => {
    axios.put(`${API}/items/${index}`, items)
      .then(response => {
        setItems(response.data)
        navigate(`/items/${index}`)
      })
      .catch(error => console.error(error))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    updateItem();
  };

  return (
    <div className="EditItems">

      <form onSubmit={handleSubmit}>

        <label htmlFor='date'>Date:</label>
        <input
          id="date"
          value={items.date}
          type='date'
          onChange={handleTextChange}
        />

        <label htmlFor='title'>Name:</label>
        <input
          id="name"
          value={items.name}
          type='text'
          onChange={handleTextChange}
          placeholder="Name"
        />

        <label htmlFor='amount'>Amount:</label>
        <input
          id="amount"
          value={items.amount}
          type="number"
          onChange={handleTextChange}
          placeholder="0"
        />

        <label htmlFor='from'>From:</label>
        <input
          id="from"
          value={items.from}
          type='text'
          onChange={handleTextChange}
          placeholder="from"
        />

        <br />
        <input className="backButton" type='submit' />
      </form>

      <Link to={`/items/${index}`}>
        <button className="backButton">Back</button>
      </Link>

    </div>
  )
}
