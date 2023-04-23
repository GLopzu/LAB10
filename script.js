//para ti

const mapas = [
  new Map([
    ['titulo', 'BetterCallSaul'],
    ['imagen', 'assets/p1.jpg'],
    ['rating', '89%']
  ]),
  new Map([
    ['titulo', 'TheOffice'],
    ['imagen', 'assets/p2.jpg'],
    ['rating', '96%']
  ]),
  new Map([
    ['titulo', 'Sleepers'],
    ['imagen', 'assets/p3.jpg'],
    ['rating', '90%']
  ]),
  new Map([
    ['titulo', 'TheMidnightGospel'],
    ['imagen', 'assets/p4.jpg'],
    ['rating', '90%']
  ]),
  new Map([
    ['titulo', 'Berserk'],
    ['imagen', 'assets/p6.jpg'],
    ['rating', '100%']
  ]),
];


const mapasContainer = document.getElementById('mapas-container');

for (const mapa of mapas) {
  const titulo = mapa.get('titulo');
  const imagen = mapa.get('imagen');
  const rating = mapa.get('rating');

  const mapaElement = document.createElement('div');
  mapaElement.innerHTML = `
    <h2>${titulo}</h2>
    <img src="${imagen}" alt="${titulo}" class="mapa-imagen">
    <p>Rating: ${rating}</p>
  `;
  
  mapasContainer.appendChild(mapaElement);
}

//tendencias

const mapas2 = [
  new Map([
    ['titulo', 'TheBoys'],
    ['imagen', 'assets/p5.jpg'],
    ['rating', '89%']
  ]),
  new Map([
    ['titulo', 'EternoResplandor'],
    ['imagen', 'assets/p8.jpg'],
    ['rating', '96%']
  ]),
  new Map([
    ['titulo', 'Whiplash'],
    ['imagen', 'assets/p9.jpg'],
    ['rating', '90%']
  ]),
  new Map([
    ['titulo', 'HoraDeAventura'],
    ['imagen', 'assets/p10.jpg'],
    ['rating', '90%']
  ]),
  new Map([
    ['titulo', 'Mememnto'],
    ['imagen', 'assets/p11.jpg'],
    ['rating', '100%']
  ]),
];


const mapasContainer2 = document.getElementById('mapas-container2');

for (const mapa2 of mapas2) {
  const titulo = mapa2.get('titulo');
  const imagen = mapa2.get('imagen');
  const rating = mapa2.get('rating');

  const mapa2Element = document.createElement('div');
  mapa2Element.innerHTML = `
    <h2>${titulo}</h2>
    <img src="${imagen}" alt="${titulo}" class="mapa-imagen">
    <p>Rating: ${rating}</p>
  `;
  
  mapasContainer2.appendChild(mapa2Element);
}

