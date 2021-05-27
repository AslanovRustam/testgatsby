import React from "react"
import Header from "../components/header/header"
import MainSection from "../components/main/main"
import Items from "../db.json"

export default function Home() {
  return (
    <>
      <Header />
      <MainSection items={Items} />
    </>
  )
}
