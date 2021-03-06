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
      else if ( this.firstName === "" || this.lastName === ""){
        alert('First name and last name are required');
      }
      else {
        this.allSelectedNames.push(this.firstName + " " + this.middleName + " " + this.lastName);
        this.firstName = ""
        this.middleName = ""
        this.lastName = ""
      }
      this.selected = ""
    }
  },
  computed: {
    sortedPlayers: function(){
      return this.players.sort();
    }
  }
})