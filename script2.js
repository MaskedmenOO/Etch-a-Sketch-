const container = document.getElementById("container");

let input=document.getElementById("numberOfGrid");

input.addEventListener("change", updatedInput);

function updatedInput(){
    container.innerHTML="";
    generateGrid(input.value);
}

function generateGrid(inputvalue){
    for(let i=0; i<inputvalue; i++){
        const smallerContainer = document.createElement("div");
        let smallerContainerClassName ="smallerContainer";
        smallerContainer.classList.add(smallerContainerClassName);
        //smallerContainer.textContent=smallerContainerClassName;
        container.appendChild(smallerContainer);
        
        for(let i=0; i<inputvalue; i++){
            const div=document.createElement("div");
            let newClassName = "grid";
            div.id="div-"+(i+1);
            div.classList.add(newClassName);
        
            div.addEventListener("mouseover", function(){
                div.classList.add("active");
            })
    
            smallerContainer.appendChild(div);
        }
     }   
}

generateGrid(input.value);



