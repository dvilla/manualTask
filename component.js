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
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    allSelectedNames: [],
    selected: '',
    stripName: function(){
      return this.selected.split(' ')
    },
    addName: function(){
      if ( this.selected != "other" && this.selected != "" ) {
        this.allSelectedNames.push(this.selected);
      }
      else {
        this.allSelectedNames.push(this.firstName + " " + this.middleName + " " + this.lastName);
      }
    }
  },
  computed: {
    sortedPlayers: function(){
      return this.players.sort();
    }
  }
})