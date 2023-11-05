import Image from 'next/image'
import { Characters } from './miscellaneous/Character';


export default function Introduction() {
    return (
    <section className='content mt-12 md:mt-16 lg:mt-20'>
      <div>
        <div className='portrait'>
            <Image src='/About.jpeg' 
            alt='Portrait'
            className='rounded-md  overflow-hidden'
             priority
            width={80} 
            height={80} 
            />
        </div>
          <h1 className="mt-5 mb-1 text-2xl font-semibold  text-white">
          MaadYouDidThat
        </h1>
        <p className="text-lg text-zinc-450">
          Sound Engineer / Beats Engineer
        </p>
      </div>
      <div className="my-10 max-w-[58ch] text-zinc-350">
        <p className="my-4 leading-loose">
         Lorem Ipsum is that it has a more-or-less normal distributio{" "}
          <em className="delightful">
            <Characters>delightful</Characters>
          </em>{" "}
         It has survived not only five centuries&nbsp;interactions.
        </p>
        <p className="my-4 leading-loose">
         Lorem Ipsum has been the industry's standard dummy{" "}
          <a
            className="focusable rounded-sm font-medium  
            underline  decoration-2 
            underline-offset-2 
            transition duration-100   text-white decoration-violet-400 hover:text-violet-400 hover:decoration-violet-400/30 focus:text-violet-400 focus:ring-violet-400/40"
            href="https://liveblocks.io/"
            rel="noreferrer"
            target="_blank"
          >
            Liveblocks
          </a>
          .Various versions have evolved over the years, sometimes {" "}
          <a
            className="focusable rounded-sm font-medium  underline decoration-sky-500 decoration-2 underline-offset-2 transition duration-100 hover:text-sky-500 hover:decoration-sky-500/30   text-white dark:decoration-sky-400  focus:text-sky-400 focus:ring-sky-400/40"
            href="https://www.framer.com/"
            rel="noreferrer"
            target="_blank"
          >
            Framer
          </a>{" "}
          and on Sketch{" "}
          <a
            className="focusable rounded-sm font-medium  underline  decoration-2 underline-offset-2 transition duration-100  text-white decoration-amber-400 hover:text-amber-400 hover:decoration-amber-400/30 focus:text-amber-400 focus:ring-amber-400/40"
            href="https://www.sketch.com/apps/"
            rel="noreferrer"
            target="_blank"
          >
            Cloud
          </a>{" "}
          and{" "}
          <a
            className="focusable rounded-sm font-medium  underline decoration-amber-500 decoration-2 underline-offset-2 transition duration-100 hover:text-amber-500 hover:decoration-amber-500/30 focus:text-amber-500 focus:ring-amber-500/40 text-white dark:decoration-amber-400 dark:hover:text-amber-400 dark:hover:decoration-amber-400/30 dark:focus:text-amber-400 dark:focus:ring-amber-400/40"
            href="https://www.sketch.com/apps/"
            rel="noreferrer"
            target="_blank"
          >
            Mirror
          </a>{" "}
          at{" "}
          <a
            className="focusable rounded-sm font-medium  underline decoration-lime-500 decoration-2 underline-offset-2 transition duration-100 hover:text-lime-500  text-white dark:decoration-lime-400 dark:hover:text-lime-400 hover:decoration-lime-400/30 focus:text-lime-400 focus:ring-lime-400/40"
            href="https://www.awkward.co/"
            rel="noreferrer"
            target="_blank"
          >
            Awkward
          </a>
          . Before that, I graduated from{" "}
          <a
            className="focusable rounded-sm font-medium  underline  decoration-2 underline-offset-2 transition duration-100   text-white decoration-rose-400 hover:text-rose-400 hover:decoration-rose-400/30 focus:text-rose-400 focus:ring-rose-400/40"
            href="https://en.lecolededesign.com/"
            rel="noreferrer"
            target="_blank"
          >
            L’École&nbsp;de&nbsp;Design
          </a>{" "}
         Lorem Ipsum is that it has a more-or-less normal distributio&nbsp;design—exploring
          immersive&nbsp; Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-twitter-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-twitter-500/10 transition selection:bg-white/30 hover:bg-twitter-500/80 hover:shadow-twitter-500/5 focus:ring-twitter-500/40 dark:bg-twitter-400 dark:text-zinc-900 dark:shadow-twitter-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-twitter-400/80 dark:hover:shadow-twitter-400/5 dark:focus:ring-twitter-400/40 md:w-auto md:px-3 md:pl-2.5"
          href="https://twitter.com/marcbouchenoire"
          rel="me noreferrer"
          target="_blank"
        >
         <Image src='/tiktok-logo-24.png' 
            alt='Mastodon'
            className=''
             priority
            width={24} 
            height={24}
          />
          <span className="hidden md:inline">Tiktok</span>
        </a>
        <a
          className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-mastodon-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-mastodon-500/10 transition selection:bg-white/30 hover:bg-mastodon-500/80 hover:shadow-mastodon-500/5 focus:ring-mastodon-500/40 dark:bg-mastodon-400 dark:text-zinc-900 dark:shadow-mastodon-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-mastodon-400/80 dark:hover:shadow-mastodon-400/5 dark:focus:ring-mastodon-400/40 md:w-auto md:px-3 md:pl-2.5"
          href="https://mastodon.social/@marcbouchenoire"
          rel="me noreferrer"
          target="_blank"
        >
          <Image src='/music-regular-24.png' 
            alt='Mastodon'
            className=''
             priority
            width={24} 
            height={24}
          />
          <span className="hidden md:inline">BeatStars</span>
        </a>
        <a
          className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-purple-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-purple-500/10 transition selection:bg-white/30 hover:bg-purple-500/80 hover:shadow-purple-500/5 focus:ring-purple-500/40 dark:bg-purple-400 dark:text-zinc-900 dark:shadow-purple-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-purple-400/80 dark:hover:shadow-purple-400/5 dark:focus:ring-purple-400/40 md:w-auto md:px-3 md:pl-2.5"
          href="https://github.com/marcbouchenoire"
          rel="me noreferrer"
          target="_blank"
        >
       <Image src='/instagram-logo-24.png' 
            alt='Mastodon'
            className=''
             priority
            width={24} 
            height={24}
          />
          <span className="hidden md:inline">Instagram</span>
        </a>
        <a
          className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-dribbble-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-dribbble-500/10 transition selection:bg-white/30 hover:bg-dribbble-500/80 hover:shadow-dribbble-500/5 focus:ring-dribbble-500/40 dark:bg-dribbble-400 dark:text-zinc-900 dark:shadow-dribbble-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-dribbble-400/80 dark:hover:shadow-dribbble-400/5 dark:focus:ring-dribbble-400/40 md:w-auto md:px-3 md:pl-2.5"
          href="https://dribbble.com/marcbouchenoire"
          rel="me noreferrer"
          target="_blank"
        >
          <Image src='/youtube-logo-24.png' 
            alt='Mastodon'
            className=''
             priority
            width={24} 
            height={24}
          />
          <span className="hidden md:inline">Youtube</span>
        </a>
        <a
          className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-lime-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-lime-500/10 transition selection:bg-white/30 hover:bg-lime-500/80 hover:shadow-lime-500/5 focus:ring-lime-500/40 dark:bg-lime-400 dark:text-zinc-900 dark:shadow-lime-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-lime-400/80 dark:hover:shadow-lime-400/5 dark:focus:ring-lime-400/40 md:w-auto md:px-3 md:pl-2.5"
          href="mailto:jamaadkinard@gmail.com"
        >
          <svg
            height="24"
            role="presentation"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <span className="hidden md:inline">Email</span>
        </a>
      </div>
    </section>
    )
}