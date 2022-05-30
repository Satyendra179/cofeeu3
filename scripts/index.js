// Add the coffee to local storage with key "coffee"

// window.location.reload();
const url="https://masai-mock-api.herokuapp.com/coffee/menu";
fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    // console.log(res.menu.data)
    appenddata(res.menu.data)
})
.catch(function(err){
    console.log(err)
})
let data=JSON.parse(localStorage.getItem("coffee"));
// console.log(data)
document.getElementById("coffee_count").innerText= data.length;


function appenddata(data){
    let m=document.getElementById("menu");
    data.forEach(function(el,index){
        let div=document.createElement("div");
        let name= document.createElement('p')
        name.innerText=el.title;
        let image=document.createElement("img");
        image.src=el.image;
        let price=document.createElement('p');
        price.innerText=el.price;
        let btn= document.createElement('button');
        btn.innerText="Add to Bucket"
        btn.style.cursor="pointer"
        btn.id="add_to_bucket";
        btn.addEventListener("click",function(){
            addtobucket(index,el)
        })



        div.append(image,name,price,btn);
        m.append(div)
    })
 
}
function addtobucket(index,el){
  event.preventDefault();
  let count= document.getElementById("coffee_count")
  var obj={};
  obj.image=el.image;
  obj.name=el.title;
  obj.price=el.price;
  
  
  
    // console.log(typeof(x))
  let bucketarr=JSON.parse(localStorage.getItem("coffee"))|| [];
  bucketarr.push(obj);
//   document.getElementById("coffee_count").innerText=bucketarr.length;
  localStorage.setItem("coffee",JSON.stringify(bucketarr));
  window.location.reload();

}

