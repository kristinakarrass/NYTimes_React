//include the React library
var React = require("react");

//include the react-router module
var router = require("react-router");

//include the Route component for displaying individual routes
var Route = router.Route;

//include the Router component to contain all our Routes
var Router = router.Router;

//include hashHistory prop to handle routing client side without server
var hashHistory = router.hashHistory;

//include IndexRoute (catch all route)
var IndexRoute = router.IndexRoute;

//require the high level components
var Main = require("../components/Main");
var Search = require("../components/children/Search");
var Saved = require("../components/children/Saved");
var Results = require("../components/children/Results");

module.exports = (
  
  //the high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

      {/* If user selects Info or Chat show the appropriate component */}    
      <Route path="search" component={Search} />
      <Route path="saved" component={Saved} />
      <Route path="results" component={Results} />
      
      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Search} />
    </Route>

  </Router>
);