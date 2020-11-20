import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import func from "./print";

const styleCenter = {textAlign: "center"};

const App = () => {
  return <React.Fragment>
    <h1 className="brand-name" style={styleCenter}>React-webpack-conf</h1>;
    <div style={styleCenter}><button onClick={func}>Click me</button></div>
  </React.Fragment>
};

ReactDOM.render(<App/>, document.getElementById("root"));
