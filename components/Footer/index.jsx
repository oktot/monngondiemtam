import React from 'react'
import { prefixLink } from 'gatsby-helpers'

import './style.scss'
import iconEagle from '../../static/img/svg-icons/nihonsuruinline.svg'
import iconKamon from '../../static/img/svg-icons/nihonsuruinline.svg'
import iconBakaDono from '../../static/img/svg-icons/dung.svg'

class Footer extends React.Component {
  render() {

    return (
      <div className='footer'>
        <div className='footer__wrapper'>


	  <div className='footer__copyright'>
          </div>
       <div className='footer__left'>

	    <div><img className='footer__powered-svg' src={ prefixLink(iconBakaDono) }/> Điểm Ăn Uống Bình Dương</div>


        </div>

	
	
	<div className='footer__right'>
            
          
	    
	     <div className='footer__powered'>
            <span>Member of the clan </span>
            <a href='http://midorishop.com.vn' className='footer__powered-link' target='_blank'>
              <img className='footer__powered-svg' src={ prefixLink(iconEagle) }/>
              <span className='footer__powered-fx'>Midori</span>
            </a>
          </div>


        </div>



        <div className='footer__centered'>


         <nav className='footer__versions'>
	    <h3>Thủ Dầu Một.</h3>
	    <h3>Món ăn ngon Bình Dương & Địa điểm quán ăn Bình Dương.</h3>
            <a href='/tos/privacy'>Privacy</a>
            <a href='/tos'>Terms of service</a>
            <a href='/about' className='is-selected'><img className='footer__powered-svg' src={ prefixLink(iconKamon) }/> Giới thiệu về chúng tôi</a>
	    <a href='http://midorishop.com.vn'>© Midori Private Enterprise (P.E)</a>
          </nav>
        </div>
        </div>
      </div>
    );
  }
}

export default Footer
