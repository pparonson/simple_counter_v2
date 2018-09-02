import {h} from "virtual-dom"
import hh from "hyperscript-helpers"
import createElement from "virtual-dom/create-element"
import * as R from "ramda"

import app from "./app"
import initModel from "./model"
import update from "./update"
import view from "./view"

const {pre, td, th, tr, tbody, thead, table} = hh(h)

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

function totalRow(className, _meals) {
  const total = getTotal(_meals)
  return tr({className}, [
    cell(td, "pa2 tr", "TOTAL:")
    , cell(td, "pa2 tr", total)
  ])
}

function tableBody(className, _meals) {
  // rows is an array of table row elements
  const rows = R.map(R.partial(tableRow, ["stripe-dark"]), _meals)
  return tbody({className}, [
    ...rows
    , totalRow("stripe-dark", _meals)
  ])
}

const headerRow = tr({className: ""}, [
  cell(th, "pa2", "Description")
  , cell(th, "pa2 tr", "Calories")
])

const tableHead = thead({className: ""}, headerRow)

function _table(className, _meals) {
  return table({className}, [
    tableHead
    , tableBody("", _meals)
  ])
}

const _view = _table("", MEALS)

// console.log(_view.outerHTML);
// const el = document.createElement("td")
// el.innerHTML = "Lunch"

// Render the currentView node to a DOM node
let rootNode = createElement(_view)

node.appendChild(rootNode)

// helper fns
function getTotal(_arr) {
  return R.compose(
    R.reduce(R.add, 0)
    , R.map(item => {
      return item.calories
    })(_arr)
  )

  // const props = R.map((item) => {
  //   return item.calories
  // }, _arr)
  // return R.reduce(R.add, 0, props)
}
