const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./styles/abstracts/_abstracts.scss";`,
  },
}