class Painting {
   constructor(id,title,artist,year,description) {
      this.id = id;
      this.title = title;
      this.artist = artist;
      this.year = year;
      this.description = description;
   }

   render() {
      let section = document.createElement('section');
      section.classList.add('card');
      let divLeft = document.createElement('div');
      let img = document.createElement('img');
      img.src = `images/${this.id}.jpg`;
      img.alt = this.title;
      divLeft.appendChild(img);

      let divRight = document.createElement('div');
      let h2 = document.createElement('h2');
      h2.textContent = this.title;
      let h3 = document.createElement('h3');
      h3.textContent = `${this.artist} (${this.year})`;
      let p = document.createElement('p');
      p.textContent = this.description;
      let button = document.createElement('button');
      button.textContent = "Add to Favorites";
      button.setAttribute('data-id', this.id);
      let span = document.createElement('span');
      divRight.appendChild(h2);
      divRight.appendChild(h3);
      divRight.appendChild(p);
      divRight.appendChild(button);
      divRight.appendChild(span);

      section.appendChild(divLeft);
      section.appendChild(divRight);
      return section;
   }


}

const data = [
   new Painting("017040","Women with Parasol","Claude Monet",1875,"With Manet's assistance, Monet found lodging in suburban Argenteuil in late 1871, a move that initiated one of the most fertile phases of his career."),
   new Painting("017080","The Bridge at Argenteuil","Claude Monet",1874,"From a distance of ten feet or so, Monet's brushstrokes blend to yield a convincing view of the Seine and the pleasure boats that drew tourists to Argenteuil."),
   new Painting("019170","Self Portrait","Vincent Van Gogh",1889,"This self–portrait is a particularly bold painting, apparently executed in a single sitting without later retouching. "),
   new Painting("016010","Little Girl in a Blue Chair","Mary Cassatt",1878,"Little Girl in a Blue Armchair stands as a testament to the newly formed relationship between Mary Cassatt and the impressionists.")
];

const getPaintingData = () => data;



export { Painting, getPaintingData };