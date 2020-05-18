// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

for (let key in menu) {
  console.log(menu[key]);
  console.log(typeof menu[key]);
}

let multiplyNumeric = (obj) => {
  for (let key in obj) {
    if(typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

for (let key in menu) {
  console.log(menu[key]);
  console.log(typeof menu[key]);
}