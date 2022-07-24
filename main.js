
import { age } from './age.js';
import { country } from './countries.js';
import {gender} from './gender.js';

let btn =document.getElementById("btn");
let values =JSON.parse(localStorage.getItem('name')) ?  JSON.parse(localStorage.getItem('name')) : []
let input1 = ''

btn.addEventListener("click",function(){
    let input = document.getElementById("name");

    gender(input);
    age(input);
    country(input);
    input1 = input.value

    let lsName= document.createElement('span');
    let lsContainer=document.createElement('div');
    let lsmConatainer=document.getElementById('ls-m-container');
    values.push(input.value)
    console.log("JSON.stringify(values.push(input.value))",JSON.stringify(values));
    

    lsName.textContent=input.value;
    console.log("JSON.parse(localStorage.getItem()).includes(lsName.textContent)zzzzzzzzzzzzzz",JSON.parse(localStorage.getItem("name")));
    // console.log(JSON.parse(localStorage.getItem("name")).includes(lsName.textContent));

    if(JSON.parse(localStorage.getItem("name")) && JSON.parse(localStorage.getItem("name")).length>0 && !JSON.parse(localStorage.getItem("name")).includes(lsName.textContent)){
        lsContainer.appendChild(lsName);
        lsmConatainer.appendChild(lsContainer);
    }
    localStorage.setItem('name',JSON.stringify(values));

    console.log("localstorage",localStorage.name) 
    // renderLocallStorage()
    // console.log(localStorage.name)

});

function renderLocallStorage(){
    let lsmConatainer=document.getElementById('ls-m-container');

if(localStorage.length>0){
    // console.log("localStorage.getItem('name')",localStorage.getItem('name'));
    for (let i=0 ; i < JSON.parse(localStorage.getItem('name')).length ; i++){
        console.log("input.value",input1 .value);
        console.log("JSON.parse(localStorage.getItem('name'))[i]",JSON.parse(localStorage.getItem('name'))[i]);
        let lsName= document.createElement('span');
        let lsContainer=document.createElement('div');
        lsName.textContent=JSON.parse(localStorage.getItem('name'))[i];
        lsContainer.appendChild(lsName);
        lsmConatainer.appendChild(lsContainer);
        
       
    }
 
}

}
renderLocallStorage()








