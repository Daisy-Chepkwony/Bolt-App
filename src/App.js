import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import BotCollection from './components/profiles/BotCollection';
import BotArmy from './components/profiles/BotArmy';

const App =() => {
  //useState to store fetched bots
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  //useEffect to manage fetch side effects
  useEffect(() => {
    axios.get('http://localhost:3000/bots')
    .then(res => setBots(res.data))
  }, [])
  //console.log(bots)
  return (
    <div>
      <div>
        <h1>Bot Battlr</h1>
      </div>
      <BotCollection bots={bots} selectedBots={selectedBots} setSelectedBots={setSelectedBots} />
      <BotArmy selectedBots={selectedBots}  />
    </div>
  );
}

export default App;






// import './App.css';
// import BotArmy from './components/profiles/BotArmy';
// import './components/profiles/BotCollection'
// import BotCollection from './components/profiles/BotCollection';



// function App() {
//   return (
//     <div className='container'>
      
//         <BotArmy/>
//         <BotCollection/>
        
//       </div>
//   );
// }

// export default App;






