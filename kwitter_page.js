//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBJJprtDZjN8CUJx0k-j0igQ7LGTl_-oSg",
    authDomain: "kwitter-c7a0a.firebaseapp.com",
    databaseURL: "https://kwitter-c7a0a-default-rtdb.firebaseio.com",
    projectId: "kwitter-c7a0a",
    storageBucket: "kwitter-c7a0a.appspot.com",
    messagingSenderId: "962224638465",
    appId: "1:962224638465:web:400ee29b1de426df554e00"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

  userName = localStorage.getItem("username");
  roomName = localStorage.getItem("roomName");

  function send(){

    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({

          name: userName,
          message: msg,
          like:0

    });
    document.getElementById("msg").value = "";


  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

