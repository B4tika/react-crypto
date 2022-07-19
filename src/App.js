import './App.css';
import Axios from 'axios'
import {useEffect, useState} from 'react'
import Coin from './Components/Coin';

function App() {

  const [coinList, setCoinList] = useState([]);
  const [search, setSearch] = useState("");

  //lekérjük az api-t https://api.coinstats.app/public/v1/coins
  useEffect(()=>{
   
    Axios.get("https://api.coinstats.app/public/v1/coins")
    .then(res => setCoinList(res.data.coins))

  }, [])

  const searchedCoin = coinList.filter(coin => {
    //Megnézem, hogy a coinListben eltárolt összes kriptovaluta közül van-e egyezés a nevében azzal, amit beírtam az input mezőbe.
    //kisbetűssé kell tenni, mert valaki úgy írja be
    return coin.name.toLowerCase().includes(search.toLowerCase())

  })

 console.log(searchedCoin)


  /*az input mező logikája: minden amit beírunk az input mezőbe
  azt el akarjuk tárolni a search változómba. Ehhez onchange kell. Ez egy callback függvény lesz, amiben egy e paraméterrel hivatkozunk mindarra, amit beírunk az update mezőbe, és ennek az e-nek az értékével akarom felupdatelni a search változóm*/
  return (
    <div className="App">
     <div className="crypto-header">
        <h1>Kriptovaluta kereső</h1>
        <input type="text" placeholder="Bitcoin..." onChange={(e) =>
        setSearch(e.target.value)}/>
     </div>

     <div className="crypto-container">
        {
          //Mindig azt fogja kirenderelni, amit beírunk 
          //Mert ha nem írunk semmit a keresőbe, azzal mindennek megfelelelek. Az összesbe benne van a "semmi"
          searchedCoin.map(c => {

            return <Coin key={c.name} name={c.name} icon={c.icon} price={c.price} symbol={c.symbol}/>
          })

        }
     </div>
    </div>
  );
}

export default App;
