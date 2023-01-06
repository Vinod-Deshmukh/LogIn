const user = document.getElementById("name");
const password = document.getElementById("pass");
const userArr = [
  {
    user: "milind",
    password: "milind1",
  },
  {
    user: "narendra",
    password: "nerendra1",
  },
  {
    user: "sandesh",
    password: "sandesh1",
  },
  {
    user: "vinod",
    password: "vinod1",
  },
  {
    user: "jayaram",
    password: "jayaram1",
  },
];

function myUser() {
  for (let i = 0; i < userArr.length; i++) {
    if (
      user.value == userArr[i].user &&
      password.value == userArr[i].password
    ) {
      alert("user looged in!");
    }
  }
  // alert(user.value + "\n" + password.value);
}
