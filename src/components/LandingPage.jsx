import React from 'react';
import Header from './Header';
import Modal from './Modal';
import ShoppingCartSlideOver from './ShoppingCart';
import { useState } from 'react';

const LandingPage = () => {
    const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false)


    return (
        <div className="sticky top-0 mx-auto flex-col h-screen max-w-[1350px] items-center duration-700 font-serif">
         {/* Video */}
                <div className="bg-overlay">
                    <Modal />
                      <div className="invisible">Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</div>
                </div>
              
                 <div className="navbar">
                    <Header setCartSliderIsOpen={setCartSliderIsOpen} />
                 <ShoppingCartSlideOver
                        open={cartSliderIsOpen}
                   setCartSliderIsOpen={setCartSliderIsOpen}
                     />
                 </div>
        </div>
    )
}

export default LandingPage;