import React from "react"
// import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client'
import App from "./App"

// ReactDOM.render(<App />, document.getElementById("root"))// React 17
createRoot(document.getElementById("root")).render(<App />)// React 18
