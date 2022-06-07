function search(name){
    let nameResult = document.getElementById('name-result');
    let ageResult = document.getElementById('age');
    let genderResult = document.getElementById('gender');

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
}