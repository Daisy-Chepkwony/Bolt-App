

const BotArmy = ({item, handleOnClick})=> {
    return(
        <div onClick={()=> handleOnClick(item.id)} className="card col-2 p-0 m-2">
                <img  className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                    {/* <p className="btn btn-sm text-small btn-primary btn-block m-2">View Item Details</p> */}
                    <button className="btn btn-sm text-small btn-danger btn-block">Delete Items</button>

                </div>
        </div>
    )
}

export default BotArmy 