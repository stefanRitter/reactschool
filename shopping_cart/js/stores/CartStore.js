var AppDispatcher = require('../dispatcher/AppDispatcher');

// using node here!
var EventEmitter = require('events').EventEmitter;

var FluxCartConstants = require('../constants/FluxCartConstants');
var assign = require('object-assign');

// privates
var _products = {}, _cartVisible = false;

function add (sku, update) {
  update.quantity = sku in _products ? _products[sku].quantity + 1 : 1;
  _products[sku] = assign({}, _products[sku], update)
}

function setCartVisible (cartVisible) {
  _cartVisible = cartVisible;
}

function removeItem(sku) {
  delete _products[sku];
}


// store with emitter
var CartStore = assign({}, EventEmitter.prototype, {

  // Return cart items
  getCartItems: function() {
    return _products;
  },

  // Return # of items in cart
  getCartCount: function() {
    return Object.keys(_products).length;
  },

  // Return cart cost total
  getCartTotal: function() {
    var total = 0;
    for(product in _products){
      if(_products.hasOwnProperty(product)){
        total += _products[product].price * _products[product].quantity;
      }
    }
    return total.toFixed(2);
  },

  // Return cart visibility state
  getCartVisible: function() {
    return _cartVisible;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});


// Register callback with AppDispatcher
AppDispatcher.register(function (payload) {
  var action = payload.action;

  switch(action.actionType) {

    case FluxCartConstants.CART_ADD:
      add(action.sku, action.update);
      break;

    case FluxCartConstants.CART_VISIBLE:
      setCartVisible(action.cartVisible);
      break;

    case FluxCartConstants.CART_REMOVE:
      removeItem(action.sku);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  CartStore.emitChange();
  return true;
});

module.exports = CartStore;
