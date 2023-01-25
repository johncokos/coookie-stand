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

function rateUs() {

  let rating = prompt("On a scale of 1-5, how much do you love our cookies?");

  while (rating < 5) {
    rating = prompt("Are you sure? Try a bigger number, please!");
    rating = Number(rating);
  }
  for (let i = 1; i <= rating; i++) {
    document.write("⭐️");
    // document.write("<img src='star.png' width='20' />")
  }

}