import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import Item from "./Item"

const API = process.env.REACT_APP_API_URL;

export default function Items() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${API}/items`)
      .then((res) => { setItems(res.data) })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className="Items">
      <section>
        <table>
          <td>
            {items.map((item, index) => {
              return (
                <div >
                  <Item key={item.name} index={index} item={item} />
                </div>
              )
            })}
          </td>
        </table>
      </section>

    </div>
  )
}
