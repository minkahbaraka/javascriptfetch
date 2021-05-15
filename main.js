function fetchData(){

   fetch('https://swapi.dev/api/people/?search=luke')
   .then(response => {
       if(!response.ok) {
           throw Error("Could not find URL!")
       }

    return response.json();

    })
   .then(data => {
       console.log(data.results);
       const html = data.results.map(people => {
           return `
           <div class="people">
           <p>Name: ${people.name}</p>
           <p>Height: ${people.height}</p>
           </div>
           `;
       }).join('');
       console.log(html);
       document.querySelector('#display').insertAdjacentHTML('afterbegin', html); 
   })
   .catch(error => {
       console.log(error);
   });
}

fetchData();