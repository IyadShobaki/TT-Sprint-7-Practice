"use strict";

(function () {
  var songsContainer = document.querySelector(".songs-container");
  var addButton = document.querySelector(".input__btn_action_add");
  var artistInput = document.querySelector(".input__text_type_artist");
  var titleInput = document.querySelector(".input__text_type_title");

  function addSong(artistValue, titleValue) {
    var songTemplate = document.querySelector("#song-template").content;
    var songElement = songTemplate.cloneNode(true);
    songElement.querySelector(".song__artist").textContent = artistValue;
    songElement.querySelector(".song__title").textContent = titleValue;
    songsContainer.append(songElement);
    artistInput.value = "";
    titleInput.value = "";
  }

  function keyHandler(evt) {
    if (evt.key === "Enter") {
      addSong(artistInput.value, titleInput.value);
    }
  }

  addButton.addEventListener("click", function () {
    addSong(artistInput.value, titleInput.value);
  });
  artistInput.addEventListener("keydown", keyHandler);
  titleInput.addEventListener("keydown", keyHandler);
  songsContainer.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("song__like")) {
      evt.target.classList.toggle("song__like_active");
    }
  });
})();