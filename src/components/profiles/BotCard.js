import React from 'react'

const botClasses = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star",
}

const BotCard = ({ bot, selectedBots, setSelectedBots}) => {
    //function to handle click
    // const handleClick = () => {
    //     let clickedBot = {
    //         "id": `${bot.id}`,
    //         "name": `{bot.name}`,
    //         "health": `{bot.health}`,
    //         "damage": `${bot.damage}`,
    //         "armor": `${bot.armor}`,
    //         "bot_class": `${bot.bot_class}`,
    //         "catchphrase": `${bot.catchphrase}`,
    //         "avatar": `${bot.avatar_url}`
    //     }
    //     setSelectedBots([...selectedBots, clickedBot])
    //     //console.log(selectedBots)
    // }

    const handleClick = (bot) => {
        if(!selectedBots.find(selectedBot => selectedBot.id === bot.id)) {
          setSelectedBots([...selectedBots, bot]);
        }
      }

  return (
    <div className='ui column '>
        <div className='image'>
            <img src={bot.avatar_url} alt='bot-logo' />
        </div>
        {/* <div>
            <h3>Id: {bot.id}</h3>
        </div> */}
        <div className='ui card' onClick={()=> handleClick()}>
            <h2 className=''>Profile</h2>
            <div>
                <h2>{bot.name} <i className={botClasses[bot.bot_class]}></i></h2>
            </div>
            <div>
                <h4><i className='icon heartbeat'>{bot.health}</i></h4>
            </div>
            <div>
                <h4><i className='icon lightning'>{bot.damage}</i></h4>
            </div>
            <div>
                <h4><i className='icon shield'>{bot.armor}</i></h4>
            </div>
            <div className='meta text-wrap'>
                <h4><small>{bot.catchphrase}</small></h4>
            </div>
        </div>  
    </div>
  )
}

export default BotCard