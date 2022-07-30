import { Link } from "react-router-dom"

export default function Item({ item, index }) {

  return (
    <div className="Item">
      <div>
      <Link to={`/items/${index}`}><h1>{item.name}</h1></Link>
      <h3>{item.date}</h3>
      <h2>${item.amount}</h2>
      <h6>From: {item.from}</h6>
      </div>
    </div>
  )
}
