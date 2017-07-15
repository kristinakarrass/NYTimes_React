//include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

//NYT API key
var APIkey = "52a91dda0f0c4abd93862a8e252e99ea";

//helper functions for making API calls
var helper = {

	//this function serves the purpose of running the query to get the latest article
	runQuery: function(searchTerm) {
		console.log(searchTerm);
		//find articles
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIkey + "&q=" + serachTerm;
		return axios.get(queryURL).then(function(response) {
			console.log(response);
		});
	},
	//this function hits my own server to retrieve the record of saved articles
	getHistory: function() {
		return axios.get("/api");
	},

	//this function posts new articles to our databse
	postHistory: function(article) {
        return axios.post("/api", { title: title, articleURL: artilceURL, date: date });
	}
};

//exporting the API helper
module.exports = helper;