import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EmptyCounter from './ClickCounter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<EmptyCounter />, document.getElementById('root'));
registerServiceWorker();
