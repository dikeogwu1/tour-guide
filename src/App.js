import React, { useEffect, useState } from "react";
import TourGuide from "./TourGuide";
import Joyride from "react-joyride";

function App() {
  const [tourPosition, setTourPosition] = useState(1);
  const [tourSteps, setTourSteps] = useState([
    {
      target: "#step-1",
      content: "Sign in and start touring the globe without stress.",
    },
    {
      target: "#step-2",
      content: "Sign in and start touring the globe without stress.",
    },
    {
      target: "#step-3",
      content: "Search for any place you want to visit.",
    },
    {
      target: "#step-4",
      content:
        "See places within Asia you may love to go on your next vacation.",
    },
    {
      target: "#step-5",
      content: "Learn more about this beautiful neighborhood.",
    },
    {
      target: "#step-6",
      content: "See more places like this one",
    },
    {
      target: "#step-7",
      content:
        "Follow us on all our social media accounts, best travel updates.",
    },
    // Add more tour steps as needed
  ]);

  const [runTour, setRunTour] = useState(false);

  const handleTourCallback = (data) => {
    // You can handle tour events here
    console.log(data);
    if (data.action.index === "ready" || data.action.index === "complete") {
      // Update the current step when a step is completed
      setTourPosition();
    }
    if (data.action === "reset") {
      setRunTour(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setRunTour(true);
    }, 2000);
  }, []);

  return (
    <>
      <button onClick={() => setRunTour(true)} className='tourBtn'>
        Start Tour
      </button>
      {/* Render the Joyride component for the tour */}
      <Joyride
        steps={tourSteps}
        run={runTour}
        continuous={true}
        callback={handleTourCallback}
      />
      {/* JOYRIDE */}
      <header id='home'>
        <TourGuide
          runTour={runTour}
          tourPosition={tourPosition}
          tourSteps={tourSteps}
        />
        <nav className='nav'>
          <div className='nav-wrapper'>
            <div className='nav-header'>
              <div>
                <h2 className='logo'>odigo</h2>
              </div>
              <button className='btn btn-menu'>
                <i className='fa-solid fa-bars'></i>
              </button>
            </div>
            {/* Links  */}
            <ul className='ul-wrapper'>
              <li>
                <a href='#'>Articles</a>
              </li>
              <li>
                <a href='#'>Locations</a>
              </li>
              <li>
                <a href='#'>Videos</a>
              </li>
              <li>
                <a href='#' id='step-2'>
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* tour header descriptions */}
        <div className='header-desc-wrapper'>
          <h2 className='header-title'>Discover Amazing places in Japan</h2>
          <p className='header-desc'>
            Jump off balcony, onto stranger's head. Chase ball of string hide
            when guests come over. Being gorgeous with belly side up i could pee
            on this if i had the energy but under the bed, for attack the child,
            open the door,
          </p>
          {/* header form  */}
          <form>
            <div>
              <label htmlFor='like-to-do'>
                <span className='cirle'></span>
                <span className='f-label-text'>What would you like to do?</span>
              </label>
              <input type='text' autoComplete='off' id='like-to-do' />
            </div>
            <div>
              <label htmlFor='like-to-go'>
                <span className='cirle'></span>
                <span className='f-label-text'>
                  Where would you like to go?
                </span>
              </label>
              <input type='text' autoComplete='off' id='like-to-go' />
            </div>
            <button type='submit' className='submit-form' id='step-3'>
              SEARCH
            </button>
          </form>
        </div>
      </header>
      {/* header overley  */}
      <section className='overley-wrapper'>
        <div className='overley'>
          <h2>Benefits of Odigo</h2>

          {/* benefits of odigo  */}
          <div className='benefits-wraper'>
            <article className='benefit'>
              <div className='benefit-svg'>
                <img src='/svg/plateIcon.svg' alt='plate' />
              </div>
              <h4>Welcome to Odigo!</h4>
              <p>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over.
              </p>
              <li className='learn-more'>
                <a href='#'>LEARN MORE</a>
                <i className='fa-solid fa-right-long'></i>
              </li>
            </article>
            <article className='benefit'>
              <div className='benefit-svg'>
                <img src='/svg/personIcon.svg' alt='plate' />
              </div>
              <h4>Your Personal Japan Guide</h4>
              <p>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over.
              </p>
              <li className='learn-more'>
                <a href='#'>LEARN MORE</a>
                <i className='fa-solid fa-right-long'></i>
              </li>
            </article>
            <article className='benefit'>
              <div className='benefit-svg'>
                <img src='/svg/houseIcon.svg' alt='plate' />
              </div>
              <h4>Promoting Local Businesses</h4>
              <p>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over.
              </p>
              <li className='learn-more'>
                <a href='#'>LEARN MORE</a>
                <i className='fa-solid fa-right-long'></i>
              </li>
            </article>
          </div>
        </div>
      </section>

      {/* |||||| YOUR NEXT TRIP SECTION ||||||  */}
      <section className='next-trip-container'>
        <div className='nt-title-wrapper'>
          <h3>Get inspired for your next trip</h3>
          <li className='learn-more'>
            <a href='#' id='step-4'>
              VIEW ALL
            </a>
            <i className='fa-solid fa-right-long'></i>
          </li>
        </div>
        <div className='next-trip-wrapper img-large'>
          {/* trip  */}
          <div className='next-trip'>
            <div className='nt-img-box'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1645106673/tours%20image/mountFuji_az6kkx.png'
                alt='city'
              />
              <h3 className='trip-text'>Mount Fuji</h3>
            </div>
          </div>
          <div className='next-trip'>
            <div className='nt-img-box'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1645106661/tours%20image/Kyoto_edyrel.png'
                alt='city'
              />
              <h3 className='trip-text'>Kyoto</h3>
            </div>
          </div>
        </div>
        <div className='next-trip-wrapper img-small'>
          {/* trip  */}
          <div className='next-trip'>
            <div className='nt-img-box nt-img-box-small'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1645106734/tours%20image/tokyo_jjlnsx.jpg'
                alt='city'
              />
              <h3 className='trip-text'>Tokyo</h3>
            </div>
          </div>
          <div className='next-trip'>
            <div className='nt-img-box nt-img-box-small'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1645106686/tours%20image/Niigata_v3azgw.jpg'
                alt='city'
              />
              <h3 className='trip-text'>Niigata</h3>
            </div>
          </div>
          <div className='next-trip'>
            <div className='nt-img-box nt-img-box-small'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1645106722/tours%20image/Sapporo_ub8iuj.jpg'
                alt='city'
              />
              <h3 className='trip-text'>Sapporo</h3>
            </div>
          </div>
        </div>
      </section>

      {/* |||||| MORE PLACE FOR YOUR NEXT TRIP SECTION ||||||  */}
      <section className='more-place-container'>
        <div className='more-place-wrapper'>
          <div className='more-place'>
            <h3 className='mp-topic-sm'>Prefecture in Focus: Tottori</h3>
            <div className='mp-img-wrapper'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1645106901/tours%20image/tourDesc1_lokdbr.png'
                alt='city'
              />
            </div>
            <div className='more-place-text'>
              <h3 className='mp-topic-lg'>Prefecture in Focus: Tottori</h3>
              <p className='mp-desc'>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this if i had the energy but under the bed, for
                attack the child, open the door,
              </p>
              <li className='learn-more'>
                <a href='#'>VIEW PREFECTURE</a>
                <i className='fa-solid fa-right-long'></i>
              </li>
            </div>
          </div>
          <div className='more-place'>
            <h3 className='mp-topic-sm'>
              Featured Neighborhood:
              <br />
              Kyoto’s Arashiyama
            </h3>
            <div className='mp-img-wrapper mp-img-wrapper-2'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1645106916/tours%20image/tourDesc2_pwjvjh.png'
                alt='city'
              />
            </div>
            <div className='more-place-text more-place-text'>
              <h3 className='mp-topic-lg'>
                Featured Neighborhood:
                <br />
                Kyoto’s Arashiyama
              </h3>
              <p className='mp-desc'>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this if i had the energy but under the bed, for
                attack the child, open the door,
              </p>
              <li className='learn-more' id='step-5'>
                <a href='#'>VIEW NEIGHBORHOOD</a>
                <i className='fa-solid fa-right-long'></i>
              </li>
            </div>
          </div>
        </div>
      </section>

      {/* |||||| TODAY TOP PLACES TO VISIT SECTION ||||||  */}
      <section className='today-top-place-container'>
        <h3>Today top places to visit</h3>
        <div className='today-top-place-wrapper'>
          <article className='today-top-place'>
            <div className='ttp-img-box'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1645106741/tours%20image/topPlace1_d3flyc.png'
                alt='city'
              />
              <div className='ttp-img-footer'>
                <h4>NAGOYA</h4>
                <div className='ttp-footer-icon-box'>
                  <span>221</span>
                  <i className='fas fa-heart'></i>
                  <span>50</span>
                  <i className='fas fa-comment-alt'></i>
                </div>
              </div>
            </div>
            <div className='ttp-text-box'>
              <p>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this 500.
              </p>
            </div>
            <button className='btn see-more' id='see'>
              SEE MORE
            </button>
          </article>
          <article className='today-top-place'>
            <div className='ttp-img-box'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1645106756/tours%20image/topPlace2_mi5ndh.png'
                alt='city'
              />
              <div className='ttp-img-footer'>
                <h4>NIIGATA</h4>
                <div className='ttp-footer-icon-box'>
                  <span>221</span>
                  <i className='fas fa-heart'></i>
                  <span>50</span>
                  <i className='fas fa-comment-alt'></i>
                </div>
              </div>
            </div>
            <div className='ttp-text-box'>
              <p>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this.
              </p>
            </div>
            <button className='btn see-more'>SEE MORE</button>
          </article>
          <article className='today-top-place'>
            <div className='ttp-img-box'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1645106765/tours%20image/topPlace3_pmtnt2.png'
                alt='city'
              />
              <div className='ttp-img-footer'>
                <h4>OSAKA</h4>
                <div className='ttp-footer-icon-box'>
                  <span>221</span>
                  <i className='fas fa-heart'></i>
                  <span>50</span>
                  <i className='fas fa-comment-alt'></i>
                </div>
              </div>
            </div>
            <div className='ttp-text-box'>
              <p>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this.
              </p>
            </div>
            <button className='btn see-more'>SEE MORE</button>
          </article>
          <article className='today-top-place'>
            <div className='ttp-img-box'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1645106844/tours%20image/topPlace4_hioxei.png'
                alt='city'
              />
              <div className='ttp-img-footer'>
                <h4>SAITAMA</h4>
                <div className='ttp-footer-icon-box'>
                  <span>221</span>
                  <i className='fas fa-heart'></i>
                  <span>50</span>
                  <i className='fas fa-comment-alt'></i>
                </div>
              </div>
            </div>
            <div className='ttp-text-box'>
              <p>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this.
              </p>
            </div>
            <button className='btn see-more'>SEE MORE</button>
          </article>
          <article className='today-top-place'>
            <div className='ttp-img-box'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1645106878/tours%20image/topPlace5_flweub.png'
                alt='city'
              />
              <div className='ttp-img-footer'>
                <h4>UENO</h4>
                <div className='ttp-footer-icon-box'>
                  <span>221</span>
                  <i className='fas fa-heart'></i>
                  <span>50</span>
                  <i className='fas fa-comment-alt'></i>
                </div>
              </div>
            </div>
            <div className='ttp-text-box'>
              <p>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this.
              </p>
            </div>
            <button className='btn see-more'>SEE MORE</button>
          </article>
          <article className='today-top-place'>
            <div className='ttp-img-box'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1645106892/tours%20image/topPlace6_x0xfx8.jpg'
                alt='city'
              />
              <div className='ttp-img-footer'>
                <h4>SHIBUYA</h4>
                <div className='ttp-footer-icon-box'>
                  <span>221</span>
                  <i className='fas fa-heart'></i>
                  <span>50</span>
                  <i className='fas fa-comment-alt'></i>
                </div>
              </div>
            </div>
            <div className='ttp-text-box'>
              <p>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this.
              </p>
            </div>
            <button className='btn see-more' id='step-6'>
              SEE MORE
            </button>
          </article>
        </div>
      </section>
      {/* |||||| TOUR VIDEO ||||||  */}
      <section className='tour-video-container'>
        <img
          src='https://res.cloudinary.com/dikeogwu1/image/upload/v1645106926/tours%20image/tourVideo_hx8kek.png'
          alt='city'
        />
        <div className='play-btn-wrapper'>
          <button className='play-btn'>
            <i className='fas fa-play'></i>
          </button>
        </div>
      </section>

      {/* |||||| FOOTER ||||||  */}
      <section className='footer'>
        <div className='footer-wrapper'>
          <h2 className='footer-logo'>odigo</h2>
          <div className='footer-links-wrapper'>
            <div className='footer-link'>
              <ul>
                <li>Company</li>
                <li>About</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
              </ul>
              <ul>
                <li>Locations</li>
                <li>Tokyo</li>
                <li>Kyoto</li>
                <li>Osaka</li>
                <li>Hokkaido</li>
              </ul>
            </div>
            <ul className='social-media-links'>
              <li id='step-7'>Social Media</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
