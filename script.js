const container = document.getElementById("container");

function getNumberOfGrids(){
    input = prompt("Please enter number of grids per side");
    if(input>0 && input <101){
        container.innerHTML="";
        generateGrid(input);
    }else{
        alert("Invalid input. Max grid is 100 and minium is 1.")
    }

}

let currentHSL=[];
let [h,s,l]=[];

function incrementHSL(div){
    console.log(currentHSL[div.id]);
if(currentHSL[div.id]===undefined||currentHSL[div.id].length===0){
    currentHSL[div.id]=[0,0,100];
}else{
    currentHSL[div.id]=currentHSL[div.id];
}
    [h,s,l]=currentHSL[div.id];
    console.log(currentHSL[div.id]);
    l=Math.max(0, l-10);
    currentHSL[div.id]= [h,s,l];
    console.log(currentHSL[div.id]);
    console.log([h,s,l]);
    //i dont understand why div.style.backgroundColor works like it's not specific
    div.style.backgroundColor= `hsl(${h},${s}%,${l}%)`;
    console.log(div.id + div.style.backgroundColor);
}

function generateGrid(inputvalue){
    for(let i=0; i<inputvalue; i++){
        const smallerContainer = document.createElement("div");
        let smallerContainerClassName ="smallerContainer";
        smallerContainer.classList.add(smallerContainerClassName);
        //smallerContainer.textContent=smallerContainerClassName;
        container.appendChild(smallerContainer);
        
        for(let j=0; j<inputvalue; j++){
            const div=document.createElement("div");
            let newClassName = "grid";
            div.id="div-"+(i+1)+"container"+(j+1);
            div.classList.add(newClassName);
        
            div.addEventListener("mouseenter", function(){
                //div.classList.add("active");

                incrementHSL(div);
            })
    
            smallerContainer.appendChild(div);
        }
     }   
}

generateGrid(16);



