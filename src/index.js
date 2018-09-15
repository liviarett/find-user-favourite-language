import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App credentials='?client_id=6dd11e1438de3500d19e&client_secret=15d654386c254e9f1aa1f1ce6908544a4b83f2f3' />, document.getElementById('root'));
registerServiceWorker();
