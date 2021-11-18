



var listDom = document.querySelector("#list");






var deneme1 = JSON.parse(localStorage.getItem("task"));
//alert(deneme1[0]);


// function initElement(){
//     taskArray = JSON.parse(localStorage.getItem("task"));
//     for(var i=0; i < taskArray.length; i++){
//         var newTask = document.createElement("li");

//         var newAtt = document.createAttribute("taskval");
//         newAtt.value = taskArray[i];
//         newTask.setAttributeNode(newAtt);

//         newTask.setAttribute("onclick","completeTask(event)");

//         newTask.innerHTML = `
//             ${taskArray[i]}
//             <span class="float-right btn btn-danger" onclick="deleteElement(event)" >Sil</span>`;
//         listDom.append(newTask);

//     }

// }




function newElement(){

    
    var inputDom = document.querySelector("#task");


    var inputValue = inputDom.value;
    if(inputValue != "" && inputValue.trim() != "" ){
        var newTask = document.createElement("li");
        newTask.setAttribute("onclick","completeTask(event)");


        newTask.innerHTML = `
            ${inputValue}
            <span class="float-right btn btn-danger" onclick="deleteElement(event)" >Sil</span>`;
        listDom.append(newTask);
        inputDom.value = "";


    }else{
        $('#toast').toast('show');
    }

    

}

function deleteElement(e){

    e.target.parentElement.remove();
    //alert(e.target.parentElement.innerHTML)


}


function completeTask(e){


    if(e.target.nodeName != "SPAN" ){
        e.target.style.textDecoration = "line-through";
        e.target.style.backgroundColor = "#276678";
        e.target.style.color = "white";
    }

    


}