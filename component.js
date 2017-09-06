var app = new Vue({
  el: '#registration-form',
  data: {
    players: [
      "Quentin T. Tarantino",
      "Martin D. Scorsese",
      "Steven P. Spielberg",
      "Christopher L. Nolan"
    ],
    allSelectedNames: [],
    selected: '',
    stripName: function(selected){
      return selected.split(' ')
    },
    addName: function(selected, allSelectedNames){
      allSelectedNames.push(selected)
    }
  }
})