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

roomname = localStorage.getItem ("roomName");
user_name = localStorage.getItem ("name");

function send  ()
{
msg = document.getElementById ("input1").value;
firebase.database ().ref(roomname).push({
name : user_name,
msge : msg,
like : 0
}
);

document.getElementById ("input1").value="";
}


    function logout() {
      window.location = "index.html";
      localStorage.removeItem("name");
      localStorage.removeItem ("roomName");
    }


function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("div1").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
   childData = childSnapshot.val();
    if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

  console.log (firebase_message_id);
  console.log (message_data);

  like = message_data ['like' ];
  name= message_data ['name'];
  masg = message_data ['msge'];
  name_tag = "<h3>"+name+"</h3>";
  msg_tag = "<h3 class = 'message_h4'>"+masg+"</h3>";
  like_button = "<button class = 'btn-btn warning' onclick = 'like_update(this.id)' id = "+firebase_message_id+"value="+like+"> ";
  span_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> like:"+like+"</span></button><HR>"; 
  all_tags = name_tag+msg_tag+like_button+span_tag;

  document.getElementById("div1").innerHTML+= all_tags;
  





//End code
      } });  }); }
getData();

function like_update (msg_id)
{
buttonid = msg_id;
console.log (buttonid);
likes = document.getElementById (buttonid).value;
increasing_likes = Number (likes)+1;
firebase.database ().ref (roomname).child(msg_id).update ({
like:increasing_likes
});

}

