

const addtaskbtn=document.getElementById("addtaskbtn")
const textinput=document.getElementById("textinput")
const tasklist=document.getElementById("tasklist")


addtaskbtn.addEventListener("click",function(){

    const task=textinput.value;
    if(task.trim() ===""){
        alert("Please enter a task")
        return;

    }

    const li=document.createElement('li');
    li.classList.add("task");
    li.textContent=task;
    


    const completebtn=document.createElement("button");
    completebtn.textContent="Complete";
    completebtn.style.margin="10px"

    const deletebtn=document.createElement("button");
    deletebtn.textContent="Delete";


    completebtn.addEventListener("click",function(){
        li.classList.toggle("done");
       
       
       
    })

    deletebtn.addEventListener("click",function(){
        tasklist.removeChild(li);
    })
    li.appendChild(completebtn);
    li.appendChild(deletebtn);



    tasklist.appendChild(li);
    textinput.value="";



    



    

});









