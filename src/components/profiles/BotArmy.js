import {useState, useEffect} from "react"
import BotCollection from "../profiles/BotCollection"
// import { getItems } from "../../helper/helpers"

const BotArmy = ()=> {
    const [items, setItems] = useState([])
    // const [favoriteItems, setFavoriteItems] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3001/bots")
        .then((data)=> setItems(data))
    }, [])


    // const addItemToFavorite = (id)=> {
    //     const item = items.find(item => item.id === id)
    //     const fav = favoriteItems.find(item => item.id === id)
    //     fav? alert("existing") :  setFavoriteItems([...favoriteItems, item])
    // }

    // const removeItemFromFavorites = (id)=> {
    //     const newFavoriteItems = favoriteItems.filter((item) => item.id !== id)
    //     setFavoriteItems(newFavoriteItems)
    // }


    return(
        <div className="row">
            <div className="col-12 mx-auto border p-4">
                <div className="row">
                    {
                        // favoriteItems.map((item)=> {
                        //     return (
                        //         <BotCollection />
                        //     )
                        // })
                    }
                    </div>
            </div>
            <div className="col-12 mx-auto border p-4">
                <div className="row">
                {
                    // items.map((item)=> {
                    //     return (
                    //         <BotCollection/>
                    //     )
                    // })
                }
                </div>
            </div>
        </div>
    )
}

export default BotArmy