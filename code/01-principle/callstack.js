// basic callstack
function one() {
  console.log("one !");
  two();
}

function two() {
  console.log("two !");
}

function three() {
  setTimeout(() => {
    console.log("set timeout 0s");
  }, 0);

  console.log("three !");
  one();
}

three();
