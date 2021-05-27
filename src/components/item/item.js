import React from "react"
import defaultImg from "../../default.png"
import * as s from "./item.module.css"

export default function Item({ name, url, price, quantity }) {
  return (
    <>
      <img
        src={url ? url : defaultImg}
        className={s.itemImg}
        alt={name}
        width="380"
        height="214"
      />
      <div className={s.itemNameCantainer}>
        <p className={s.itemName}>{name}</p>
      </div>
      <div className={s.priceContainer}>
        <span>{price}</span>
        <span className={s.icon}> ₴</span>
      </div>
      <div className={s.quantityContainer}>
        <span>{quantity > 10 ? "В наличии" : "Заканчивается"}</span>
      </div>
    </>
  )
}
