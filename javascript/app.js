function takeCookieOrder() {
  let cookies = prompt("How many cookies do you want?");
  cookies = Number(cookies);
  if (cookies < 12) {
    takeCookieOrder();
  } else {
    let message = "Awesome! Well cook those " + cookies + " for you";
    document.write(message);
  }
}

function getName() {
  let name = prompt("What is your name?");
  let message = "Welcome Back! " + name;
  return message;
}