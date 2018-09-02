
import {h} from "virtual-dom"
import hh from "hyperscript-helpers"

const {div, button} = hh(h)

function countView(className, _model) {
  return div({className}, `Count: ${_model.count}`)
}

function buttonView(className, _string) {
  return button({className}, _string)
}

function formView(className, _model) {
  return div({className}, [
    countView("", _model)
    , buttonView("", "+")
    , buttonView("", "-")
  ])
}

function view(_model) {
  return formView("", _model)
}

export default view
