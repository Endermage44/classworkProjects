//  Christopher, Blake, Oscar & Max
 var Q1 = "What is the flight speed velocity of an unladen swallow?";
 var Q2 = "What is the fastest Animal";
 var Q3 = "Who is the best Apex player of group 5";
 var Q4 = "Is a rectangle a square";
 var Q5 = "Which president had the longest term";

 var A1a = "An African or European Swallow";
 var A1b = "24 mph"
 var A1c = "11 mph"
 var A1d = "20.1 mph"
 
 var A2a = "Peregrin Falcon";
 var A2b = "Cheetah";
 var A2c = "Pronghorn Antelope";
 var A2d = "Sail Fish";

 var A3a = "Zach";
 var A3b = "Max";
 var A3c = "Jon";
 var A3d = "Blake";
 
 var A4a = "Not all";
 var A4b = "No";
 var A4c = "Yes";
 var A4d = "What's a rectangle?";
 
 var A5a = "Franklin D. Roosevelt";
 var A5b = "Obama";
 var A5c = "Teddy Roosevelt";
 var A5d = "William H. Harrison";



var questions = [Q1, Q2, Q3, Q4, Q5];
var answers = [[A1a, A1b, A1c, A1d], [A2a, A2b, A2c, A2d], [A3a, A3b, A3c, A3d], [A4a, A4b, A4c, A4d], [A5a, A5b, A5c, A5d]]

var done = Array();
var doneA = Array();
var count = 0;
var keepNum;
var score = 0;

function Order(){
    var number = Math.floor(Math.random()*5);

    if(done.includes(number)){
        Order();
    }
    else{      
        var n = document.getElementById(count.toString());
        n.innerHTML = questions[number];
        done.push(number);

        var con = document.createElement("form");
        con.setAttribute('onsubmit', 'return false');

        
        for(var i = 0; i < 4; i++){
            var qNum = Math.floor(Math.random()*4);

             while(doneA.includes(qNum)){
                 qNum = Math.floor(Math.random()*4);
             }
            
             var buffer = document.createElement("div");
             buffer.setAttribute('class', 'buffer');

            var radio = document.createElement("input");
            radio.setAttribute('type', 'radio');
            radio.setAttribute('id', answers[number][qNum]);
            radio.setAttribute('name', questions[number]);
            radio.setAttribute('value', answers[number][qNum]);
            radio.required = true;
            
            var label = document.createElement("label");
            label.setAttribute('for', answers[number][qNum]);
            label.innerHTML = answers[number][qNum];   
            

            buffer.appendChild(radio);
            buffer.appendChild(label);

            con.appendChild(buffer);
            
            doneA.push(qNum);
        }
        var submit = document.createElement("button");
        submit.innerHTML = "Submit";
        submit.setAttribute('onclick', 'Submit()');
        con.appendChild(submit);


        count++;
        n.appendChild(con);
        doneA = [];
        keepNum = number;
    }
    
}

function Submit()
{
    var toggle = false;
    var divNum = document.getElementById((count-1).toString());
    var children = document.body.getElementsByTagName("input");
    var check;
    for(let i = 0; i<children.length; i++)
    {
        if(children[i].checked == true)
        {
        
            toggle = true;
            check = children[i].value;
        }
    }
    if(toggle)
    {
        //console.log(keepNum);
        if(check == answers[keepNum][0]){
            //console.log(keepNum);
            score++;
            //console.log(score);
        }
        while(divNum.firstChild){
            divNum.removeChild(divNum.firstChild)        
        }
        if(done.length < 5){
            Order();
        }else{
            checkScore();
        }
    }
}

function checkScore(){
    //console.log(score);
    var scoreChild = document.createElement("h2");
    scoreChild.innerHTML = score + "/5"
    document.getElementById("questions").appendChild(scoreChild);
    $(document).ready(function(){
        $("#jonssecretbutton").css("visibility", "visible");
    });
}

function reload(){
    window.location.reload();
}
