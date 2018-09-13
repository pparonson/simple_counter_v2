const MSGS = {
  INC: "+"
  , DEC: "_"
}

export function incMsg(value) {
  return {
    type: MSGS.INC
    // literal syntax (ie value: "+")
    , value
  }
}

export function decMsg(value) {
  return {
    type: MSGS.DEC
    , value
  }
}

function update(_msg, _model) {
  if (_msg === "INC_COUNT") {_model.count + 1}
  if (_msg === "DEC_COUNT") {_model.count - 1}
  return _model
}

export default update
