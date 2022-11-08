// Blake, Christopher, & Max
var notPurchased = [];
var purchased = [];

function addItems(){
    let g = prompt("What do you need?");
    let addG = document.createElement("p");
    addG.innerHTML = g;
    addG.classList.add("notPurch");
    notPurchased.push(addG.innerHTML);
    addG.onclick = function() {
        if(this.innerHTML.includes("<s>") == true){
            for(let i = 0; i<purchased.length; i++){
                if(purchased[i]==this.innerHTML){
                    purchased.splice(i,1);
                }
            }
            this.innerHTML = this.innerHTML.slice(3,this.innerHTML.length-4);
            notPurchased.push(this.innerHTML);
            this.classList.add("notPurch");
            if(this.classList.contains("purch"))
                this.classList.remove("purch");
        }
        else{
            for(let i = 0; i<notPurchased.length; i++){
                if(notPurchased[i]==this.innerHTML){
                    notPurchased.splice(i,1);
                }
            }
            this.innerHTML = "<s>" + this.innerHTML + "</s>";
            purchased.push(this.innerHTML);
            this.classList.add("purch");
            if(this.classList.contains("notPurch"))
                this.classList.remove("notPurch");
        }
    }
    if(addG.innerHTML.length > 0)
        document.getElementById("gList").appendChild(addG);
}

function reAdd(x, start)
{
    let addG = document.createElement("p");
    addG.innerHTML = x;
    addG.classList.add(start);
    addG.onclick = function() {
        if(this.innerHTML.slice(0,3) == "<s>"){
            for(let i = 0; i<purchased.length; i++){
                if(purchased[i]==this.innerHTML){
                    purchased.splice(i,1);
                }
            }
            this.innerHTML = this.innerHTML.slice(3,this.innerHTML.length-4);
            notPurchased.push(this.innerHTML);
            this.classList.add("notPurch");
            if(this.classList.contains("purch"))
                this.classList.remove("purch");
        }
        else{
            for(let i = 0; i<notPurchased.length; i++){
                if(notPurchased[i]==this.innerHTML){
                    notPurchased.splice(i,1);
                }
            }
            this.innerHTML = "<s>" + this.innerHTML + "</s>";
            purchased.push(this.innerHTML);
            this.classList.add("purch");
            if(this.classList.contains("notPurch"))
                this.classList.remove("notPurch");
        }
    }
    document.getElementById("gList").appendChild(addG);
}

function check(){
    let arr = document.getElementsByClassName("purch");
    if(arr.length > 0){
        for(let i = arr.length-1; i >=0; i--){
            document.getElementsByClassName("purch")[i].remove();
        }
    }
    arr = document.getElementsByClassName("notPurch");
    if(arr.length > 0){
        for(let i = arr.length-1; i >=0; i--){
            document.getElementsByClassName("notPurch")[i].remove();
        }
    }
    if((purch.checked == true) && (notPurch.checked == true))
    {} //do nothing
    else if((purch.checked == false) && (notPurch.checked == false))
    {
        for(let i = 0; i<notPurchased.length; i++){
            reAdd(notPurchased[i], "notPurch");
        }
        for(let i = 0; i<purchased.length; i++){
            reAdd(purchased[i], "purch");
        }
    }
    else if(purch.checked == true)
    {
        for(let i = 0; i<purchased.length; i++){
            reAdd(purchased[i], "purch");
        }
    }
    else if(notPurch.checked == true)
    {
        for(let i = 0; i<notPurchased.length; i++){
            reAdd(notPurchased[i], "notPurch");
        }
    }
}
// Blake, Christopher