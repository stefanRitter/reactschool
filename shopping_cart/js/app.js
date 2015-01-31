window.React = require('react');

var ProductData = require('./ProductData'),
    CartAPI = require('./utils/CartAPI'),
    FluxCartApp = require('./components/FluxCartApp.react');

// setup mock API
ProductData.init();
CartAPI.getProductData();

// initial render
React.render(
  <FluxCartApp />,
  document.getElementById('flux-cart')
);
