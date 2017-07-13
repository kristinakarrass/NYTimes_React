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
                  <p>Just to try I'll put some text here</p>
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