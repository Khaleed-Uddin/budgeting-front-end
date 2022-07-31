import { useEffect, useState } from "react"
import axios from "axios"
import Item from "./Item"

const API = process.env.REACT_APP_API_URL;

export default function Items() {

  const [items, setItems] = useState([]);
  let sum = 0;

  useEffect(() => {
    axios.get(`${API}/items`)
      .then((res) => { setItems(res.data) })
      .catch((error) => console.error(error))
  }, [])

  const amountArr = items.map((item) => Number(item.amount))
  amountArr.forEach(amount => {
    sum += amount;
    return sum;
  })

  return (
    <div className="Items">
      <h1>Total Balance: ${sum}</h1>
      <div>

        {items.map((item, index) => {
          return (
            <div >
              <Item key={item.name} index={index} item={item} />
            </div>
          )
        })}

      </div>
    </div>
  )
}
