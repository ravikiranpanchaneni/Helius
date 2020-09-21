import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';
import {Helmet} from 'react-helmet';

export default (req, store)=>{
	const content = renderToString(
	<Provider store={store}>		
	<StaticRouter location={req.path} context={{}}>
	<div>{ renderRoutes(Routes) }</div>
	</StaticRouter>
	</Provider>);
	
const helmet = Helmet.renderStatic();

	return `
	<html> 
	<head>
	${helmet.title.toString()}
	${helmet.meta.toString()}
	
	</head>
	<body> 
	<div id="root"> ${content}</div>
	<script>
		window.mystate = ${serialize(store.getState())}
	 </script>
	<script src="bundle.js"></script>
	</body>
	</html>
	`;
}
