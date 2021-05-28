import React from "react"
import * as s from "./main.module.css"
import Item from "../item/item"

export default function Main({ items }) {
  return (
    <>
      <div className={s.listOfCard}>
        <ul className={s.itemsContainer}>
          {items.map(item => (
            <li key={item.id} className={s.cardContainer}>
              {/* <Link to={`/laptop/${item.name}`}> */}
              <Item
                name={item.name}
                url={item.url}
                price={item.price}
                quantity={item.quantity}
              />
              {/* </Link> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
