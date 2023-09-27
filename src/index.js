import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';
import './index.css';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
);