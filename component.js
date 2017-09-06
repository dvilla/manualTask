var app = new Vue({
  el: '#registration-form',
  data: {
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