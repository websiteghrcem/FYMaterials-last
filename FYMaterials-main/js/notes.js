fetch("https://websiteghrcem.github.io/subjects/fda.json")
  .then(response => response.json())
  .then(data => {
    console.log(Object.keys(data).length);
    for (let i = 1; i < Object.keys(data).length + 1; i++){
        let link = document.getElementById(i);
        link.setAttribute('href', Object.values(data)[i-1]);
        link.innerHTML = Object.keys(data)[i-1];

    }
    
    
  })
  .catch(console.error);

