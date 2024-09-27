let btn=document.querySelector('button');
let inp=document.querySelector('input');
let ul=document.querySelector('ul');

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted"); 
    }
})

// let delBtns =document.querySelectorAll(".delete");
// for(delbtn of delBtns){
//     delbtn.addEventListener("click",function(event){
//         console.log(event.target);
//         let par=this.parentElement;
//         console.log(par); 
//         par.remove();
//     })
// }