window.onload=init;

function init () {
  var addSong = document.getElementById("addsong");
  addSong.onclick = addSongManage;
}

function addSongManage () {

  var songInput = document.getElementById("typeSong");
  var ul = document.getElementById("song-list");
  if (songInput.value==""){
    alert("Enter any song now!!!");
  }
  else {
    var songName = songInput.value;
    var li = document.createElement("li");
    li.innerHTML = songName;
    ul.appendChild(li);
  }
}