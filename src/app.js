import createElement from "virtual-dom/create-element"
import {diff, patch} from "virtual-dom"

// WARNING: IMPURE CODE BELOW
function app(_model, _view, _update, _node) {
  let model = _model
  let currentView = _view(dispatch, model)
  let rootNode = createElement(currentView)

  // render the currentView to the DOM
  _node.appendChild(rootNode)

  // dispatch handle the update model state and _view sequence
  function dispatch(_msg) {
    model = _update(_msg, model)
    const updatedView = _view(dispatch, model)
    // compare currentView to updatedView to render changes
    const patches = diff(currentView, updatedView)
    // Update the DOM with the results of a diff
    rootNode = patch(rootNode, patches)
    currentView = updatedView
  }
}

export default app
