
let total_count=1000;
let total_shares=0;
function user(){
    let div=document.getElementById("usermoneydiv");

    document.getElementById('usertotalmoney').textContent=total_count;
    document.getElementById('usertotalshares').textContent=total_shares;

       // document.getElementById('userprice').textContent=getcurrentprice();
    
}
user();
async function getcurrentprice(){
    document.getElementById('userprice').textContent=getylabels();
}

async function buy(){
    let buy_val=(document.getElementById('stockcount').value);
    let share_val=getylabels();
    console.log('value price',buy_val*share_val);
    let total_val=buy_val*share_val;
    if(total_val>total_count){
        alert("buy correct amount BITCH!");
    }
    else{
        total_count=total_count-total_val;
        total_shares=parseInt(total_shares)+parseInt(buy_val);
        user();
    }
    
}

async function sell(){
    
  
    if(total_shares>0){
        let buy_val=(document.getElementById('stockcount').value);
        let share_val=getylabels();
    let total_val=buy_val*share_val;
    total_count=total_count+total_val;
    total_shares=0;
    user();
    }
    else{
        alert("Buy stocks to sell not sell stock with zero shares ninja");
    }
    
}