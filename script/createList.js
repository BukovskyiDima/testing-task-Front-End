let createList = function (list, field) {
  let someText = '',
    length = list.length,
    i = 0,
    usersBox = createList.usersBox || document.querySelector('.users');
    
    if (!createList.usersBox){
      createList.usersBox = document.querySelector('.users');
    }
  
  for (; i < length; i++){
    let info = list[i]
    someText += '<ul class="players"><li class="name">'
     + (info.field === 'name' ? "●" : '' ) + info.name
     + '</li><li>' 
     + (info.field === 'dateOfBirth' ? "●" : '' ) + info.dateOfBirth 
     + '</li><li>' 
     + (info.field === 'position' ? "●" : '' ) + info.position 
     + '</li><li>' 
     + (info.field === 'nationality' ? "●" : '' ) + info.nationality 
     + '</li></ul>';
  }
  
  //console.log(someText);
  usersBox.innerHTML = someText;
}