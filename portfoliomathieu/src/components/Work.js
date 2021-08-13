import React from 'react';
import Tilt from 'react-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { content } from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Work() {
  const animated = useWindowPosition('header', 0.6);
  return (
    <div id="mywork" className="min-h-screen bg-gray-400 flex space-x-20 justify-center items-center">
      <div>
    <Tilt>
        <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col justify-between w-96 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer rounded-2xl" style={{ backgroundImage: `url('https://placeimg.com/480/480/any')`}}>
          <div className="flex justify-between items-center ml-4 pr-8">
            <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Plus d'informations</div>
            <div className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">New</div>
          </div>
          <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
            <h3 className="text-xl font-bold pb-2">HardShop_Next</h3>
            <p className="truncate text-gray-500 text-sm">Retrouvez mon application HardShop en public sur GitHub développé cette fois-ci avec NextJS le fameux framework orienté SEO.</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-xs">Cette année, en cours ...</span>
            </div>
          </div>
        </div>
    </Tilt>
    </div>
      <div>
      <Tilt>
        <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col justify-between w-96 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer rounded-2xl" style={{ backgroundImage: `url('https://placeimg.com/480/480/any')`}}>
          <div className="flex justify-between items-center ml-4 pr-8">
            <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Plus d'informations</div>
            <div className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">New</div>
          </div>
          <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
            <h3 className="text-xl font-bold pb-2">APIHardShop</h3>
            <p className="truncate text-gray-500 text-sm">Retrouvez sur mon GitHub l'API de mon application HardShop qui tourne autour des composants informatique.</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-xs">Cette année</span>
            </div>
          </div>
        </div>
    </Tilt>
    </div>
    <div>
    <Tilt>
        <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col justify-between w-96 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer rounded-2xl" style={{ backgroundImage: `url('https://placeimg.com/480/480/any')`}}>
          <div className="flex justify-between items-center ml-4 pr-8">
            <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Plus d'informations</div>
            <div className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">New</div>
          </div>
          <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
            <h3 className="text-xl font-bold pb-2">Application "JeMeSouris"</h3>
            <p className="truncate text-gray-500 text-sm">Une application entièrement dédiée à la psychologie, à l'écoute et la recentration sur soi.</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-xs">Cette année, en cours ...</span>
            </div>
          </div>
        </div>
    </Tilt>
    </div>
  </div>
  );
}
