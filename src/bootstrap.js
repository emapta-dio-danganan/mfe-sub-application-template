import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (
  el,
  { onNavigate, defaultHistory, initialPath, _container_redux_store }
) => {
  const history = defaultHistory
    ? defaultHistory
    : createMemoryHistory({
        initialEntries: [initialPath],
      });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <App history={history} containerReduxStore={_container_redux_store} />,
    el
  );
  return {
    onParentNavigate({ pathname: nextPathname }) {
      if (history.location.pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_sub-app-div");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
