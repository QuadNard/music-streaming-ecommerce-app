import { AiFillUnlock, AiOutlineCloudServer} from 'react-icons/ai'
import { Container } from '@/components/container';
import { Header } from '@/components/header';
import {GoRadioTower} from 'react-icons/go'
import Logo from '@/assets/About.jpeg'
import ShoppingCartSlideOver from '@/components/shoppingCart';
import React, {useState} from 'react';

const features = [
  {
    name: 'MaadSounds Streaming Service',
    description:
      'you can listen to tons of beats, and enjoy exclusive beats that are not available on any other streaming service.',
    icon: GoRadioTower
  },
  {
    name: 'Exclusive Services',
    description: '',
    icon: AiFillUnlock,
  },
  {
    name: 'Music Player',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: AiOutlineCloudServer,
  },
]

export default function Business() {
      const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false)
  return (
    <div className=" relative isolate overflow-hidden bg-transparent py-24 sm:py-32">
            <header>
              <Container>
                <Header setCartSliderIsOpen={setCartSliderIsOpen}  />
                 <ShoppingCartSlideOver
                        open={cartSliderIsOpen}
                   setCartSliderIsOpen={setCartSliderIsOpen}
                     />
              </Container>
        </header>
      <div className="mx-auto pt-navigation-height  max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Music is the universal language that connects us across the globe.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className=" pl-9">
                    <dt className="inline font-semibold text-gray-900 text-sm">
                      <feature.icon className=" left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-sm">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={Logo}
            alt="Product screenshot"
            className="mt-10 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  )
}