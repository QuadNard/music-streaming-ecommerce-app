/*
import React,{ useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { FaSearch } from 'react-icons/fa'






const Search = ({ open = false, setOpen }) => {
   const [searchTerm, setSearchTerm] = useState("");
 


useEffect(async () => {
    if (!searchTerm) return;
    const { data, error } = await supabase
      .from("products")
      .select()
      .textSearch( "name", `%${searchTerm}%`);
    if (error) {
      console.log(error.message);
    } else {
      console.log(data);
    }
}, [searchTerm])



    return (
 <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-md py-2 pl-10 pr-4 block w-full leading-5 bg-white focus:outline-none focus:bg-white focus:border-gray-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>
      <button
        className="absolute top-0 right-0 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={(e) => searchTerm(e.target.value) }
      >
        Search
      </button>
    </div>
    )
}

export default Search

*/