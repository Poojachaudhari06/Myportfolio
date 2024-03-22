import React from 'react';
import Profile from '../../assets/home.png';
import { Link } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import "./home.css";

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img'/>
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Pooja Chaudhari.</span> Web Designer
          </h1>

          <p className='home__description'>Ability to create innovative, creative, & interactive web designs to boost customer engagement. Sound knowledge in Angular, HTML, CSS, BOOTSTRAP ,JAVASCRIPT AND BASIC React.js, & other UI frameworks. Build reusable code for future use while optimising web performance.
              </p>
              <Link to= '/about' className='button'>
                More About Me {' '} <span className='button__icon'>
                  <FaArrowRight/>
                  </span>
              </Link>

        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
}

export default Home;
