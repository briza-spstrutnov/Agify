function search(name){
    fetch(`https://api.agify.io/?name=${name}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.age);
    })
}