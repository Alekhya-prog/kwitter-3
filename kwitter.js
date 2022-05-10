function user_ls ()
{
userName=document.getElementById ("input1").value;
localStorage.setItem ("name" , userName);
window.location = "kwitter_room.html";
}

