import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const API = process.env.REACT_APP_API_URL;

export default function ItemDetails() {

  const [items, setItems] = useState({});
  let { index } = useParams();

  const navigate = useNavigate();

  useEffect(
    () => {
      axios
        .get(`${API}/items/${index}`)
        .then((response) => setItems(response.data))
        .catch((error) => navigate('/error'))
    });

  const handleDelete = () => {
    axios
      .delete(`${API}/items/${index}`)
      .then((response) => navigate(`/items`))
      .catch((error) => console.error(error))
  }

  return (
    <article className="ItemDetails">

      <h1>
        <span>
          <a href={items.url}>{items.name}</a>
        </span>
      </h1>
      <h3> Transaction date:{items.date}</h3>
      <h4>Amount: ${items.amount}</h4>
      <p> From: {items.from}</p>

      <div className="showNavigation">
        <div>
          <a href={`/items`}>
            <button className="backButton">Back</button>
          </a>
        </div>

        <div>
          <a href={`/items/${index}/edit`}>
            <button className="editButton">Edit</button>
          </a>
        </div>

        <span>
          <button className="deleteButton" onClick={handleDelete}>Delete</button>
        </span>

      </div>

    </article>
  )
}
