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
    console.log("filteredData", filteredData)
    filteredItemsFromData()
    // console.log("filteredItems", filteredItems)
  }
  // console.log(Items[5].producer.split(""))

  const filteredItemsFromData = () => {
    let itemsAfterFilter = filterByProducer(Items)
    itemsAfterFilter = filterByPrice(itemsAfterFilter)
    itemsAfterFilter = filterByQuantity(itemsAfterFilter)
    setItemsForRender(itemsAfterFilter)
  }

  const filterByProducer = items => {
    if (filteredData.producer.length > 0) {
      const itemsAfterFilterByPtoducer = items.filter(
        item =>
          item.producer.toLowerCase() === filteredData.producer.toLowerCase()
      )
      return itemsAfterFilterByPtoducer
    }
    return items
  }
  // const filterByProducer = items => {
  //   if (filteredData.producer.length > 0) {
  //     const itemsAfterFilterByPtoducer = items.filter(item =>
  //       item.producer
  //         .toLowerCase()
  //         .split("")
  //         .includes(filteredData.producer.toLowerCase().split(""))
  //     )
  //     return itemsAfterFilterByPtoducer
  //   }
  //   return items
  // }

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
      {/* <MainSection items={filteredItemsFromData()} /> */}
    </>
  )
}

// const filteredItemsFromData = () => {
//   Items.map(item => {
//     if (
//       item.producer.toLowerCase().includes(filteredData.producer.toLowerCase())
//     ) {
//       filteredItems.push(item)
//       // console.log("filteredProducer", filteredProducer)
//       // console.log("item.producer", item.producer)
//     }
//     return
//   })
//   return filteredItems
// }
/////////////////
// let itemsAfterFilter = Items
// if (filteredData.producer.length > 0) {
//   itemsAfterFilter = Items.filter(
//     item =>
//       item.producer.toLowerCase() === filteredData.producer.toLowerCase()
//   )
// }
