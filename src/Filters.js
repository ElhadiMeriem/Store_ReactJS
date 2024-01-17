import React from 'react';

const Filters = ({ FilterSearch, filters }) => {
const FilterClick = (e , filter) =>
{
    e.preventDefault();
    FilterSearch(filter);
}
    return (
        <div>
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={(e) => FilterClick(e, filter)}
                >
                    {filter}
                </button>
            ))}

        </div>
    )
}


export default Filters
