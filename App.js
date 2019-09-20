/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Counter from './Counter';

//This doesn't work for some reason
export const incrActionCreator = () => {
  return {
    type: 'INCR',
  };
};

//But this works
// export function incrActionCreator() {
//   return {
//     type: 'INCR',
//   };
// }

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCR':
      return state + 1;
    case 'DECR':
      return state - 1;
    default:
      return state;
  }
};
// const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer);
// const store = createStore(reducer, middleware);

export default class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Counter />
        </View>
      </Provider>
    );
  }
}
