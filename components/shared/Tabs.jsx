'use client'


import { useState } from 'react';
import classNames from 'classnames';


export const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState(props.defaultTab);


    return (
       <div className='mt-16 md:mt-20 lg:mt-24'>
         <div className='content'>
            <h2 className="mb-2 text-xl font-bold  text-white">
                Listening booth
            </h2>
        <p className="max-w-[46ch] leading-relaxed text-zinc-500 dark:text-zinc-350">
          A selection of personal—and{" "}
          <a
            className="link text-zinc-800 dark:text-white"
            href="https://github.com/marcbouchenoire"
            rel="noreferrer"
            target="_blank"
          >
            open source
          </a>
          —projects.
        </p>
        </div>
        <div className='content'>
          <div>
            <div className='flex gap-20'>
              {props.tabs.map((tab, idx) => (
              <button
              key={idx}

              onClick={() => setActiveTab(idx)}
              className={classNames(
                'focusable  font-medium cursor-pointer flex flex-wrap items-center gap-2 m-2',
                {
                  'rounded-lg px-3 py-1 text-sm font-medium bg-vercel text-white': idx === activeTab,
                  'rounded-lg px-3 py-1 text-sm font-medium bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white': idx !== activeTab,
                }
              )}
              >
                <h1 className=''>{tab}</h1>
              </button>
              ))}
            </div>
            <div className='mt-4'>
                {props.contents[activeTab]}
            </div>
          </div>
        </div>
      </div>
    )
}