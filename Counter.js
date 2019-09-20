import React from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {connect} from 'react-redux';
import {incrActionCreator} from './App';
class Counter extends React.Component {
  render() {
    return (
      <View>
        <TouchableNativeFeedback
          onPress={() => {
            this.props.incrActionCreator();
            // this.props.dispatch(incrActionCreator());
          }}>
          <Text> Click here toIncrement</Text>
        </TouchableNativeFeedback>
        <Text>{this.props.counter}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state,
  };
};

// MapDispatchToProps using Function which works fine even with function expression
// const mapDispatchToProps = dispatch => {
//   return {
//     incrActionCreator: () => dispatch(incrActionCreator()),
//   };
// };

// MapDispatchToProps using Object
const mapDispatchToProps = {
  //   // using it directly does not work
  incrActionCreator,
  //   //but wrapping it in other function works
  //   // incrActionCreator: () => incrActionCreator(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
