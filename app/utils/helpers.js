//include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API key
var APIKey = "52a91dda0f0c4abd93862a8e252e99ea";

// Helper Functions
var helpers = {

  //this function serves the purpose of running the query to get the latest article
  runQuery: function(term, start, end) {

    // Adjust search term and years in needed format
    var searchTerm = term.trim();
    var start = start.trim() + "0101";
    var end = end.trim() + "1231";

    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": APIKey,
        "q": searchTerm,
        "begin_date": start,
        "end_date": end
      }
    })
    .then(function(results) {
      console.log("Results: ", results.data.response);
      return results.data.response;
    });
  },
  //this function hits my own server to retrieve the record of saved articles
  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        console.log("Results: ", results);
        return results;
      });
  },
  // This will save new articles to the database
  postSaved: function(title, date, url) {
    var newArticle = { title: title, date: date, url: url };
    return axios.post("/api/saved", newArticle)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },
  // This will remove saved articles from our database
  deleteSaved: function(title, data, url) {
    return axios.delete("/api/saved", {
      params: {
        "title": title,
        "data": data,
        "url": url
      }
    })
    .then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }
};


// We export the helpers function
module.exports = helpers;
