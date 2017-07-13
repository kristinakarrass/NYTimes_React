var React = require("react");

var Results = React.createClass({

	//render the component
	render: function() {

		return (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default" >
                <div className="panel-heading">
                  <h3 className="panel-title">Search Results</h3>
                </div>
                <div className="panel-body">
                  <p>This is where we'll display the articles returned from our search</p>
                </div>
              </div>
            </div>
          </div>
        </div>
		);
	}
});

//export the component back for use in other files
module.exports = Results;