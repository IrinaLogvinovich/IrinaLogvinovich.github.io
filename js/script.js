var link = document.querySelector(".popup-button");
var popup = document.querySelector(".comment-block");
var close = document.querySelector (".close");
var form = popup.querySelector(".write-us");
var userName = popup.querySelector("[name = user-name]");
var userEmail = popup.querySelector("[name = user-email]");
var userComment = popup.querySelector("[name = user-comment]");


link.addEventListener ("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("comment-block-show");
  userName.focus();
});

close.addEventListener ("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("comment-block-show");
});

form.addEventListener("submit", function(evt) {
  userName.classList.remove("error");
  userEmail.classList.remove("error");
  userComment.classList.remove("error");
  if(!userName.value) {
    evt.preventDefault();
    userName.classList.add("error");
    popup.classList.add("comment-block-error")
  }
  if(!userEmail.value) {
    evt.preventDefault();
    userEmail.classList.add("error");
    popup.classList.add("comment-block-error")
  }
  if(!userComment.value) {
    evt.preventDefault();
    userComment.classList.add("error");
    popup.classList.add("comment-block-error")
  }
});
