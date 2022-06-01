function search(name){
    let nameResult = document.getElementById('name-result');
    let ageResult = document.getElementById('age');

    fetch(`https://api.agify.io/?name=${name}`)
    .then(response => response.json())
    .then(data => {
        nameResult.innerHTML = name;
        ageResult.innerHTML = data.age;
    })
}