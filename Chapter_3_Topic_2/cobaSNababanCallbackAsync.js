function p1() {
  console.log("p1 done");
}

function p2() {
  setTimeout(() => {
    console.log("p2 done");
  }, 1000);
}

function p3() {
  console.log("p3 done");
}

p1();
p2();
p3();
