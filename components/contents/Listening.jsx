'use client'


import React, { useEffect, useState } from 'react'
import { BeatCard } from '../shared/BeatCard';
import { supabase } from '../../utils/supadb/SupabaseClient';
import PlayerModal from '../miscellaneous/PlayerModal';





const Listening = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  const getFromAndTo = () => {
  const ITEM_PER_PAGE = 1;
  let from = page * ITEM_PER_PAGE;
  let to = from + ITEM_PER_PAGE;

  if (page > 0) {
    from += 1;
  }

  return {from, to};
}

  const fetchBeats = async () => {
    const {from, to} = getFromAndTo();
    const {data: products, error} = await supabase.from('product')
  .select('*')
  .range(from, to);
  setPage((prevPage) => prevPage + 1);
  setData((currentData) => [...currentData, ...products]);
  }

useEffect(() => {
  fetchBeats();
}, []);



  return (
    <div>
     {data.map((product, index) => (
        <BeatCard 
        className={'min-w-0 max-w-full m-3'} 
        key={index}
        productId={product.id}
        productImage={product.image}
        productTitle={product.name}
        productmp3={product.mp3Url}
        productDate={product.created_at}
        productPrice={product.price}
        productDesc={product.description}
        />
    ))}
    <button className='text-white bg-green-500 w-full rounded-md mt-3 cursor-pointer' onClick={fetchBeats}>fetch More</button>
      <PlayerModal />
    </div>
  )
}

export default Listening

     