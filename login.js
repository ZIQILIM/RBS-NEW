const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.username.value;
  const password = form.password.value;
  const usertype = form.usertype.value;

  const authenticated = authentication(username, password, usertype);

  if (authenticated) {
    let redirectURL = "default.html";

    switch (usertype) {
      case "staff":
        redirectURL = "staff-interface.html";
        break;
      case "student":
        redirectURL = "student-interface.html";
        break;
    }

    window.location.href = redirectURL;
  } else {
    alert("WRONG PASSWORD OR USER ID!"); // Display an alert message
  }
});

function authentication(username, password, usertype) {
  const users = {
    staff: {
      username: "admin",
      password: "password",
    },
    student: {
      username: "student",
      password: "studentpass",
    },
  };

  if (users[usertype] && users[usertype].username === username && users[usertype].password === password) {
    return true;
  } else {
    return false;
  }
}
