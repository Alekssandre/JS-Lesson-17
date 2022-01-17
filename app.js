const myButton = document.querySelector(".button");
myButton.addEventListener("click", (e) => {
  e.stopPropagation();
  myButton.remove();
  console.log("button");
});

const body = document.body;
const myImage = document.createElement("img");
myImage.src = "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg";
body.append(myImage);

const users = [
  {
    id: 7,
    email: "thomas.karakasid@reqres.in",
    first_name: "Thomas",
    last_name: "Karakasid",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 8,
    email: "brian.shelbi@reqres.in",
    first_name: "Brian",
    last_name: "Shelbi",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
];

const list = document.querySelector("#user-list");
function filteredUsers() {
  const userElements = users.map((user) => {
    return `<div class='parent-div'><div class='avatars'><img class="images" src="${user.avatar}"></div><div><span>${user.first_name}</span><span>${user.last_name}</span></div><div><button class="deletedbutton">delete</button><button onclick="myFunction()">info</button></div><div id="infoemail" class="email" >${user.email}</div></div>`;
  });
  list.innerHTML = userElements.join("");
  const deletedButton = document.querySelectorAll(".deletedbutton");
  deletedButton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btn.parentNode.parentNode.remove();
    });
  });
}
filteredUsers();
function myFunction() {
  const x = document.getElementById("");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}