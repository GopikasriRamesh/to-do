const inputbox=document.getElementById("inputbox");
const listcontainer=document.getElementById("listcontainer");

function addTask(){
    if(inputbox.value===''){
        alert("you have to write something!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

        span.onclick=function(){
            li.remove();
        };

        li.onclick=function(){
            li.classList.toggle("checked");
        };
    }
    inputbox.value="";
}