//Import reach and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';


if (module.hot) {
  module.hot.accept();
}



// create a react component
const App = () => {
  return <div>Hi There!</div>
}

// take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
