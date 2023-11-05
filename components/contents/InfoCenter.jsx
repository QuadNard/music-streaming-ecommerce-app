import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

const InfoCenter = (props) => {
  /**
 * An iPhone-like device.
 *
 * @param props - A set of `div` props.
 * @param [props.children] - The browser's content.
 * @param [props.className] - A list of one or more classes.
 */
function Phone({ children, className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        "dark:highlight-invert relative aspect-[425/862] rounded-[15.294%/7.541%]  shadow-floaty backdrop-blur-lg backdrop-saturate-200 before:absolute before:inset-0 before:rounded-[inherit] before:shadow-phone supports-backdrop:bg-white/80 bg-zinc-800 dark:before:shadow-phone-invert dark:supports-backdrop:bg-zinc-800/80"
      )}
      {...props}
    >
      <div className="absolute top-[2.7%] right-[6.35%] bottom-[3.1%] left-[5.4%] drop-shadow-phone">
        <svg className="absolute" height="0" role="presentation" width="0">
          <clipPath clipPathUnits="objectBoundingBox" id="phone">
            <path d="M0.779,0.011 V0.011 c0,0.011,-0.019,0.026,-0.062,0.026 h-0.432 C0.241,0.037,0.222,0.022,0.222,0.011 v0 c0,-0.005,0,-0.011,-0.02,-0.011 H0.116 C0.043,0,0,0.02,0,0.053 v0.893 C0,0.98,0.043,1,0.116,1 h0.769 C0.957,1,1,0.98,1,0.947 V0.053 C1,0.02,0.957,0,0.884,0 h-0.085 C0.779,0,0.779,0.005,0.779,0.011" />
          </clipPath>
        </svg>
        <div className="absolute inset-0 [clip-path:url(#phone)]">
          {children}
        </div>
      </div>
    </div>
  )
}





  return (
    <div className='mt-16 md:mt-20 lg:mt-24'>
      <div className='content lg:max-w-screen-md-12'>
          <div className="relative mt-5 flex flex-col rounded-lg bg-orange-500 shadow-xl shadow-orange-500/10 before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-gradient-to-tl before:from-amber-400/60 before:to-amber-400/0 dark:bg-orange-300 dark:shadow-orange-400/10 dark:before:from-amber-300/60 dark:before:to-amber-300/0 sm:mt-8 sm:flex-row lg:mt-10">
          <div className="z-10 flex-1 p-8 selection:bg-white/30 dark:selection:bg-orange-900/30 sm:basis-1/2 sm:p-12 sm:pr-10">
            <h3 className="mb-3 text-lg font-semibold leading-none text-white dark:text-orange-900">
              Sketch Elements
            </h3>
            <p className="leading-relaxed text-orange-100 dark:text-orange-900/80">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. &nbsp;cases.
            </p>
          </div>
          <div className="perspective relative z-20 flex flex-1 items-center justify-center sm:-mr-12 sm:basis-1/3">
            <div className="transform-elements mx-12 mt-0 mb-24 grid aspect-square w-full max-w-sm grid-cols-[1.2fr_1fr] gap-8 sm:absolute sm:m-0 sm:max-w-none lg:-top-20 lg:grid-cols-[1fr_1.2fr]">
              <Phone className="-mb-12 self-end">
                <Image
                  alt="A food app interface"
                  className="elements absolute h-full w-full object-cover"
                  height="346"
                  src='/About.jpeg'
                  width="160"
                />
              </Phone>
              <Phone>
                <Image
                  alt="A music app interface"
                  className="elements elements-offset absolute h-full w-full object-cover"
                  height="346"
                  src='/elements-music.png'
                  width="160"
                />
              </Phone>
            </div>
          </div>
          </div>
      </div>  
    </div>
  )
}

export default InfoCenter
