
import {h} from "virtual-dom"
import hh from "hyperscript-helpers"

import incMsg from "./update"
import decMsg from "./update"

const {div, button} = hh(h)

function countView(className, _model) {
  return div({className}, `Count: ${_model.count}`)
}

function buttonView(_dispatch, className, _msg) {
  return button({className, onclick: () => _dispatch(_msg)}, _msg)
}

function formView(_dispatch, className, _model) {
  return div({className}, [
    countView("mv2", _model)
    , buttonView(_dispatch, "pv1 ph2 mr2", incMsg())
    , buttonView(_dispatch, "pv1 ph2", MSGS.DEC)
  ])
}

function view(_dispatch, _model) {
  return formView(_dispatch, "", _model)
}

export default view
