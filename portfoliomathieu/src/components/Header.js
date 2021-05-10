import React from 'react';
import Typical from 'react-typical';
import Tilt from 'react-tilt';
//import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { content } from '../content';
import useStartAnimation from '../hook/useStartAnimation';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = 'translate-y-10 opacity-0';
  const animated = useStartAnimation();
  return (
    <div
      style={{
        background: '#091C29',
      }}
      className="min-h-screen flex items-center justify-center"
      id="header"
    >
      <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between">
        <div className="w-full md:w-2/5 ">
            <Tilt>
              <img data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500" src={content.header.img} alt="img" className="rounded-full" />
            </Tilt>
        </div>

        <div data-aos="fade-left" data-aos-delay="50" className="font-dosis w-full md:w-3/5 text-center md:text-left ">
          <h2
                
            className={`text-3xl md:text-4xl lg:text-6xl text-white font-bold transform ${
              animated ? 'translate-y-0' : styleTranslate
            }  ${transition(2000)} `}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`text-2xl md:text-4xl text-gray-400 transform ${
              animated ? 'translate-y-0' : styleTranslate
            } ${transition(3000)} `}
          >
            {content.header.text[2]}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
              wrapper="p"
            />
          </h1>

          <ScrollLink to="mywork" smooth={true}>
            <button
              className={` animate-bounce bg-indigo-500 px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-indigo-300 transform  ${
                animated ? 'translate-y-0' : styleTranslate
              } ${transition(3500)}`}
            >
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
