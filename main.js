var a=prompt("Enter the sentence");
b=a.split("");
var c=[];
console.log(b); 
document.write("given sentence is<br><br>");
document.write("b="+b+"<br><br>");

for(i=0; i<b.length;i++){
    if(b[i]=="a"||b[i]=="e"||b[i]=="i"||b[i]=="o"||b[i]=="u"){
        c.push(b[i]);
    }
}
console.log(c);
document.write("vowels present in the string is<br><br>"+"c="+c+"<br><br>"+"how many vowels in sentence is <br><br>"+c.length);

console.log(c.length);
