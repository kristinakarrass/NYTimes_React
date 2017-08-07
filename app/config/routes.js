//include the React library
var React = require("react");

//include the react-router module
var router = require("react-router");

//include de Route component for displaying individual routes
var Route = router.Route;

//include the Router component to contain all our Routes
var Router = router.Router;

//Include the hashHistory prop to handle routign client side without a server
var hashHistory = router.hashHistory;

//include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

//Reference the high-level components
var Main = require("../components/Main");
var Saved = require("../components/children/Saved");
var Search = require("../components/children/Search");

//Export the Routes
module.exports = (

  //The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/*if user selects Search or Saved, show the appropriate component */}
      <Route path="/search" component={Search} />
      <Route path="/saved" component={Saved} />

      {/* if user selects any other path ... we get the Search component*/}
      <IndexRoute component={Search} />
    </Route>
   </Router>
);
