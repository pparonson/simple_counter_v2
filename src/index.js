import app from "./app"
import initModel from "./model"
import update from "./update"
import view from "./view"

const node = document.getElementById("app")

const el = document.createElement("div")
el.innerHTML = JSON.stringify(initModel, null, 2)
node.appendChild(el)

// app(initModel, update, view)
