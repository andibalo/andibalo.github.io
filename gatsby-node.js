/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const portfolio = require('./src/data/portfolio.json')


const IMAGE_PATH = './src/images/portfolio'


exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  portfolio.forEach((card) => {
    // 1. Extract the card data.
    const {
        title,
        image,
        demo,
        sourcecode,
        description,
        subtitle,
        cols
    } = card;



    const { name, ext } = path.parse(image);
    const absolutePath = path.resolve(__dirname, IMAGE_PATH, image);
    // 2. Build a data shape that corresponds to a File node that Sharp can process
    const data = {
      name,
      ext,
      absolutePath, // <-- required
      extension: ext.substring(1), // <-- required, remove the dot in `ext`
    };
    // 3. Build the image node using our data
    const imageNode = {
      ...data,
      id: createNodeId(`card-image-${name}`),
      internal: {
        type: 'PortfolioCardImage',
        contentDigest: createContentDigest(data),
      },
    };
    // 4. Create the node. When imageNode is created,
    //    Sharp adds childImageSharp to the node
    actions.createNode(imageNode);


    // 2. Build the PortfolioCard node. Note that most fields simply correspond to
    //    to our JSON data.
    const node = {
      title,
      image:imageNode,
      demo,
      sourcecode,
      description,
      subtitle,
      cols,
      id: createNodeId(`card-${title}`),
      internal: {
        type: 'PortfolioCard',
        contentDigest: createContentDigest(card),
      },
    };
    // 3. Create the node
    actions.createNode(node);
  });
};