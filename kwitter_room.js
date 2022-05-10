var firebaseConfig = {
  apiKey: "AIzaSyABJHeeCpEf1i8L8K6E--BYSIZy4UDB8vE",
  authDomain: "kwitter-80e98.firebaseapp.com",
  databaseURL: "https://kwitter-80e98-default-rtdb.firebaseio.com",
  projectId: "kwitter-80e98",
  storageBucket: "kwitter-80e98.appspot.com",
  messagingSenderId: "1059856101629",
  appId: "1:1059856101629:web:211f1f1ce9dc59ee5f0e94",
  measurementId: "G-SRYS9B2ENW"
};

firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("name");
document.getElementById("user_name").innerHTML = "Welcome-" + userName;

function logout() {
  window.location = "index.html";
  localStorage.removeItem("name");
  localStorage.removeItem ("roomName");
}

function add_room() {
  room_add = document.getElementById("input").value;
  firebase.database().ref("/").child(room_add).update({
    purpose: "to add a room name"
  });
  localStorage.setItem("roomName", room_add);
  window.location = "main.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("div1").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("div1").innerHTML += row;
    });
  });
} getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "main.html";
}