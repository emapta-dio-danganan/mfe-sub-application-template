import React from "react";
import Content from "./Content";
import { Provider } from "react-redux";
import { store, persistor, storeWithPersist } from "./redux-store/Store";
import { PersistGate } from "redux-persist/integration/react";

const App = ({ history, containerReduxStore }) => {
  return (
    <div id="root">
      <Provider store={containerReduxStore ? store : storeWithPersist}>
        {containerReduxStore ? (
          <Content
            history={history}
            containerReduxStore={containerReduxStore}
          />
        ) : (
          <PersistGate persistor={persistor}>
            <Content history={history} />
          </PersistGate>
        )}
      </Provider>
    </div>
  );
};

// Initialized to fix the error on eslint
App.displayName = "MyApp";

export default App;
