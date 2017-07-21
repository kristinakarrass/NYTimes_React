//include React
var React = require("react");

//create component ArticleSearch
var ArticleSearch = React.createClass({
 //set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "", start: "", end: ""};
  },

  //this function will respond to user input
  handleChange: function(event) {
    //new state is set, following changes in text, has to be object with new values
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);

  },

  //when the user submits...
  handleSubmit: function(event) {
    //prevent the HTML from trying to submit a form if the user hits "Enter"
    //instead of clicking the button
    event.preventDefault();

    //set the parent to have the search term == this is the function on the Main component, that 
    //lets the child update the parent == because we don't pass from main, but bfrom Search, has to be in Grnadchild component
    this.props.setTerm(this.state.term, this.state.start, this.state.end);
  },
  //this handles the click on submit to trigger search
  handleClick: function(article) {
    console.log(article);
    //this function saves article in the database
    helpers.postArticle(article)
  }
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
  	)
  }
});

//export the component
module.exports = ArticleSearch;