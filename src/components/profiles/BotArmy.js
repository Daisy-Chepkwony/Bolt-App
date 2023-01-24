import React from 'react'
import SelectedBots from './SelectedBots'

const BotArmy = ({ selectedBots, setSelectedBots }) => {
    //render selected bot
    const myArmyBots = selectedBots.map(selectedBot => {
        return <SelectedBots key={selectedBot.id} selectedBot={selectedBot} selectedBots={selectedBots} setSelectedBots={setSelectedBots} />
    }) 
  return (
    <div>
        <div className>
            <div className='bot-army-row'>
                {myArmyBots}
            </div>
        </div>
    </div>
  )
}

export default BotArmy


// const BotArmy = (item, handleOnClick)=> {
//     return(
//         <div  key={item.id} onClick={()=> handleOnClick(item.id)} className="card col-2 p-0 m-2">
//                 <img src={item.avatar_url} className="card-img-top" alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-title">{item.catchphrase}</h5>
//                     <p className="card-text">{item.bot_class}</p>
//                     {/* <p className="btn btn-sm text-small btn-primary btn-block m-2">View Item Details</p> */}
//                     <button className="btn btn-sm text-small btn-danger btn-block">Delete Items</button>

//                 </div>
//         </div>
//     )
// }

// export default BotArmy