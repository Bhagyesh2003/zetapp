"use client"
import React from 'react';
import "../styles/app.css";
import { useEffect, useRef, useState } from 'react';

const page = () => {
  const divRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = divRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
     <div className='main slide-in-from-bottom'>
        <div className='left'>
            <div className='text-div'>
            <h1>Become a Financial Advisor and <span>Earn Rs. 1 Lakh/Month</span></h1>
            <br></br>
            <p>No investment required</p>
            </div>
            <div className='image'>
            <img src='https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg' />
            </div>
        </div>
        <div className='right'>
            <div className='image2'>
                <img src='	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=1920&q=75'/>
            </div>
        </div>
    </div>
    <br></br>
    <div className='brands'>
      <div className='brand-header'>
      <p className='top'>Top Brands on ZET</p>
      <p className='bottom'>We are trusted by best brand in the country</p>
      </div>
      <div className='swipe-1'>
        <div className='transform-div'>
          <div className='swipe-slide'>
            <div className='img1'>
              <img src='Amex.png' />
            </div>
          </div>
          <div className='swipe-slide'>
            <div className='img1'>
              <img src='Aufin.png' />
            </div>
          </div>
          <div className='swipe-slide'>
            <div className='img1'>
              <img src='Axis.png' />
            </div>
          </div>
          <div className='swipe-slide'>
            <div className='img1'>
              <img src='Bajaj.png' />
            </div>
          </div>
          <div className='swipe-slide'>
            <div className='img1'>
              <img src='BOB.png' />
            </div>
          </div>
          <div className='swipe-slide'>
            <div className='img1'>
              <img src='Icici.png' />
            </div>
          </div>
          <div className='swipe-slide'>
            <div className='img1'>
              <img src='Idfc.png' />
            </div>
          </div>
          <div className='swipe-slide'>
            <div className='img1'>
              <img src='Indusind.png' />
            </div>
          </div>
          <div className='swipe-slide'>
            <div className='img1'>
              <img src='StandardChartered.png' />
            </div>
          </div>
          <div className='swipe-slide'>
            <div className='img1'>
              <img src='YesBank.png' />
            </div>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <div ref={divRef} className={`products ${animate ? 'animate' : ''}`}>
      <div className='product-heading'>
        <p className='top'>Products on ZET</p>
        <p className='bottom'>We are trusted by best brand in the country</p>
      </div>
      <div className='card-transform-div'>
        <div className='card1'>
            <div className='card-image'>
              <img src='CC.png' />
            </div>
            <div className='content'>
              <p className='product-header'>CREDIT CARDS</p>
              <p className='product-desc'>100% Contactless Application Process with Instant Approval From Top Banks.</p>
            </div>
        </div>

        <div className='card2'>
            <div className='card-image'>
              <img src='Loan.png' />
            </div>
            <div className='content'>
              <p className='product-header'>LOANS</p>
              <p className='product-desc'>100% online process. Instant offers. Affordable Rate of Interest on loans.</p>
            </div>
        </div>
      </div>

      <div className='card-transform-div'>
        <div className='card3'>
            <div className='card-image'>
              <img src='BNPL.png' />
            </div>
            <div className='content'>
              <p className='product-header'>BUY NOW PAY LATER</p>
              <p className='product-desc'>Short-term financing that allows consumers to make purchases and pay for them over time.</p>
            </div>
        </div>

        <div className='card4'>
            <div className='card-image'>
              <img src='AccountSave.png' />
            </div>
            <div className='content'>
              <p className='product-header'>SAVING ACCOUNTS</p>
              <p className='product-desc'>ZET offers range of savings account that suits your personal needs for the banking.</p>
            </div>
        </div>
      </div>
      <img className='first' src='https://zetapp.in/_next/static/media/decImg.ead9275f.svg' />
      <img className='second' src='https://zetapp.in/_next/static/media/decImg2.3cc2964a.svg' />
    </div>
    <br></br>
    <br></br>

    <div className='effects'>
      <div className='peoples'>
        <div className='photo'>
          <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeeps1.2a271552.png&w=1920&q=75' />
        </div>
        <div className='content2'>
          <p className='content-heading'>The ZET Effect</p>
          <div className='swiper-horizontal'>
            <div className='swiper-wrapper'>
                <p>More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans </p>
            </div>
            <div className='swiper-wrapper'>
                <p>14 Lakh+ Financial Advisor across India are using ZET to increase their income.</p>
            </div>
            <div className='swiper-wrapper'>
                <p>We helped customers in more than 50 cities to get their first financial product</p>
            </div>
            <div className='swiper-pagination'>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className='benefits-main'>
      <div className='benefits'>
        <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbgImg.0b567eb7.png&w=640&q=75' />
        <div className='mainimage'>
          <p className='why'>Why <span>Choose Us</span></p>
          <p className='second3'>Why we are loved by our customers</p>
          <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhyUsHero.76b303ee.png&w=640&q=75' />
        </div>
      </div>

      <div className={`benefits-card ${animate ? 'animate' : ''}`}>
        <div className='add1'>
          <div className='advantages'>
            <div className='advantage' >
              <img src='https://zetapp.in/_next/static/media/zero_investment.d5743aab.svg' />
              <p className='advantage-header'>Zero Investment</p>
              <p className='advantage-desc'>Build your business without any investment</p>
            </div>
          </div>
          <div className='advantages'>
            <div className='advantage'>
              <img src='https://zetapp.in/_next/static/media/quick_payout.1d689e09.svg' />
              <p className='advantage-header'>Quick Payout</p>
              <p className='advantage-desc'>Direct Payout in your bank account in short time</p>
            </div>
          </div>
          </div>
          <div className='add2'>
          <div className='advantages'>
            <div className='advantage'>
              <img src='https://zetapp.in/_next/static/media/Fin_products.0e8a0582.svg' />
              <p className='advantage-header'>Limitless Earnings</p>
              <p className='advantage-desc'>Direct Payout in your bank account in short time</p>
            </div>
          </div>
          <div className='advantages'>
            <div className='advantage'>
              <img src='https://zetapp.in/_next/static/media/Icon_support.c8382fc1.svg' />
              <p className='advantage-header'>Training & Upskilling</p>
              <p className='advantage-desc'>Get trained by finance and sales experts</p>
            </div>
          </div>
          </div>
          <div className='add3'>
          <div className='advantages'>
            <div className='advantage'>
              <img src='https://zetapp.in/_next/static/media/customerSupport.5780cd23.svg' />
              <p className='advantage-header'>Customer Support</p>
              <p className='advantage-desc'>Access tools and content to build relationship</p>
            </div>
          </div>
          <div className='advantages'>
            <div className='advantage'>
              <img src='https://zetapp.in/_next/static/media/financialProduct.1b3d6eec.svg' />
              <p className='advantage-header'>Financial Products</p>
              <p className='advantage-desc'>Trustworthy & high-rated products & categories</p>
            </div>
          </div>
          </div>
        </div>
      </div>

      <br></br>
      <div className='start-earning'>
        <div className='text'>
          <p className='heading-earning'>Start Earning in 3 Easy Steps</p>
          <p className='text-earning'>We have create the app the make your earning easy</p>
        </div>
        <div className='steps-swiper'>
          <div className='slide-swiper'>
            <div className='step-1'>
              <div className='process'>
                <p className='steps'>STEP-1</p>
                <p className='app-download'>Download the App and Sign up as a  agent</p>
              </div>
              <div>
              <div className='video'>
                  <img src='fnance_moble-removebg-preview.png' />
                </div>
              </div>
            </div>

            <div className='step-2'>
              <div className='process'>
                <p className='steps'>STEP-2</p>
                <p className='app-download'>Register your customers and Recommend financial products</p>
              </div>
              <div>
              </div>
            </div>

            <div className='step-3'>
              <div className='process'>
                <p className='steps'>STEP-3</p>
                <p className='app-download'>Start earning upto 1 Lakh every month</p>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
        <img className='imgi' src='	https://zetapp.in/_next/static/media/earningDec.b2e9943b.svg' />
      </div>

    </>
  )
}

export default page