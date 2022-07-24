
    function gender(gend){
        
        fetch(`https://api.genderize.io?name=${gend.value}`)

    .then(response =>{ return response.json()
    })
    .then((data)=>{
        
        let gendImg=document.getElementById('g-img');
        let gender=document.getElementById('gender');
        gender.textContent=data.gender;
        
        if(data.gender=="male"){
            gendImg.src="https://www.freeiconspng.com/thumbs/male-icon/male-icon-15.png";
        }
        else{
            gendImg.src="female.png";
        }


    })






    

}
export {gender};
