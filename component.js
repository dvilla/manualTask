var app = new Vue({
  el: '#registration-form',
  data: {
    selected: '',
    stripName: function(selected){
      return selected.split(' ')
    },
    addName: function(selected){
      return console.log(selected);
    }
  }
})