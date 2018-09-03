
import {h} from "virtual-dom"
import hh from "hyperscript-helpers"

const {div, button} = hh(h)

function countView(className, _model) {
  return div({className}, `Count: ${_model.count}`)
}

function buttonView(className, _string) {
  return button({className, onclick: () => console.log(`${_string}: clicked!`)}, _string)
}

function formView(className, _model) {
  return div({className}, [
    countView("mv2", _model)
    , buttonView("pv1 ph2 mr2", "+")
    , buttonView("pv1 ph2", "-")
  ])
}

function view(_model) {
  return formView("", _model)
}

export default view
