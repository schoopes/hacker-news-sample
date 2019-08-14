const data = require( "../data");

async function feed(args) {
  const links = data.websites;
  const searchQueries = [];

  links.map(link => {
    if(link.url.includes(args) || link.title.includes(args)) {
      searchQueries.push(link)
    }
  });

  return {
    searchQueries
  }
}

module.exports = {
  feed
}