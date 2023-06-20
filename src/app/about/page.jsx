"use client"
import "../../styles/about.css";
import React, { useEffect, useRef, useState } from 'react';

const about = () => {
    const divRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const top = divRef.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (top < windowHeight) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
  return (
    <>
    <title>ZET - About Us</title>
    <div>
        <img src= 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOurMission.13d85461.png&w=3840&q=100' alt="background-image" className="back-img"/>
        <div className='mission'>
            <text className='their-mission'>OUR MISSION</text>
        </div>
        <div className='text-mission'>
            <text className='text-desc'>Enabling financial inclusion for the next billion Indians
            <br />
             & making their Zindagi Set. Building a platform that enables you to sell
             <br />
              financial products & earn up to Rs. 1 lakh every month.</text>
        </div>
        <div className='quote-mission'>
            <text className='quote'>EARN BETTER. LIVE BETTER.</text>
        </div>
    </div>

    <div className='evolved-process'>
        <p className='evolved-header'>How we evolved over the years</p>
        <div className='evolved-image'>
            <img src='	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGrowth.abe5b7d8.png&w=3840&q=100' />
        </div>
    </div>

    <div className='features'>
        <div className='features-heading'>
            <p className='features-header'>Got Featured</p>
        </div>
        <div className='features-logo'>
            <div className="image-row">
                <img className='imgg' src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEconomicTimes.5724030e.png&w=1080&q=75" alt="Image 1"/>
                <img className='imgg' src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInc42.7697aec8.png&w=1080&q=75" alt="Image 2"/>
                <img className='imgg' src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmint.410f3a1a.png&w=1080&q=75" alt="Image 3"/>
                <img className='imgg' src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYourStory.1efabc81.png&w=1080&q=75" alt="Image 4"/>
                <img className='imgg' src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBusinessStandard.047c592d.png&w=1080&q=75" alt="Image 5"/>
            </div>
        </div>
    </div>


    <div className='investors'>
        <div className='investors-heading'>
            <p className='investors-header'>Meet the Investors</p>
        </div>
        <div ref={divRef} className={`my-div ${isVisible ? 'visible investors-company' : 'investors-company'}`}>
            <div className='company-div'>
                <div className='company-div-1'>
                    <div className='company-logo'>
                        <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany1.41d5c5bd.png&w=1200&q=75' />
                    </div>
                </div>
            </div>
            <div className='company-div'>
                <div className='company-div-2'>
                    <div className='company-logo'>
                        <img src='	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany2.3f604866.png&w=1200&q=75' />
                    </div>
                </div>
            </div>
            <div className='company-div'>
                <div className='company-div-3'>
                    <div className='company-logo'>
                        <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany3.c16095cb.png&w=1200&q=75' />
                    </div>
                </div>
            </div>
            <div className='company-div'>
                <div className='company-div-4'>
                    <div className='company-logo'>
                        <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany4.9acb56c2.png&w=1200&q=75' />
                    </div>
                </div>
            </div>
        </div>
        <div className='company-founders'>
            <div className='card'>
                <div className='company-founder-card'>
                    <div className='founders'>
                        <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv1.1c87bc0c.png&w=828&q=75' />
                    </div>
                    <div className='founder-name'>
                        <text>Kunal Shah</text>
                    </div>
                    <div className='temp'>
                        <text className='founder-position'>Founder, CRED</text>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='company-founder-card'>
                    <div className='founders'>
                        <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv2.331b31f9.png&w=828&q=75' />
                    </div>
                    <div className='founder-name'>
                        <text>Gaurav Munjal</text>
                    </div>
                    <div className='temp'>
                        <text className='founder-position'>Founder, UNACADEMY</text>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='company-founder-card'>
                    <div className='founders'>
                        <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv3.1779e0d4.png&w=828&q=75' />
                    </div>
                    <div className='founder-name'>
                        <text>Aakrit Vaish</text>
                    </div>
                    <div className='temp'>
                        <text className='founder-position'>Co-Founder, HAPTIK</text>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='company-founder-card'>
                    <div className='founders'>
                        <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv4.b9325fa0.png&w=828&q=75' />
                    </div>
                    <div className='founder-name'>
                        <text>Harshil Mathur</text>
                    </div>
                    <div className='temp'>
                        <text className='founder-position'>Founder, RAZORPAY</text>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='company-founder-card'>
                    <div className='founders'>
                        <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv5.2e962217.png&w=828&q=75' />
                    </div>
                    <div className='founder-name'>
                        <text>Vidit Aatrey</text>
                    </div>
                    <div className='temp'>
                        <text className='founder-position'>Founder & CEO, MEESHO</text>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='company-founder-card'>
                    <div className='founders'>
                        <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv6.7a958b9d.png&w=828&q=75' />
                    </div>
                    <div className='founder-name'>
                        <text>Amrish Rau</text>
                    </div>
                    <div className='temp'>
                        <text className='founder-position'>CEO, PINELABS</text>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='company-founder-card'>
                    <div className='founders'>
                        <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv7.3b8a633d.png&w=828&q=75' />
                    </div>
                    <div className='founder-name'>
                        <text>Lalit Keshre</text>
                    </div>
                    <div className='temp'>
                        <text className='founder-position'>CEO, GROWW</text>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='company-founder-card'>
                    <div className='founders'>
                        <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv8.bcbe6091.png&w=828&q=75' />
                    </div>
                    <div className='founder-name'>
                        <text>Gokul Rajaram</text>
                    </div>
                    <div className='temp'>
                        <text className='founder-position'>Product, DOORDASH</text>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className='main-founders'>
        <div className='main-founders-heading'>
            <p className='main-heading'>Meet our Founders</p>
            <p className='main-disc'>Few words from founders desk</p>
        </div>
        <div className='fade'>
            <div className='transform3'>
                <div className='founder-1-div'>
                    <div className='founder-1'>
                        <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FManish.519c8845.png&w=1080&q=75' />
                    </div>
                    <div className='founder-name'>
                        <div>
                            <div className='founder-name-header'>
                                <text>Manish Shara</text>
                            </div>
                            <div className='main-founder-desc'>
                                <text>Co-Founder & CEO</text>
                            </div>
                        </div>
                        <div className='linked-in-profile'>
                            <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=256&q=75' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='transform3'>
                <div className='founder-2-div'>
                    <div className='founder-2'>
                        <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYash.126e24ca.png&w=1080&q=75' />
                    </div>
                    <div className='founder-name'>
                        <div>
                            <div className='founder-name-header'>
                                <text>Yash Desai</text>
                            </div>
                            <div className='main-founder-desc'>
                                <text>Co-Founder</text>
                            </div>
                        </div>
                        <div className='linked-in-profile'>
                            <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=256&q=75' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='transform3'>
                <div className='founder-3-div'>
                    <div className='founder-3'>
                        <img src='	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLokesh.ead063e7.png&w=1080&q=75' />
                    </div>
                    <div className='founder-name'>
                        <div>
                            <div className='founder-name-header'>
                                <text>Lokesh Agarwal</text>
                            </div>
                            <div className='main-founder-desc'>
                                <text>CTO</text>
                            </div>
                        </div>
                        <div className='linked-in-profile'>
                            <img src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=256&q=75' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img className='company' src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUsFooter.d2311d39.png&w=3840&q=100' />
    </>
  )
}

export default about