import React, { useState } from 'react';
import SearchInput from './SearchInput';
import Filters from './Filters';
import StoreItem from './StoreItem';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpeg';
import img6 from './images/img6.jpg';


const itemList = [

    {
        name: '14KT White Gold 3.62CT Emerald Shape Moissanite and Diamond Accent Ring',
        price: 3025.00,
        type: 'Ring',
        img: img1,
        id: 101,
    },
    {
        name: '14KT White Gold 1.73CT Pear Shape Moissanite & Diamond Ring',
        img: img2,
        price: 2000,
        type: 'Ring',
        id: 102,
    },
    {
        name: '14KT Yellow Gold 18" 0.05CTW Diamond Halo Set Necklace.',
        img: img3,
        price: 415.00,
        type: 'Necklace',
        id: 103,
    },
    {
        name: 'Diamond Necklace',
        img: img4,
        price: 475.00,
        type: 'Necklace',
        id: 104,
    },
    {
        name: 'Gucci GG Running cuff with diamonds',
        img: img5,
        price: 3175.00,
        type: 'Bracelet',
        id: 105,
    }
    ,
    {
        name: 'Birks Dare To Dream 18KT Tri Gold 7.5" 0.19CTW Daimond Bracelet',
        img: img6,
        price: 1805.00,
        type: 'Bracelet',
        id: 106,
    }
];
const filters = Array.from(new Set(['all', ...itemList.map((i) => i.type)]));
const Store = () => {
    const [items, setItems] = useState(itemList);
    const handleSearch = (text) => {
        const FiltredItem = itemList.filter((item) =>
            item.name.toLowerCase().includes(text.toLowerCase()));
        setItems(FiltredItem);
    }
    const FilterSearch = (type) => {
        if (type === 'all') {
            setItems(itemList);
            return;
        }
        const items = itemList.filter((item) => item.type === type);
        setItems(items)
    }

    return (
        <>

            <section className="py-5">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-5">
                        <Filters FilterSearch={FilterSearch} filters={filters} />
                    </div >
                </div>
                <div className="container px-4 px-lg-5 mt-5">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <SearchInput handleSearch={handleSearch} />
                    </div >
                </div>
                </div>
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {items.map((i, index) => (
                            <StoreItem key={index} obj={i} />
                        ))}
                    </div >
                </div >
            </section >
        </>

    )
}


export default Store;