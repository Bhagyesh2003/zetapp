import React from 'react'
import "../styles/footer.css";

const footer = () => {
  return (<>
    <div className='footer'>
      <img className='ftr' src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUs.085fb7a2.png&w=3840&q=100" />
    <div className="information">
    <div className="innerinformation">
        <div className="mainlogo">
        <img src="https://zetapp.in/_next/static/media/zet_logo_white.04e35c15.svg" />
        </div>
        <div className="footer-content">
            <div className="ff-container">
                <div className="column">
                    <p className='footer-headers'>COMPANY</p>
                    <a className='footer-desc' href="/about">About Us</a>
                    <a className='footer-desc' href="/pws">Partner-with-us</a>
                    <a className='footer-desc' href="/blog">Blog</a>
                </div>
                <div className="column">
                    <p className='footer-headers'>LEGAL</p>
                    <a className='footer-desc' href="/about">Privacy Policy</a>
                    <a className='footer-desc' href="/pws">Terms of Use</a>
                    <a className='footer-desc' href="/blog">Partner with us</a>
                </div>
                <div className="column">
                    <p className='footer-headers'>CONTACT</p>
                    <a className='footer-desc' href="https://mail.google.com/mail/?view=cm&fs=1&to=hi@zetapp.in">
                        <img className='email-icon' src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEmailIcon.58cee685.png&w=64&q=75" alt="" />hi@zetapp.in
                    </a>
                    <a className='footer-desc' href="tel://+91-7417274072"><img className='email-icon' src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPhoneIcon.dcc030db.png&w=64&q=75" alt="" />+91-7417274072</a>
                </div>
                <div className="column">
                    <p className='footer-headers'>SOCIAL</p>
                    <div className="socialrow">
                    <a className='footer-desc' href="/about"><img className='social' src="https://zetapp.in/_next/static/media/linkedin.99e56649.svg" alt="" /></a>
                    <a className='footer-desc' href="/about"><img className='social' src="https://zetapp.in/_next/static/media/instagram.146ba33a.svg" alt="" /></a>
                    <a className='footer-desc' href="/about"><img className='social' src="https://zetapp.in/_next/static/media/facebook.cccadfff.svg" alt="" /></a>
                    <a className='footer-desc' href="/about"><img className='social' src="https://zetapp.in/_next/static/media/TelegramImg.2d51b03f.svg" alt="" /></a>
                    <a className='footer-desc' href="/about"><img className='social' src="https://zetapp.in/_next/static/media/WhatsappImg.a5c0a9a6.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
    </div>
  </>
  )
}

export default footer