import {useState} from 'react'

const SearchBar = ({searchValue, setSearchValue}) => {

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }
  return (
    <div>
        <input type= 'text' value={searchValue} onChange= {handleChange} placeholder= 'e.g. Software Engineer'
       className='w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-indigo-500 transition-colors'
        />

    </div>
  )
}

export default SearchBar