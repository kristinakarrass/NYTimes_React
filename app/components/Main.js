//include React
var React = require("react");
//include the link component from React Router to navigate within our application
var Link = require("react-router").Link;
//importing Helper for our AJAX requests to our API
var helpers = require("../utils/helpers")

//creating the Main component
var Main = React.createClass({
	//here we set the generic state or our component
	getInitialState: function() {
		return { searchTerm: "", results: "", history: [] };
	},

	//The moment the page renders get the History
	componentDidMount: function() {
		//get the latest history
		helpers.getHistory().then(function(response) {
			console.log(response);
			if (response !== this.state.history) {
				console.log("History", response.data);
				this.setState({ history: response.data });
			}
		}.bind(this));
	},

	componentDidUpdate: function() {

		//run the query for the article
		helpers.runQuery(this.state.searchTerm).then(function(data) {
			if (data !== this.state.results) {
				console.log("Articles", data);
				this.setState({ results: data });

				//after we have a result...post the search to
				helpers.postHistory(this.state.searchTerm).then(function() {
					console.log("Updated!");

				//After we've done the post.. we get the updated history
				helpers.getHistory().then(function(response){
					console.log("Current History", response.data);

					this.setState({ history: response.data });
					
				}.bind(this));
				}.bind(this));
			}
		}.bind(this));
	},
	//This function allows children to update the parent
	setTerm: function(term) {
		this.setState({ searchTerm: term });
	},
	//and here we render the function
	render: function() {

		return (
          <div className="container">
            <div className="jumbotron">
              <h2><strong>New York Times React App</strong></h2>
              <p><em>This is how cool it is to build a one page app with React</em></p>
              <hr />
              <p>
                <Link to="/search"><button className="btn btn-primary btn-lg">SEARCH FOR ARTICLES</button></Link>
                <Link to="/results"><button className="btn btn-primary btn-lg">SEARCH RESULTS</button></Link>
                <Link to="/saved"><button className="btn btn-primary btn-lg">SAVED ARTILCES</button></Link>                
              </p>
            </div>

          <div className="row">
            {this.props.children}
          </div>
        </div>
	  );
	}
});

module.exports = Main;