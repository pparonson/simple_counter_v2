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

// const el = document.createElement("div")
// el.innerHTML = JSON.stringify(initModel, null, 2)

// node.appendChild(el)

// app(initModel, update, view)

// ____________________________________________________________________________

const MEALS = [
  {description: "breakfast", calories: 510}
  , {description: "lunch", calories: 460}
  , {description: "snack", calories: 235}
]

// Plan / fns to createElement:
// cell, mealRow, headerRow, totalRow, mealBody, mealHeader, mealsTable
function cell(_tag, _className, _data) {
  return _tag({className: _className}, _data)
}

function tableRow(className, _mealRecord) {
  return tr({className}, [
    cell(td, "pa2", _mealRecord.description)
    , cell(td, "pa2 tr", _mealRecord.calories)
  ])
}

function tableBody(className, _meals) {
  // rows is an array of table row elements
  const rows = R.map(R.partial(tableRow, ["stripe-dark"]), _meals)
  return tbody({className}, rows)
}

const _view = tableBody("", MEALS)

// console.log(_view.outerHTML);
// const el = document.createElement("td")
// el.innerHTML = "Lunch"

// Render the currentView node to a DOM node
let rootNode = createElement(_view)

node.appendChild(rootNode)
