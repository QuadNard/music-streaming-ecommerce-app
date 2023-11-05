

import { AnimatePresence, motion } from 'framer-motion'
import { Skeleton } from '../miscellaneous/Skeleton'
import clsx from 'clsx'
import { BsArrowRight } from 'react-icons/bs'
import usePlayerModal from '../../utils/hooks/useModal'
import { Toaster, toast } from 'sonner';



const variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const fade = {
  ease: "easeInOut",
  duration: 0.6
}




export function BeatCard ({   
productImage,
productId,
productTitle,
productDate,
productPrice,
productDesc,
productmp3,
...props
}){
 
  const { isOpen, playSong } = usePlayerModal();
   
  const displayText = isOpen ? "Currently playing a beat " : "Not playing";


  const handlePlayClick = () => {
    if (isOpen) {
        toast.error('Please close the current player first')
    } else {
      playSong(productmp3, productTitle);
    }
  };




    return (
      <div>
        <button className={clsx(
        props.className,
        'focusable flex w-fit gap-4 rounded pr-2 ring-offset-4 transition hover:opacity-60 cursor-pointer focus:ring-offset-zinc-900 focus:ring-red-400/40'
        )}
        onClick={handlePlayClick}
      >
            <div className='highlight-invert relative aspect-square h-20 md:h-48 flex-none overflow-hidden rounded bg-zinc-800'>
                  <svg
          className="absolute h-full w-full text-zinc-600"
          role="presentation"
          viewBox="0 0 78 78"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52 34.576v14.697c0 1.075-.146 2.13-.614 3.105-.72 1.517-1.89 2.473-3.46 2.936-.868.26-1.764.402-2.67.442-2.369.122-4.425-1.538-4.844-3.95-.361-1.99.565-4.183 2.592-5.208.798-.401 1.667-.643 2.533-.824.945-.21 1.89-.401 2.825-.623.693-.16 1.14-.593 1.277-1.328.039-.16.048-.332.048-.492V29.318c0-.16-.03-.322-.067-.473-.097-.391-.37-.623-.76-.604-.4.02-.79.091-1.179.172-1.9.382-3.8.774-5.692 1.176l-9.228 1.92c-.04.01-.088.03-.128.03-.692.202-.935.524-.965 1.267-.01.11 0 .222 0 .332-.01 6.695 0 13.39-.01 20.084 0 1.087-.117 2.152-.535 3.156-.692 1.648-1.92 2.684-3.575 3.176-.878.261-1.774.413-2.691.442-2.388.091-4.377-1.547-4.785-3.97-.351-2.09.575-4.342 2.875-5.348.896-.382 1.822-.592 2.767-.793.711-.15 1.433-.301 2.144-.452.955-.21 1.452-.834 1.5-1.839V24.352c0-.322.04-.642.108-.955.175-.733.683-1.156 1.364-1.328.634-.172 1.287-.291 1.929-.432 1.832-.382 3.654-.765 5.486-1.137l5.662-1.187c1.677-.342 3.342-.693 5.019-1.034.546-.11 1.102-.232 1.656-.273.769-.07 1.306.433 1.384 1.238.019.19.03.382.03.573v14.747l.004.012Z"
            fill="currentColor"
          />
        </svg>
        
                <AnimatePresence>
                    <motion.img 
                    alt=''
                    loading="lazy"
                    transition={fade}
                    variants={variants}
                    animate='visible'
                    className='absolute h-full w-full object-cover'
                    exit='hidden'
                    initial='hidden'
                    key={productId}
                    src={productImage}
                    />
                </AnimatePresence>
            </div>
              
            <div className='flex min-w-0 flex-col justify-center"'>
                <small className='flex items-center md:text-3x1 text-2xs font-semibold uppercase leading-tight tracking-widest text-rose-400'>
                  <svg
            className="mr-1 -ml-px flex-none will-change-transform"
            fill="currentColor"
            height="20"
            role="presentation"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <>
                <rect height="8" rx="1" width="2" x="3" y="6">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="8;4;2;6;4;8"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="6;8;9;7;8;6"
                  />
                </rect>
                <rect height="12" rx="1" width="2" x="7" y="4">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="12;8;10;8;14;12"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="4;6;5;6;3;4"
                  />
                </rect>
                <rect height="6" rx="1" width="2" x="11" y="7">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="6;8;6;10;8;6"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="7;6;7;5;6;7"
                  />
                </rect>
                <rect height="8" rx="1" width="2" x="15" y="6">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="8;4;6;4;2;8"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="6;8;7;8;9;6"
                  />
                </rect>
              </>
            ) : (
              <path
                clipRule="evenodd"
                d="M16 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1ZM12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM8 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1ZM4 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Z"
                fillRule="evenodd"
              />
            )}
          </svg>
               <time
              className="truncate p-1"
              dateTime={String(productDate)}
            >
            
            </time>
              <span  className="truncate">
                {displayText}
              </span>
            </small>
            <p className="my-1 flex items-center">
          <span
            className="truncate md:text-2xl  font-semibold text-zinc-100"
            title={productTitle}
          >
            {productTitle ?? <Skeleton className="w-40" />}
          </span>{" "}
          {productDate && (
            <time
              className="ml-1.5 inline-block flex-none translate-y-px rounded  p-1 text-xs font-medium leading-none  bg-zinc-800 text-zinc-400"
              dateTime={String(productDate)}
            >
              {new Date(productDate).toLocaleDateString("en-US", {  
                year: "numeric",
              })}
            </time>
          )}
        </p>
                    <p className="truncate text-zinc-500 dark:text-zinc-400" title={productDesc}>
                    {productDesc ?? <Skeleton className="w-28" />}
                </p>
                <div className='space-x-3 m-2'>
                   
                </div>
            </div>
        </button>
      </div>
    )
}

