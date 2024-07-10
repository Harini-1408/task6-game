var num = Math.floor(Math.random()*101);
var count = 0;
console.log(num);

function findnum()
{
    var guessed_num = parseInt(document.getElementById("n1").value);
    count+=1;
    if(guessed_num==num)
    {
        document.getElementById("result").textContent = "Wow!Congulation!You find the number";
    }
    else if(guessed_num > num)
    {
        document.getElementById("result").textContent = "Try the smaller number";
    }
    else{
        document.getElementById("result").textContent = "Try the greater number";
    }
    document.getElementById("count").textContent = count;
}

