import React from "react"
import { useState } from "react"
import Header from "../components/header/header"
import MainSection from "../components/main/main"
import Items from "../db.json"

export default function Home() {
  const [itemsForRender, setItemsForRender] = useState(Items)
  let filteredData = { producer: "", price: "", quantity: "" }
  const formSubmitHandler = data => {
    filteredData = data
    filteredItemsFromData()
  }

  const filteredItemsFromData = () => {
    let itemsAfterFilter = filterByProducer(Items)
    itemsAfterFilter = filterByPrice(itemsAfterFilter)
    itemsAfterFilter = filterByQuantity(itemsAfterFilter)
    setItemsForRender(itemsAfterFilter)
  }
  const filterByProducer = items => {
    let data = filteredData.producer.toLowerCase()
    if (filteredData.producer.length > 0) {
      const itemsAfterFilterByPtoducer = items.filter(item =>
        item.producer.toLowerCase().includes(data)
      )
      return itemsAfterFilterByPtoducer
    }
    return items
  }

  const filterByPrice = items => {
    if (filteredData.price > 0) {
      const itemsAfterFilterByPrice = items.filter(
        item => item.price < Number(filteredData.price)
      )
      return itemsAfterFilterByPrice
    }
    return items
  }
  const filterByQuantity = items => {
    if (filteredData.quantity > 0) {
      const itemsAfterFilterByQuantity = items.filter(
        item => item.quantity > Number(filteredData.quantity)
      )
      return itemsAfterFilterByQuantity
    }
    return items
  }

  return (
    <>
      <Header onSubmit={formSubmitHandler} />
      <MainSection items={itemsForRender} />
    </>
  )
}
