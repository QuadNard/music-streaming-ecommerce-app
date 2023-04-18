import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ProductsContext } from '@/state/ProductsContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import * as Icons from '@/components/Icons';
import Link from 'next/link';
import { Button } from '@/components/button';
import Player from '@/components/Player';

function IdPlayer() {
  const { products, loading } = useContext(ProductsContext);
  const context = useRouter();
  const { id } = context.query;
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <>
          <div className="flex flex-col items-center bg-page-gradient">
            <Link href="/audio/player">
              <Button className="mt-5">Go Back</Button>
            </Link>
          </div>
          <div className="body">
            <div className="music-player">
              <h1 className="music-name">{product.name}</h1>
              <p className="description-name">{product.description}</p>
              <Image src={product.image} className="disk" alt="Image" width={180} height={180} />
              <Player product={product} />
            </div>
          </div>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default IdPlayer;
