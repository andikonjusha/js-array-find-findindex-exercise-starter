const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') 
findUserByUsername(users, 'taco')


function findUserByUsername(usersArray, username) {
  return usersArray.find(function(user){
    return user.username === username;
  })
  
}




const names = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(names, 'akagen') 
removeUser(names, 'akagen') 

function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === username;
  })
  if(foundIndex === -1) return;

  return usersArray.splice(foundIndex,1)[0];
}



