function search(name){
    let nameResult = document.getElementById('name-result');
    let ageResult = document.getElementById('age');
    let genderResult = document.getElementById('gender');
    let countryResult = document.getElementById('country');

    fetch(`https://api.agify.io/?name=${name}`)
    .then(response => response.json())
    .then(data => {
        nameResult.innerHTML = `Jméno: ${name}`;
        ageResult.innerHTML = `Věk: ${data.age}`;
    });

    fetch(`https://api.genderize.io/?name=${name}`)
    .then(response => response.json())
    .then(data => {
        if(data.gender == 'male'){
            genderResult.innerHTML = `Pohlaví: muž`;    
        }else if(data.gender == 'female'){
            genderResult.innerHTML = `Pohlaví: žena`;
        }else{
            genderResult.innerHTML = `Pohlaví: neexistuje`;
        }
    });

    fetch(`https://api.nationalize.io/?name=${name}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        countryResult.innerHTML = `Země: ${data.country[0].country_id}`;
    });
}