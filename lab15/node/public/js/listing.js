import { getPaintingData }  from "./paintings.js";
document.addEventListener("DOMContentLoaded", function() {

   const main = document.querySelector('main');
   const paintings = getPaintingData();
   paintings.forEach( (p) => {
      main.appendChild( p.render() );
   });
   const url = "/addToFavorites";

   // set up button handlers here using event delegation
   document.querySelector('main').addEventListener('click', (e) => {
      if (e.target && e.target.nodeName.toLowerCase() == 'button') {
         // retrieve data from button and 
         let id = e.target.getAttribute('data-id');
         // get painting object for this button
         let p = paintings.find( p => p.id == id);

         // We will post the painting id and title to favorites

         // unlike Listing 10.9, let's send JSON data instead
         const dataToSend = JSON.stringify({"id": p.id, "title": p.title});
         const opt = {
            method: 'POST',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },            
            body: dataToSend    
         };

         // now let's post via fetch
         fetch(url, opt)
            .then( resp => resp.json() )
            .then( data => {
               // display notification it was successful
               showSnackBar(`${data.received.title} was added to favorites`);

               const count = document.querySelector("#count");
               count.textContent = data.count;         
               })
            .catch( error => {
               showSnackBar('An error occurred, favorites not modified');
               });         
         }
   });

   function showSnackBar(message) {
      const snack = document.querySelector("#snackbar");
      snack.textContent = message;
      snack.classList.add("show");
      setTimeout( () => {
         snack.classList.remove("show");
      }, 3000);

   }
   
});