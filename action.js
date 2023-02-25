for(let i=1;i<=9;i++){
    let number =document.createElement("button");
    number.setAttribute("id",i);
    number.classList.add(`i${i}`);
    number.innerHTML=i;
    document.querySelector(".block-channel").appendChild(number);
};

let power=document.querySelector(".power");
let tv= document.querySelector("span");
let dot_tv= document.querySelector(".dot");
let dot_remote= document.querySelector(".dot_bot");
let flag=false;

let color=()=>{
    let count=0;
   let a= setInterval(()=>{
    count+=1;
        dot_tv.style.backgroundColor="green";
        dot_remote.style.backgroundColor="green";    
        if(count===2){  
            dot_tv.style.removeProperty("background-color");
            dot_remote.style.removeProperty("background-color");
            clearInterval(a);
        };
    },100);
}

power.addEventListener("click",()=>{
    if(flag===false){
        tv.innerHTML="Power-ON";
        flag=true;     
        for(let i=1;i<=9;i++){
            let a=`i${i}`;
            let x =document.querySelector(`.${a}`);
            x.addEventListener("click",()=>{
                tv.innerHTML=i;
                color();
            },true);
        };
        color();    
    }else{
        flag=false;
        tv.innerHTML="Power-Off";           
        color();
    }

});


// removal of event listner is not happend when tv is off Mode



 
