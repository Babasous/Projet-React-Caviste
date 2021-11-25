import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Composant qui affiche une ligne pour chaque vins
class WineRow extends React.Component{
  render() {
    const wine = this.props.wine;
    const name = wine.name;

    return (
      <tr>
        <td>{name}</td>
        <td>{wine.price}</td>
      </tr>
    );
  }
}
// Composant qui affiche un titre pour chaque region
class WineRegionRow extends React.Component{
  render(){
    const region = this.props.region;
    return (
      <tr>
        <th colSpan="2">
          {region}
        </th>
      </tr>
    );
  }
}
// Composant qui affiche et filtre la collection de données saisies par User
class WineTable extends React.Component{
  render(){
    const rows = [];
    let lastRegion = null;
    
    this.props.products.forEach((wine) => {
      if (wine.region !== lastRegion) {
        rows.push(
          <WineRegionRow
            region={wine.region}
            key={wine.region} />
        );
      }
      rows.push(
        <WineRow
          wine={wine}
          key={wine.name} />
      );
      lastRegion = wine.region;
    });

    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

// Composant qui reçoit les données saisies par User
class SearchBar extends React.Component{
  render(){
    return(
      <form>
        <div>
          <input type="text" placeholder="Rechercher par le nom" />
        </div>
        <div>
          <input type="checkbox" />
          {' '}
          Vins groupés par région 
        </div>
      </form>
    );
  }
}
// Composant qui affiche la liste deroulante des pays
class DropDownList extends React.Component{
  render(){
    return(
      <select name="pays" id="pays-select">
          <option value="">--Choisir un pays--</option>
          <option value="France">Français</option>
          <option value="Anglais">USA</option>
          <option value="Espagne">Espagne</option>
          <option value="Argentine">Argentine</option>
          <option value="Italie">Italie</option>
      </select>
    )
  }
}
// Composant titre
class TitrePage extends React.Component{
  render(){
    return <h1>La liste de vins par région</h1>
  }
}

// Composant principal, contient les autres composants
class FilterableProductTable extends React.Component{
  render(){
    return(
      <div>
        <TitrePage />
        <SearchBar />
        <DropDownList />
        <WineTable products={this.props.wines} />
      </div>      
    )
  }
}
const WINES = [
  {
    "id": "9",
    "name": "BLOCK NINE",
    "year": "2009",
    "grapes": "Pinot Noir",
    "country": "USA",
    "region": "California",
    "description": "With hints of ginger and spice, this wine makes an excellent complement to light appetizer and dessert fare for a holiday gathering.",
    "picture": "block_nine.jpg",
    "price": "21",
    "capacity": "75",
    "color": "white",
    "extra": null
  },
  {
      "id": "11",
      "name": "BODEGA LURTON",
      "year": "2011",
      "grapes": "Pinot Gris",
      "country": "Argentina",
      "region": "Mendoza",
      "description": "Solid notes of black currant blended with a light citrus make this wine an easy pour for varied palates.",
      "picture": "bodega_lurton.jpg",
      "price": "103.8",
      "capacity": "75",
      "color": "red",
      "extra": null
  },
  {
      "id": "1",
      "name": "CHATEAU DE SAINT COSME",
      "year": "2009",
      "grapes": "Grenache / Syrah",
      "country": "France",
      "region": "Southern Rhone / Gigondas",
      "description": "The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.",
      "picture": "saint_cosme.jpg",
      "price": "32.5",
      "capacity": "75",
      "color": "red",
      "extra": "{\"bio\":true}"
  },
  {
      "id": "7",
      "name": "CHATEAU LE DOYENNE",
      "year": "2005",
      "grapes": "Merlot",
      "country": "France",
      "region": "Bordeaux",
      "description": "Though dense and chewy, this wine does not overpower with its finely balanced depth and structure. It is a truly luxurious experience for the\nsenses.",
      "picture": "le_doyenne.jpg",
      "price": "12.48",
      "capacity": "75",
      "color": "pink",
      "extra": null
  },
  {
      "id": "8",
      "name": "DOMAINE DU BOUSCAT",
      "year": "2009",
      "grapes": "Merlot",
      "country": "France",
      "region": "Bordeaux",
      "description": "The light golden color of this wine belies the bright flavor it holds. A true summer wine, it begs for a picnic lunch in a sun-soaked vineyard.",
      "picture": "bouscat.jpg",
      "price": "9.9",
      "capacity": "75",
      "color": "white",
      "extra": null
  },
  {
    "id": "5",
    "name": "REX HILL",
    "year": "2009",
    "grapes": "Pinot Noir",
    "country": "USA",
    "region": "Oregon",
    "description": "One cannot doubt that this will be the wine served at the Hollywood award shows, because it has undeniable star power. Be the first to catch\nthe debut that everyone will be talking about tomorrow.",
    "picture": "rex_hill.jpg",
    "price": "41.36",
    "capacity": "75",
    "color": "white",
    "extra": null
},
  {
      "id": "10",
      "name": "DOMAINE SERENE",
      "year": "2007",
      "grapes": "Pinot Noir",
      "country": "USA",
      "region": "Oregon",
      "description": "Though subtle in its complexities, this wine is sure to please a wide range of enthusiasts. Notes of pomegranate will delight as the nutty finish completes the picture of a fine sipping experience.",
      "picture": "domaine_serene.jpg",
      "price": "69.5",
      "capacity": "75",
      "color": "pink",
      "extra": null
  },
  {
      "id": "2",
      "name": "LAN RIOJA CRIANZA",
      "year": "2006",
      "grapes": "Tempranillo",
      "country": "Spain",
      "region": "Rioja",
      "description": "A resurgence of interest in boutique vineyards has opened the door for this excellent foray into the dessert wine market. Light and bouncy, with a hint of black truffle, this wine will not fail to tickle the taste buds.",
      "picture": "lan_rioja.jpg",
      "price": "10.49",
      "capacity": "75",
      "color": "red",
      "extra": null
  },
  {
      "id": "12",
      "name": "LES MORIZOTTES",
      "year": "2009",
      "grapes": "Chardonnay",
      "country": "France",
      "region": "Burgundy",
      "description": "Breaking the mold of the classics, this offering will surprise and undoubtedly get tongues wagging with the hints of coffee and tobacco in\nperfect alignment with more traditional notes. Breaking the mold of the classics, this offering will surprise and\nundoubtedly get tongues wagging with the hints of coffee and tobacco in\nperfect alignment with more traditional notes. Sure to please the late-night crowd with the slight jolt of adrenaline it brings.",
      "picture": "morizottes.jpg",
      "price": "20.99",
      "capacity": "75",
      "color": "red",
      "extra": null
  },
  {
      "id": "3",
      "name": "MARGERUM SYBARITE",
      "year": "2010",
      "grapes": "Sauvignon Blanc",
      "country": "USA",
      "region": "California Central Cosat",
      "description": "The cache of a fine Cabernet in ones wine cellar can now be replaced with a childishly playful wine bubbling over with tempting tastes of\nblack cherry and licorice. This is a taste sure to transport you back in time.",
      "picture": "margerum.jpg",
      "price": "7.35",
      "capacity": "75",
      "color": "white",
      "extra": null
  },
  {
      "id": "4",
      "name": "OWEN ROE \"EX UMBRIS\"",
      "year": "2009",
      "grapes": "Syrah",
      "country": "USA",
      "region": "Washington",
      "description": "A one-two punch of black pepper and jalapeno will send your senses reeling, as the orange essence snaps you back to reality. Don't miss\nthis award-winning taste sensation.",
      "picture": "ex_umbris.jpg",
      "price": "120.94",
      "capacity": "75",
      "color": "red",
      "extra": null
  }, 
  {
      "id": "6",
      "name": "VITICCIO CLASSICO RISERVA",
      "year": "2007",
      "grapes": "Sangiovese Merlot",
      "country": "Italy",
      "region": "Tuscany",
      "description": "Though soft and rounded in texture, the body of this wine is full and rich and oh-so-appealing. This delivery is even more impressive when one takes note of the tender tannins that leave the taste buds wholly satisfied.",
      "picture": "viticcio.jpg",
      "price": "33.75",
      "capacity": "75",
      "color": "pink",
      "extra": null
  }
];

ReactDOM.render(<FilterableProductTable wines={WINES}/>, document.getElementById('root'));