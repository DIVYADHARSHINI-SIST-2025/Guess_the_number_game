var a=Math.ceil(Math.random()*100);
console.log(a);
var count=1;
function findnum(){
    var numuser=parseInt(document.getElementById("num").value);
    if(numuser==a)
    {
        document.getElementById("guessing").textContent="CONGRATULATIONS!! you guessed the number in "+count+" tries";
    }
    else if(numuser>a)
    {
        document.getElementById("guessing").textContent="Check for smaller";
    }
    else{
    document.getElementById("guessing").textContent="check for larger";
    }
    document.getElementById("try").textContent=count;
    count++;
    
}