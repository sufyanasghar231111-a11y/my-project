
 const users = [
  {
    name: "John Doe",
    email: "sufyanasghar231111@gmail.com",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
   
  },
];

export  function setLocal(){
      localStorage.setItem('users',JSON.stringify(users))
    }
    
   export  function getLocal(){
        let log=JSON.parse(localStorage.getItem('users'))
        return {log}
    }