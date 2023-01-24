import React from 'react'
import BotCard from './BotCard'

const BotCollection =({ bots, selectedBots, setSelectedBots }) => {

    //render fetchted bots
  const displayBots = bots.map(bot => {
      return <BotCard key={bot.id} bot={bot} selectedBots={selectedBots} setSelectedBots={setSelectedBots} />
    })
  return (
    <div className='ui four column grid'>
        <div className='row'>
            {displayBots}
        </div>
    </div>
  )
}

export default BotCollection






// import {useState, useEffect} from "react"
// import BotArmy from "./BotArmy"


// const BotCollection = ()=> {
//     const [items, setItems] = useState([])
//     const [botItems, setBotItems] = useState([])
    

//     useEffect(()=>{
//         fetch("http://localhost:3000/bots")
//         .then((r)=>r.json())
//         .then((data)=> setItems(data))
//     }, [])


//     const addItemBot = (id)=> {
//         const item= items.find(item => item.id === id)
//         const bot = botItems.find(item => item.id === id)
//         bot? alert("existing") :  setBotItems([...botItems, item])
//     }

//     const removeItemBot = (id)=> {
//         const newBotItems = botItems.filter((item) => item.id !== id)
//         setBotItems(newBotItems)
//     }


//     return(
//         <div className="row">
//             <div className="col-12 mx-auto border p-4">
//                 <div className="row">
//                     {
//                         botItems.map((item)=> {
//                             return (
//                                 <BotArmy  key={item.id} item={item} handleOnClick={removeItemBot}/>
//                             )
//                         })
//                     }
//                     </div>
//             </div>
//             <div className="col-12 mx-auto border p-4">
//                 <div className="row">
//                 {
//                     items.map((item)=> {
//                         return (
//                             <BotArmy key={item.id} item={item} handleOnClick={addItemBot}/>
//                         )
//                     })
//                 }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default BotCollection





