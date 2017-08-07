// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  render: function() {

    return (
      //parent div for all our lower level items
      <div className="main-container">
        <div className="container">
          {/* Navbar */}
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">NYT-React App</Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/search">Search</Link></li>
                  <li><Link to="/saved">My Articles</Link></li>
                  <li><a href="https://github.com/kristinakarrass/NYTimes_React" target="blank">GitHub Repo</a></li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Jumbotron */}
          <div className="jumbotron">
            <img className="img-responsive center-block" src="./assets/images/NYT.png" />
            <h3 className="text-center">Scrape and save New York Times articles.</h3>
          </div>


          {/* area where child components will be displayed */}
          {this.props.children}

          <footer>
            <hr />
            <p>
              This app is powered by React.js. All content copyright by The New York Times.
            </p>
          </footer>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Main;
