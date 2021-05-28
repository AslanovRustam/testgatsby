import React from "react"
import { useState } from "react"
import * as s from "./header.module.css"

export default function Header({ onSubmit }) {
  const [producer, setProducer] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")

  const handleProducerChange = e => {
    setProducer(e.currentTarget.value)
  }
  const handlePriceChange = e => {
    setPrice(e.currentTarget.value)
  }
  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value)
  }
  const data = {
    producer,
    price,
    quantity,
  }
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(data)
    resetForm()
  }

  const resetForm = () => {
    setProducer("")
    setPrice("")
    setQuantity("")
  }
  return (
    <div className={s.headerContainer}>
      <div>
        <h2>Request info</h2>
        <p>Please enter your request</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Producer"
            name="producer"
            value={producer}
            onChange={handleProducerChange}
          ></input>
        </label>
        <label>
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={price}
            onChange={handlePriceChange}
          ></input>
        </label>
        <label>
          <input
            type="number"
            placeholder="Quantity"
            name="dateOfBirthd"
            value={quantity}
            onChange={handleQuantityChange}
          ></input>
        </label>
        <button className={s.formButton} type="submit">
          Request Info
        </button>
      </form>
    </div>
  )
}
