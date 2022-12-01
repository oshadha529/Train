let adultcost = 0;
let children15cost = 0;
let children6cost = 0;
let halfprice = 0;
let fullprice = 0;
let passCost = 0;
let tokenCost = 0;

//Increase & decrease Local adults & current order cost change
function LAdult(click){
    const LAdult = document.getElementById('LAdult');
    const LAdultvalue = parseInt(LAdult.innerText)+click;
    LAdult.innerText = LAdultvalue;

    if(LAdultvalue<0){
        LAdult.innerText=0;
        Price.innerText=(0 * children6cost * children15cost + passCost + tokenCost);
    }

//Current order cost change (Local adult)
    const Price=document.getElementById("currentPrice")
    let adultPrc=2500
    adultcost=Price.textContent= adultPrc*LAdultvalue;
        
    Price.textContent=parseInt(children6cost + adultcost + children15cost + halfprice + fullprice + passCost + tokenCost);
}




//Increase & decrease Local children under age 15 & current order cost change
function LChildren15(click){
    const Children15 = document.getElementById('LChildren15');
    const children15value = parseInt(Children15.innerText) + click;
    Children15.innerText = children15value;

    if(children15value < 0){
        Children15.innerText = 0;
        Price.innerText = (0 + adultcost + children6cost + passCost + tokenCost);
    }


//Current order cost change (Local children below age 15)
    const Price=document.getElementById("currentPrice") 
    let childrenprc15 = 1000;
    children15cost = Price.textContent = childrenprc15 * children15value;

    Price.textContent=parseInt(children6cost + adultcost + children15cost + halfprice + fullprice + passCost + tokenCost);
}


//Increase & decrease Local children under age 6 & current order cost change
function LChildren6(click){
    const LChildren6 = document.getElementById('LChildren6');
    const LChildren6value = parseInt(LChildren6.innerText) + click;
    LChildren6.innerText = LChildren6value;

    if(LChildren6value < 0){
        LChildren6.innerText = 0;
        Price.innerText=(0 + adultcost + children15cost + passCost + tokenCost);
    }

//Current order cost change (Local children below age 6) 
    const Price=document.getElementById("currentPrice")
    let childrenprc6 = 500;
    children6cost = Price.textContent = childrenprc6 * LChildren6value;

    Price.textContent=parseInt(children6cost + adultcost + children15cost + halfprice + fullprice + passCost + tokenCost);

    
}


//Duration
const threeHrs= document.getElementById('3hours');
const halfDay = document.getElementById('12hours');
const fullDay = document.getElementById('24hours');
const Price=document.getElementById("currentPrice")
halfDay.addEventListener('click', halfdyprc);
fullDay.addEventListener('click', fulldyprc);

let LHalfDayPrc = 250;
let LFullDayPrc = 500;


function halfdyprc(){
    halfprice=Price.innerText = parseInt(LHalfDayPrc)
    Price.textContent = parseInt(children6cost + adultcost + children15cost + halfprice + fullprice + passCost + tokenCost);
}


function fulldyprc(){
    const Price=document.getElementById("currentPrice")

    fullprice=Price.innerText = parseInt(LFullDayPrc)
    Price.textContent = parseInt(children6cost + adultcost + children15cost + halfprice + fullprice + passCost + tokenCost);
    
}


//Food token 
function pass(click){
    const Pass = document.getElementById('pass');
    const  passValue= parseInt(Pass.innerText)+click;
    Pass.innerText = passValue;

    if(passValue<0){
        Pass.innerText=0;
        Price.innerText=(0 + children6cost + adultcost + children15cost + halfprice + fullprice + tokenCost);
    }


    const Price=document.getElementById("currentPrice")
    let passPrc=5000
    passCost=Price.textContent= passPrc*passValue;
        
    Price.textContent=parseInt(children6cost + adultcost + children15cost + halfprice + fullprice + passCost + tokenCost);
}

//Annual pass
function token(click){
    const Token = document.getElementById('token');
    const  tokenValue= parseInt(Token.innerText)+click;
    Token.innerText = tokenValue;

    if(tokenValue<0){
        Token.innerText=0;
        Price.innerText=(0 + children6cost + adultcost + children15cost + halfprice + fullprice + passCost);
    }


    const Price=document.getElementById("currentPrice")
    let tokenPrc=500
    tokenCost=Price.textContent= tokenPrc*tokenValue;
        
    Price.textContent=parseInt(children6cost + adultcost + children15cost + halfprice + fullprice + passCost + tokenCost);
}