// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var ArticleSearch = require("./grandchildren/articleSearch");
var Results = require("./grandchildren/Results");

// Include the helpers for making API calls
var helpers = require("../../utils/helpers");

// Create the Search component
var Search = React.createClass({

  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  getInitialState: function() {
    return {
      results: {}
    };
  },

//function to let child component pass information back to parent
  setTerm: function(newQuery, newStart, newEnd) {
    helpers.runQuery(newQuery, newStart, newEnd).then(function(data) {
      this.setState({ results: { docs: data.docs }});
    }.bind(this));
  },

  // Render search component with its child components article search and results
  render: function() {
    console.log("Render Results", this.state.results);

    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <ArticleSearch updateSearch={this.setTerm} />
        {/* Note how we pass in the results into this component */}
        <Results results={this.state.results} />
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Search;
