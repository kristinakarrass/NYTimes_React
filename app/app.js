//Include the main React dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Grab the Routes
var routes = require("./config/routes");

//Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById("app"));