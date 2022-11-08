// Max, Zach, & Jon

function generate(){
    var password = "";
    var length = $("#number").val();

    const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    const symbols = ["!","@","#","$","%","&","*","_","-"];
    var choices = [];

    var checkBox = document.getElementById("ContainNumbers");
    let checkBox2 = document.getElementById("Uppercase");
    let checkBox3 = document.getElementById("Lowercase")
    let checkBox4 = document.getElementById("ContainSymbols")
    
    if(checkBox.checked == true){
        choices.push(numbers);
     }
    if(checkBox2.checked == true)
    {
        choices.push(uppercase);
    }
    if(checkBox3.checked == true)
    {
        choices.push(lowercase);
    }
    if(checkBox4.checked == true)
    {
        choices.push(symbols);
    }

    for(var i = 0; i < length; i++){
        var x = Math.floor(Math.random()*choices.length)+0;
        var y = Math.floor(Math.random()*choices[x].length)+0;
        password += choices[x][y].toString();
    }
    var location = document.getElementById("Password");
    location.innerHTML = password;
}
