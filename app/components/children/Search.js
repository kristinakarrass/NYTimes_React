var React = require("react");

var Search = React.createClass({

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
<form className="form-horizontal">
  <div className="form-group">
    <label for="inputEmail3" className="col-sm-2 control-label">Search Term</label>
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