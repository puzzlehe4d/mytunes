// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',
  className: 'library',

  template: _.template('<td class="title"><%= title %> </td><td class="artist"><strong><%= artist%></strong></td>'),

  events: {
    'click': function() {
        this.model.play();
        this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
