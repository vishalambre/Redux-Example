export default logger = function({getState}) {
  console.log('getState' + getState);
  return function(...next) {
    console.log(next);
    console.log('next' + next);
    return function(action) {
      console.log(getState());
      console.log(next.length);
      console.log('action' + JSON.stringify(action));
      //   next(action);
      console.log(getState());
    };
  };
};
