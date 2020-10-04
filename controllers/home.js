exports.getHomePage = (req, res, next) => {
   res.render('../views/pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
}