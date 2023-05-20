import React, { useContext, useState } from 'react';
import { ProductsContext } from '@/state/ProductsContext';
import { HeroTitle } from '@/components/hero';
import { Button } from '@/components/button';
import Link from 'next/link';
import PlayerCard from '@/components/playerCard';
import { HiMagnifyingGlass } from 'react-icons/hi2';

function AudioPlayer() {
  const { products, loading } = useContext(ProductsContext);

  const [query, setQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    return query.toLowerCase() === ''
      ? product
      : product.name.toLowerCase().startsWith(query.toLowerCase());
  });

  return (
    <div className="container mx-auto px-6 py-16">
      <div className=" mx-auto sm:w-1/2 lg:w-5/12 xl:w-[30%]">
        <div>
          <HeroTitle className="mt-2 font-bold text-lg underline">Latest Tracks </HeroTitle>
        </div>
        <Link href="/">
          <Button variant="secondary" size="small" className="no-underline hover:underline ...">
            Go back To Home
          </Button>
        </Link>

        <div className="flex w-full rounded-t-md my-3">
          <input
            type="text"
            className="bg-primary-gradient indent-2 outline-none placeholder:text-white rounded-l-md text-sm w-full"
            placeholder="Search Music"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="bg-[#653fd7] flex items-center rounded-r-md">
            <HiMagnifyingGlass size="20" />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            return (
              <div key={product.id}>
                <PlayerCard product={product} key={product.id} />
              </div>
            );
          })
        ) : (
          <div className="flex justify-center text-xl">No Results!</div>
        )}
      </div>
    </div>
  );
}

export default AudioPlayer;
