// require React as a dependency
var React = require("react");

// create article search component
var ArticleSearch = React.createClass({

  // Here we set initial variables for the component to be blanks
  getInitialState: function() {
    return {
      search: "",
      start: "",
      end: ""
    };
  },

  // This function registers any changes to the component.
  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  // send search term back to parent component (Search)
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.updateSearch(this.state.search, this.state.start, this.state.end);
  },

  // Here we render the article search component
  render: function() {

    return (
      <div className="main-container">

        <div className="row">
          <div className="col-lg-12">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-search" aria-hidden="true"></i> Article Search
                  </strong>
                </h1>
              </div>
              <div className="panel-body">

                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <h4 className=""><strong>Search Term</strong></h4>
                    <input
                      type="text"
                      value={this.state.search}
                      className="form-control"
                      id="search"
                      onChange={this.handleChange}
                      required
                    />

                    <h4><strong>Start Year</strong></h4>
                    <input
                      type="number"
                      value={this.state.start}
                      className="form-control"
                      id="start"
                      onChange={this.handleChange}
                      required
                    />

                    <h4><strong>End Year</strong></h4>

                    <input
                      type="number"
                      value={this.state.end}
                      className="form-control"
                      id="end"
                      onChange={this.handleChange}
                      required
                    />

                  </div>

                  {/* this button triggers the HandleSubmit function to send information back to parent */}
                  <div className="pull-right">
                    <button
                      type="submit"
                      className="btn btn-default"
                    >
                      <h4>Submit</h4>
                    </button>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

// Export the ArticleSearch
module.exports = ArticleSearch;
