const repoName = 'nasljedstvo';

module.exports = {
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',
  trailingSlash: true, // preporučeno za GitHub Pages
};
