//include React
var React = require("react");

//include grandchild component
var ArticleSearch = require("../grandchildren/articleSearch");
var Results = require("../grandchildren/Results");

//include helprs for our API calls
var helpers = require("../../utils/helpers");

//create Search component
var Search = React.createClass({
  
  //setting the initial state of the component
  getInitialState: function() {
    return {
      results: {}
    };
  },
  //this function will be passed to the child component, so it can change the parent
  setTerm: function(newSearch, newStart, newEnd) {
    helpers.runQuery(newSearch, newStart, newEnd).then(function(data) {
      this.setState({ results: {docs: data.docs }});
      //have to bind this
    }.bind(this));
  },
	//render the component
	render: function() {
   console.log("Results: ", this.state.results);
		return (
        <div className="container">
          <ArticleSearch updateSearch={this.setTerm} />
          <Results results={this.state.results} />
        </div>
		);
	}
});

//export the component back for use in other files
module.exports = Search;