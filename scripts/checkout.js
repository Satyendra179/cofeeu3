let data=JSON.parse(localStorage.getItem("coffee"));
localStorage.removeItem(data)
// document.querySelector("#confirm").addEventListener("click",checkout());
function checkout(){
    event.preventDefault();
   
    let count=0;
    let x=setInterval(function(){
        if(count==0){
            alert("your order is accepted")
        }
        count++;
        if(count==3){
            alert("Your order is being Prepared ")

        }else if(count==8){
            alert("Your order is being packed  ")
        }else if(count==10){
            alert("Your order is out for delivery")
        }else if(count==12){
            alert("Order delivered ")
        }
        console.log(count)
        if(count==12){
            clearInterval(x)
            window.location.reload();
    }
    },1000)
}