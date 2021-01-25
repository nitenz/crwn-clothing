function setStateUserLogin( newUser, oldUser ){
  if(newUser && oldUser){
    if(newUser.email && newUser.email.length > 0 && newUser.password && newUser.password.length > 0){
      if(newUser.email !== oldUser.email && newUser.password !== oldUser.passowrd){
        return newUser;
      }
    }
  }

  return false;
}

module.exports = setStateUserLogin;