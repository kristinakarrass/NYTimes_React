//include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

//NYT API key
var APIkey = "52a91dda0f0c4abd93862a8e252e99ea";

//helper functions for making API calls
var helper = {

	//this function serves the purpose of running the query to get the latest article
	runQuery: function(searchTerm, start, end) {
		console.log(searchTerm + ", " + start + ", " + end);
		//find articles
	
		return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
			params: {
				"api-key": APIkey,
				"q": searchTerm,
				"begin_date": start,
				"end_date": end
			}
		}).then(function(response) {
			console.log(response);
			return response.data.response;
		});
	},
	//this function hits my own server to retrieve the record of saved articles
	getHistory: function() {
		return axios.get("/api/saved").then(function(response) {
			console.log("History: ", response);
			return results;
		});
	},

	//this function posts new articles to our databse
	postArticle: function(title, articleURL, date) {
        return axios.post("/api/saved", { title: title, articleURL: artilceURL, date: date })
        .then(function(response) {
        	console.log("Results: ", response);
        	return response;
        });
	},
	//this function will delete saved articles from our database
	deleteArticle: function(title, articleURL, date) {
		return axios.delete("/api/saved", {
			params: {
				"title": title,
				"articleURL": articleURL,
				"date": date
			}
		}).then(function(response) {
			console.log("Results", response);
			return response;
		});
	}
};

//exporting the API helper
module.exports = helper;