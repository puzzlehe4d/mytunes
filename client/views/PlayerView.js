// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay width=100%/>',

  initialize: function() {
    this.model.on('enqueue', function(){
      this.render();
    })
  },
  events: {
      'ended' : 'dequeue'
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  dequeue: function(){

    this.model.dequeue();

  },

  // playFirst: function(){
  //   this.render();

  // },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
