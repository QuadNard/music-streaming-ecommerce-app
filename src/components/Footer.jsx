import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 pt-10 pb-8">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
          <h2 className="text-lg font-bold mb-4 text-white">About Us</h2>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod enim eu felis egestas lobortis. Integer lobortis accumsan arcu non consequat.</p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
          <h2 className="text-lg font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-gray-400">123 Main Street</p>
          <p className="text-gray-400">New York, NY 10001</p>
          <p className="text-gray-400">(123) 456-7890</p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
          <h2 className="text-lg font-bold mb-4 text-white">Follow Us</h2>
          <div className="flex">
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-pinterest fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-400">&copy; 2023 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;