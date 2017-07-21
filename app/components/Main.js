//include react
var React = require("react");
//include the link compontent from React
var Link = require("react-router").Link;

//Creating the Main component
var Main = React.createClass({
	//render the function
	render: function() {
		return (
	      <div className="container">
	        <nav className="navbar navbar-default">
	          <div className="container-fluid">
	            <div className="navbar-header">
	              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	                <span className="sr-only">Toggle navigation</span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	              </button>
	              <a className="navbar-brand" href="#">NYT Article Scrubber</a>
	            </div>
	 
	            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	              <ul className="nav navbar-nav navbar-right">
	                <li><button type="submit" className="btn btn-default">Article Search</button></li>
	                <li><button type="submit" className="btn btn-default">Results</button></li>
	                <li><button type="submit" className="btn btn-default">Saved Articles</button></li>
	              </ul>
	            </div>
	          </div>
	        </nav>
	        <div className="row">
	          {/*here we make sure the component is conditionally rendered - default component is the Search component*/}
	          {this.props.children}
	        </div>
	       </div>
		);
	}
});

//export Main component
module.exports = Main;