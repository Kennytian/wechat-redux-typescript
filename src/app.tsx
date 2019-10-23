import * as React from 'react';
import { createStore } from "redux";
// @ts-ignore
import { Provider } from 'remax-redux';
import rootReducer from './reducers';
import './app.css';

const store = createStore(rootReducer);

const App = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default App;
