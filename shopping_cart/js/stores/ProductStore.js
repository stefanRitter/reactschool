var AppDispatcher = require('../dispatcher/AppDispatcher');

// using node here!
var EventEmitter = require('events').EventEmitter;

var FluxCartConstants = require('../constants/FluxCartConstants');
var assign = require('object-assign');

// privates
var _product = {},
    _selected = null;

function loadProductData (data) {
  _product = data[0];
  _selected = data[0].variants[0];
}

function setSelected (index) {
  _selected = _product.variants[index];
}


// extend store with EventEmitter
var ProductStore = assign({}, EventEmitter.prototype, {
  
  // Return Product data
  getProduct: function() {
    return _product;
  },

  // Return selected Product
  getSelected: function(){
    return _selected;
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


AppDispatcher.register(function (payload) {
  var action = payload.action;

  switch (action.actionType) {
    case FluxCartConstants.RECEIVE_DATA:
      loadProductData(action.data);
      break;
    
    case FluxCartConstants.SELECT_PRODUCT:
      setSelected(action.data);
      break;
    
    default:
      return true;
  }

  // If action was responded to, emit change event
  ProductStore.emitChange();
  return true;
});

module.exports = ProductStore;
