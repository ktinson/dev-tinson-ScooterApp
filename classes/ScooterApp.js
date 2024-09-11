const Scooter = require('./Scooter')
const User = require('./User')

class ScooterApp{
  constructor(stations = [], registeredUsers = {username:user}){
    this.stations=this.stations
    this.registeredUsers=registeredUsers
  }
  registerUser(username, password, age){}
  loginUser(username, password){}
  logoutUser(username){}
  createScooter(station){}
  dockScooter(scooter, station){}
  rentScooter(scooter, user){}
  print(){}

}









module.exports = ScooterApp