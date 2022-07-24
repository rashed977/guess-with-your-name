function age(age){

    fetch(`https://api.agify.io?name=${age.value}`)

    .then(response=>{
        return response.json()
    })

    .then((ageData)=>{

        let age=document.getElementById('age');
        age.textContent=ageData.age;
    })
    
}

export {age};