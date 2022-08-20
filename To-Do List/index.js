const addbtn=document.getElementsByClassName("todo-button")[0];
const ul=document.getElementsByClassName("todo-list")[0];

addbtn.addEventListener("click" , (event)=>{
    event.preventDefault();
});

addbtn.addEventListener("click" , addElemnts);

function addElemnts(){
    const list= document.createElement("li");
    const unitContainer =document.createElement("div");
    const compBtn= document.createElement("button");
    const delBtn= document.createElement("button");

     let listText=document.getElementsByClassName('todo-input')[0].value;
    list.innerText=listText;
    list.className="todo-item"
    unitContainer.className="todo"



    compBtn.innerText="completed"
    compBtn.className="complete-btn"

    delBtn.innerText="delete"
    delBtn.className="trash-btn"


    unitContainer.append(list , compBtn , delBtn);
    ul.appendChild(unitContainer);

     let completedbtn= document.getElementsByClassName("todo-list")[0];
    let completeValue=false;

    completedbtn.addEventListener("click" , completedElements);

    function completedElements(e){
        if(e.target.className=="complete-btn"){
            let targetBtn=e.target;
            let div=targetBtn.parentNode;
            if(completeValue==false){
                console.log(div.children[0]);
                div.children[0].style.textDecoration="line-through solid rgb(0 ,0 ,0)";
                completeValue=true;
            }else{
                div.children[0].style.textDecoration="none";
                completeValue=false;
            }

        }
    }

    let removeBtn=document.getElementsByClassName("todo-list")[0];

    removeBtn.addEventListener("click" , removedElements);

    function removedElements(e){
        if(e.target.className=="trash-btn"){
            e.target.parentNode.remove();
        }
    }

    
}
  
