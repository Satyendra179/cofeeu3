// On clicking remove button the item should be removed from DOM as well as localstorage.
// let tatal=document.getElementById("total_amount").innerText;
let data=JSON.parse(localStorage.getItem("coffee"));
let total=data.reduce(function(sum,el,index,arr){
    return sum+Number(el.price);
},0);
document.getElementById('total_amount').innerText=`total is Rs ${total}`
console.log(data);

    
let cartdiv=document.getElementById('bucket')
data.forEach(function(el,index){
    // let t=document.getElementById("total_amount")

    // let total=total+Number(el.price)
    // console.log(total)
    
    // t=`total amount is ${total}`
    let div=document.createElement('div');
    let image=document.createElement('img');
    image.src=el.image;
    let name=document.createElement('p');
    name.innerText=el.name;
    let price=document.createElement('p');
    price.innerText=el.price;
    let btn=document.createElement('button');
    btn.innerText="Remove";
    btn.style.cursor="pointer";
    btn.addEventListener("click",function(){
        removedata(el.index)
    })
    // console.log(image,name,price)
    div.append(image,name,price,btn)
    cartdiv.append(div);
})
function removedata(el,index){
    let data=JSON.parse(localStorage.getItem("coffee"));
    data.splice(index,1);
    
    localStorage.setItem("coffee",JSON.stringify(data))
    window.location.reload();

}

