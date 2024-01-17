import React from 'react'

const StoreItem = ({ obj }) => {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={obj.img} alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{obj.name}</h5>
                        {obj.price}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                </div>
            </div>
        </div>
    )
}

export default StoreItem;