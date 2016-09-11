 document.addEventListener('DOMContentLoaded', function() {
 
 let doc = document,
  users = [],
  input = doc.querySelector('input');


  rest(function (list) {
    users = list;
    createList(list);
    //users = list;
  });
  
  console.log(users)
  
  input.addEventListener('keyup', function() {
    let value = this.value;
    let filteredPlayers = users.filter(function(user){
      //здесь осуществляеться проверка 
    
      for(let key in user){
        let currentVal = user[key] + '';
          if(currentVal.toLowerCase().indexOf(value) !== -1){
            user.field = key;
            return true
          }
      }
      
    });
    
    console.log(filteredPlayers);
    
    createList(filteredPlayers);
  })  
  
});