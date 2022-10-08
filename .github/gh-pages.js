import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/mxcop/portfolio.git', // Update to point to your repository
  user: {
   name: 'Max Coppen',
   email: 'mx.coppen@gmail.com'
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);