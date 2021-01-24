var p1 = [];
var p2 = [];


function para_1(){

for (var i = 1; i<7;i++){
p1.push(document.getElementById("p1_" +i).value)
}
document.getElementById("para_1_display").innerHTML=p1.join(".");
}
function para_2() {
for (var i = 1; i<7;i++){
   p2.push(document.getElementById("p2_" +i).value)
   }
   document.getElementById("para_2_display").innerHTML=p2;
}