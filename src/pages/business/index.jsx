
import { Container } from '@/components/container';
import { Header } from '@/components/header';
import { GoRadioTower } from 'react-icons/go';
import {TbRoad} from 'react-icons/tb';
import {GiMusicalKeyboard} from 'react-icons/gi';
import ShoppingCartSlideOver from '@/components/shoppingCart';
import React, { useState } from 'react';

const features = [
  {
    name: 'MaadSounds Streaming Service:',
    description:
      'Welcome to MaadSounds! My name is Jamaad Kinard and I am the owner of MaadSounds. I am a music producer and audio engineer I have been producing music for over 4 years. I have always been passionate about music and started producing my own tracks at a young age. Over time, my skills and knowledge have grown, and I have worked hard to develop a unique style that is all my own.  I offer mixing and mastering services for rappers and will give tutorial services for beginner producers as well. So, if you are looking for a talented and experienced music producer/sound designer to help bring your project to the next level, look no further. Please feel free to browse my website to learn more about me and my work, and dont hesitate to get in contact with me if you have any questions or would like to discuss a project. ',
    icon: GoRadioTower
  },
  {
    name: 'Producing Journey:',
    description: 'In my career, I have had the privilege of working with some amazing artists, helping them to bring their visions to life and create music that truly resonates with their audience. I believe that music has the power to connect people and evoke powerful emotions, and I am constantly striving to create tracks that do just that.',
    icon: TbRoad
  },
  {
    name: 'Beats Production:',
    description:
      'My production style is based on ambient/fantasy like sounds that are reminiscent of Japanese role-playing games. I’m always looking for new and innovative ways to incorporate different sounds and styles into my work, and I am constantly experimenting and pushing the boundaries of music itself. While taking the time to build my sound, I have gotten into sound design as well.',
    icon: GiMusicalKeyboard
  }
];

export default function Business() {
  const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false);
  return (
    <div className=" relative isolate overflow-hidden bg-transparent py-24 sm:py-32">
      <header>
        <Container>
          <Header setCartSliderIsOpen={setCartSliderIsOpen} />
          <ShoppingCartSlideOver
            open={cartSliderIsOpen}
            setCartSliderIsOpen={setCartSliderIsOpen}
          />
        </Container>
      </header>
      <div className="mx-auto pt-navigation-height  max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div id='me' className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Music is the universal language that connects us across the globe.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className=" pl-9">
                    <dt className="inline font-semibold text-gray-900 text-sm">
                      <feature.icon
                        className=" left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-sm">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://i.imgur.com/lBkN0Wz.jpg"
            alt="Product screenshot"
            className="mt-10 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
