import { useEffect } from "react";

 const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "john123",
    pfp: "https://randomuser.me/api/portraits/men/1.jpg",
    orders: 12,
    returns: 2,
    canceled: 1,
    received: 9,
    lastLogin: "2026-03-20T10:15:00Z",
    isActive: true,
    loyaltyPoints: 250,
    membership: "Gold",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah@example.com",
    password: "sarah456",
    pfp: "https://randomuser.me/api/portraits/women/2.jpg",
    orders: 8,
    returns: 1,
    canceled: 0,
    received: 7,
    lastLogin: "2026-03-22T14:30:00Z",
    isActive: true,
    loyaltyPoints: 180,
    membership: "Silver",
  },
  {
    id: 3,
    name: "Ali Khan",
    email: "ali@example.com",
    password: "ali789",
    pfp: "https://randomuser.me/api/portraits/men/3.jpg",
    orders: 15,
    returns: 3,
    canceled: 2,
    received: 10,
    lastLogin: "2026-03-18T09:00:00Z",
    isActive: false,
    loyaltyPoints: 320,
    membership: "Platinum",
  },
  {
    id: 4,
    name: "Emma Smith",
    email: "emma@example.com",
    password: "emma321",
    pfp: "https://randomuser.me/api/portraits/women/4.jpg",
    orders: 5,
    returns: 0,
    canceled: 1,
    received: 4,
    lastLogin: "2026-03-23T17:45:00Z",
    isActive: true,
    loyaltyPoints: 100,
    membership: "Bronze",
  },
  {
    id: 5,
    name: "Ahmed Ali",
    email: "ahmed@example.com",
    password: "ahmed654",
    pfp: "https://randomuser.me/api/portraits/men/5.jpg",
    orders: 20,
    returns: 4,
    canceled: 3,
    received: 13,
    lastLogin: "2026-03-21T12:20:00Z",
    isActive: true,
    loyaltyPoints: 400,
    membership: "Platinum",
  }
];

export  function setLocal(){
      localStorage.setItem('users',JSON.stringify(users))
    }
    
   export  function getLocal(){
        let log=JSON.parse(localStorage.getItem('users'))

        return {log};
    }
    