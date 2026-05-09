import React from 'react'

const FilterPills = ({selectedFilter={filter}, setSelectedFilter={setFilter}, filters={filterOptions}}) => {

  return (
    
        <div className='flex gap-3 flex-wrap'>
    {filters.map(f => (
        <button key={f}
        onClick={() => setSelectedFilter(f)}
        className={`px-4 py-2 rounded-full transition-colors
            ${selectedFilter === f ?
                'bg-indigo-500 text-white font-semibold':
                'bg-white/5 text-white/70 hover:bg-white/10'
            }`}
        >
            {f}
        </button>
       
    ))}
        </div>
    
  )
}

export default FilterPills