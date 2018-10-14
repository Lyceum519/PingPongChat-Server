export default class User {
  constructor(name, email){
     this.name = name;
     this.email = email;
   }

   getEmail(){
     return this.email;
   }
   getName(){
     return this.name;
   }
}