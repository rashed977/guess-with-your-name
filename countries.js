function country(cntry){
    fetch(`https://api.nationalize.io?name=${cntry.value}`)
    .then(response=>{
        return response.json()
    })
    .then((countryData)=>{
        // console.log(countryData)
        let flagsContainer=document.getElementById('flags-container');
        for(let i=0; i<countryData.country.length; i++ ){
            console.log("flagsContainer.childNodes",flagsContainer.childNodes.length);
            if(flagsContainer.childNodes.length > 0 ){
            flagsContainer.innerHTML='';

            }

            
            country.textContent=countryData.country[i].country_id;
            
            fetch(`https://restcountries.com/v3.1/alpha?codes=${country.textContent}`)
            .then(response=>{
                return response.json()
            })
            .then((cntryFlag)=>{
            // console.log(cntryFlag);

            let flags=document.createElement('div');
            let contName=document.createElement('p');
            let flagLogo=document.createElement('img');
            
            
            flagLogo.src=cntryFlag[0].flags.png;
            // console.log(cntryFlag[0].flags.png)
            contName.textContent=cntryFlag[0].name.common;
            // console.log(contName)
            flags.appendChild(contName);
            flags.appendChild(flagLogo);
            
            flagsContainer.appendChild(flags);
        })
        }
    })
}

export {country}