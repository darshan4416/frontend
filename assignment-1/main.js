window.addEventListener("click",(e)=>{

    const val = e.target.className;

    if(val==="circle-1"){
        alert("c-1 Violet");
    }
    if(val==="circle-2"){
        alert("c-2 yellow");
    }
    if(val==="circle-3"){
        alert("c-3 Red");
    }
});