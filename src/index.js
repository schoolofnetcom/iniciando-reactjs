import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import HelloWorld from './HelloWorld'
import PropsValidation from './PropsValidation'
import Events from './Events'
import Translate from './Translate'

ReactDOM.render(
	// <HelloWorld txt = 'Hello World from Component React.js by School of net' />,
	// <PropsValidation name="123" age="21" height="1.75" />,
	// <Events />,
	<Translate />,
	document.getElementById("root")
)

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
