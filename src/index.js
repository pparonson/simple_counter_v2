import {h} from "virtual-dom"
import hh from "hyperscript-helpers"
import createElement from "virtual-dom/create-element"
import * as R from "ramda"

import app from "./app"
import initModel from "./model"
import update from "./update"
import view from "./view"

const {pre, td, th, tr, tbody} = hh(h)

const node = document.getElementById("app")

const el = document.createElement("div")
el.innerHTML = JSON.stringify(initModel, null, 2)

node.appendChild(el)

// app(initModel, update, view)
