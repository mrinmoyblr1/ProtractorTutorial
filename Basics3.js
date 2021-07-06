function add(x, y) {
  return x + y;
}


console.log("The value of ADD: " + add(11, 222));
// The value of ADD: 233

console.log(0.1 + 0.2 - 0.3);
// 5.551115123125783e-17


var a = 4;
var b = ["Hello", "World", "4", "Good","Kumar"];
for (var i = 0; i < b.length; i++) {
  console.log("The Values of b: " + b[i]);
}
// The Values of b: Hello
// The Values of b: World
// The Values of b: 4
// The Values of b: Goodbye

var c = new Array();
c[0] = "Goodbye";
c[1] = "4";
c[2] = "World";
c[3] = "Hello";
console.log("The values of Array c: " + c);
// The values of Array c: Goodbye,4,World,Hello

for (var i = 0; i < c.length; i++) {
  console.log("The values of the Arrray c:::::::::: " + c[i]);
}
// The values of the Arrray c: Goodbye
// The values of the Arrray c: 4
// The values of the Arrray c: World
// The values of the Arrray c: Hello


// Printing Array members in reverse order
console.log("===============================")
for (var i = c.length - 1; i >= 0; i--) {
  console.log("The values of the Arrray c: " + c[i]);
}
// The values of the Arrray c: Hello
// The values of the Arrray c: World
// The values of the Arrray c: 4
// The values of the Arrray c: Goodbye



var name = "Mrinmoy";
console.log(name.charAt(3));
// n

var new_name = name.concat(" Biswas");
console.log(new_name);
// Mrinmoy Biswas

console.log(name.indexOf("n"));
// 3
console.log(name.slice(1, 3));
// ri


console.log(name.toUpperCase());
// MRINMOY
console.log(name.toLowerCase());
// mrinmoy

var name1="Mrinmoy  "
var name2=new String("Biswas");
console.log(name1)
//Mrinmoy

console.log(name1.trim());
//Mrinmoy

console.log(name1)
// Mrinmoy
