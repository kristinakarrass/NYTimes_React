var React = require("react");

var Search = React.createClass({

  //set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "", start: "", end: ""};
  },

  //this function will respond to user input
  handleChange: function(event) {

    this.setState({ term: event.target.value });

  },

  //when the user submits...
  handleSubmit: function(event) {
    //prevent the HTML from trying to submit a form if the user hits "Enter"
    //instead of clicking the button
    event.preventDefault();

    //set the parent to have the search term == this is the function on the Main component, that 
    //lets the child update the parent
    this.props.setTerm(this.state.term);
    this.setState({ term: ""});
  },
	//render the component
	render: function() {

		return (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default" >
                <div className="panel-heading">
                  <h3 className="panel-title">Search for articles</h3>
                </div>

                <div className="panel-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label for="term" className="col-sm-2 control-label">Search Term</label>
                      <div className="col-sm-10">
                        <input 
                          value={this.state.term}
                          type="text" 
                          className="form-control" 
                          id="term" 
                          placeholder="Search Term"
                          onChange={this.handleChange}
                          required
                          />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="fromDate" className="col-sm-2 control-label">From</label>
                      <div className="col-sm-10">
                        <input 
                          value={this.state.start}
                          type="date" 
                          className="form-control" 
                          id="term" 
                          placeholder="DDMMYYYY"
                          onChange={this.handleChange}
                          required
                          />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputEmail3" className="col-sm-2 control-label">To</label>
                      <div className="col-sm-10">
                        <input 
                          value={this.state.end}
                          type="date" 
                          className="form-control" 
                          id="end" 
                          placeholder="DDMMYYYY"
                          onChange={this.handleChange}
                          required
                          />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default">Submit</button>
                      </div>
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

//export the component back for use in other files
module.exports = Search;