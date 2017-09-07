var app = new Vue({
  el: '#registration-form',
  data: {
    players: [
      "Quentin T. Tarantino",
      "Martin D. Scorsese",
      "Steven P. Spielberg",
      "Christopher L. Nolan",
      "David J. Fincher"
    ],
    allSelectedNames: [],
    selected: '',
    stripName: function(selected){
      return selected.split(' ')
    },
    addName: function(selected, allSelectedNames){
      allSelectedNames.push(selected)
    }
  },
  computed: {
    sortedPlayers: function(){
      return this.players.sort();
    }
  }
})