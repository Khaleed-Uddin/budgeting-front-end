import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const API = process.env.REACT_APP_API_URL;

export default function NewItems() {
  const [items, setItems] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
  });

  const navigate = useNavigate();

  const addItem = () => {
    axios.post(`${API}/items`, items)
      .then(response => navigate(`/items`))
      .catch(error => console.error(error))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem();
  }

  const handleTextChange = (event) => {
    setItems({ ...items, [event.target.id]: event.target.value })
  }

  return (
    <div className="NewItems">

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

    </div>
  )
}
