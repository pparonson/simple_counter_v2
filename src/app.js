import createElement from "virtual-dom/create-element"


// WARNING: impure code below
function app(_model, _view, _update, _node) {
  let model = _model
  let currentView = _view(model)
  const rootNode = createElement(currentView)

  _node.appendChild(rootNode)
}

export default app
