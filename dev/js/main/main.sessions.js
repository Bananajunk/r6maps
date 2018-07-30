'use strict';

var R6MMainSessions = (function ($, window, document, R6MLangTerms, undefined) {
  var peer;
  var conn;

  var setup = function () {
    peer = new Peer();

    peer.on('open', function (id) {
      $('#collaborate-link').val(id);
      connect(id);
    });
  };

  var connect = function (id) {
    var peerId = id || R6MHelpers.getPeerId();

    if (peerId) {
      console.log('Peer ID = ' + peerId);
      $('#collaborate-link').val(peerId);
      //peer = new Peer(peerId);
      //conn = peer.connect(peerId);
    } else {
      console.log('Must generate a peer connection');
    }
  };

  return {
    setup: setup,
    connect: connect
  };
})(window.jQuery, window, document, R6MLangTerms);
