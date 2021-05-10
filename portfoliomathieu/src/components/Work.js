import React from 'react';
import Tilt from 'react-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { content } from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Work() {
  const animated = useWindowPosition('header', 0.6);
  return (
    // <div
    //   className="min-h-screen flex justify-center items-center flex-col"
    //   style={{
    //     background: '#FEFEFE',
    //   }}
    //   id="mywork"
    // >
    //   <h1 className="text-5xl font-dosis font-bold">{content.work.title}</h1>
    //   <p className="text-gray-600 text-2xl font-dosis mb-10">Ce que je fais</p>
    //   <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
    //     <LazyLoadImage
    //       effect="blur"
    //       placeholderSrc={content.work.imgPlaceholder}
    //       src={content.work.img}
    //       alt="phone prototype"
    //       className="m-10 transtion rounded-full duration-2000 ease-in-out z-10  md:w-3/5 w-4/5"
    //     />
    //     <div
    //       className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
    //       style={{
    //         border: '1px solid #e5ecf9',
    //         transform: animated
    //           ? 'translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)'
    //           : '',
    //         boxShadow:
    //           '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
    //       }}
    //     >
    //       <ProjectDetail />
    //     </div>
    //     <div className="flex justify-center items-center md:hidden">
    //       <ProjectDetail />
    //     </div>
    //   </div>
    // </div>
    <div id="mywork" className="min-h-screen bg-gray-400 flex justify-center items-center">
      <Tilt>
        <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col justify-between w-96 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer rounded-2xl" style={{ backgroundImage: `url('https://placeimg.com/480/480/any')`}}>
          <div className="flex justify-between items-center ml-4 pr-8">
            <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Some information</div>
            <div className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">%</div>
          </div>
          <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
            <h3 className="text-xl font-bold pb-2">Happy Nowruz 1400</h3>
            <p className="truncate text-gray-500 text-sm">Nowruz is the Persian New Year, which begins on the Spring equinox, marking the first day of Farvardin, the first month of the Iranian solar calendar.</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-xs">Have a nice year...</span>
            </div>
          </div>
        </div>
    </Tilt>
  </div>
  );
}

const ProjectDetail = () => {
  const animated = useWindowPosition('header', 0.6);
  return (
    <div>
      <h1
        className={` ${
          animated ? '' : 'translate-y-10 opacity-0'
        }   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold`}
      >
        {content.work.projectName}
      </h1>
      <p
        className={`${
          animated ? '' : 'translate-y-10 opacity-0'
        }  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis`}
      >
        {content.work.desc}
      </p>
      <button
        className={`${
          animated ? '' : 'translate-y-10 opacity-0'
        } transform transition duration-2000  px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl`}
      >
        <img
          src="https://timo.engineer/assets/icons/rocket.svg"
          alt="rocket"
          className="mr-5"
        />
        <a className="text-lg" href="https://github.com/FrekiManagarm/HardShop3.0" target='_blank' rel="noreferrer">Le lien vers le projet</a>
      </button>
    </div>
  );
};
