const MSGS = {
  INC: "INC"
  , DEC: "DEC"
}

export function incCounterMsg() {
  return {
    type: MSGS.INC
    , value: "+"
  }
}

export function decCounterMsg() {
  return {
    type: MSGS.DEC
    , value: "-"
  }
}

function update(_msg, _model) {
  const {count} = _model
  if (_msg.type === MSGS.INC) {
    return {
      ..._model
      , count: count + 1
    }
  }
  if (_msg.type === MSGS.DEC) {
    return {
      ..._model
      , count: count -1
    }
  }
  return _model
}

export default update
