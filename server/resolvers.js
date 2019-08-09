const links = [
{
  id: 1,
  url: "www.medium.com",
  title: "Cool Blog Posts About Stuff",
  posted: false
},
{
  id: 2,
  url: "www.facebook.com",
  title: "Let Your Friends Know About God and White Privelege",
  posted: false
}];

let idCount = links.length

module.exports = {
  Query: {
    feed: () => links
  },
  Mutation: {
      post: (parent, args) => {
         const link = {
          id: `${idCount++}`,
          description: args.description,
          url: args.url,
        }
        links.push(link)
        return link
      }
    },
};