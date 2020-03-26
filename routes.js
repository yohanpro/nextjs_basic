const routes = require('next-routes');


module.exports = routes()
    .add('portfolio', '/portfolio/:id')
    .add('portfolioEdit', '/portfolio/:id/edit')
    .add('blogEditorUpdate', '/blogs/:id/edit');