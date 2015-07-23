var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h2>APP</h2>
			</div>
		);
	}
});

alert(123);

React.render(App, document.body);

/*
React.render((
  <Router history={history}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.body);
*/
