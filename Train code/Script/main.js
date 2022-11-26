/*Increase & decrease Local adults & current order cost change*/
function LAdult(click){
    const LAdult=document.getElementById('LAdult');
    const LAdultvalue=parseInt(LAdult.innerText)+click;
    LAdult.innerText=LAdultvalue;

    if(LAdultvalue<0){
        LAdult.innerText=0;
        Price.innerText=(0*children6cost*children15cost);
    }

    /*Current order cost change (Local adult) */
        const Price=document.getElementById("currentPrice")
        let adultPrc=2500
        let adultcost=Price.textContent= adultPrc*LAdultvalue;
        
        Price.innerText=parseInt(children6cost+adultcost+children15cost);
            
    
}


/*Increase & decrease Local children under age 15 & current order cost change*/
function LChildren15(click){
    const Children15=document.getElementById('LChildren15');
    const children15value=parseInt(Children15.innerText)+click;
    Children15.innerText=children15value;

    if(children15value<0){
        Children15.innerText=0;
        Price.innerText=(0 +adultcost+children6cost);
    }


    /*Current order cost change (Local children below age 15) */
    const Price=document.getElementById("currentPrice")
    let childrenprc15=1000;
    let children15cost=Price.textContent=childrenprc15*children15value;

    Price.innerText=parseInt(children6cost+adultcost+children15cost);

    
}


/*Increase & decrease Local children under age 6 & current order cost change*/
function LChildren6(click){
    const LChildren6=document.getElementById('LChildren6');
    const LChildren6value=parseInt(LChildren6.innerText)+click;
    LChildren6.innerText=LChildren6value;

    if(LChildren6value<0){
        LChildren6.innerText=0;
        Price.innerText=(0 +adultcost+children15cost);
    }

    /*Current order cost change (Local children below age 6) */
    const Price=document.getElementById("currentPrice")
    let childrenprc6=500;
    let  children6cost=Price.textContent=childrenprc6*LChildren6value;

    Price.textContent=parseInt(children6cost+adultcost+children15cost);
    
}





