import React from 'react';
import './Footer.css';

export default function Footer(){
    return(
        <>
           <footer className="footer text-center">
             <div className="footer-header">
                 Made with <span className="primary-text-color">&lt;/&gt;</span>
                 by Keshav Gupta
             </div>
             <ul className="inline-list list-style-none footer-social-icons">
                 <li className="list-inline-item">
                     <a className="link-no-style" href="https://github.com/keshavg2">
                     <i class="fa fa-github" aria-hidden="true"></i>
                     </a>
                 </li>
                 <li className="list-inline-item">
                     <a className="link-no-style" href="https://twitter.com/Keshav28457773">
                     <i class="fa fa-twitter" aria-hidden="true"></i>
                     </a>
                 </li>
                 <li className="list-inline-item">
                     <a className="link-no-style" href="https://www.linkedin.com/in/keshavg2/">
                     <i class="fa fa-linkedin" aria-hidden="true"></i>
                     </a>
                 </li>
             </ul>
             <div className='text-light-weight body-cp-md footer-copy'>
					© 2021 K<span className='primary-text-color body-cp-sm'>&</span>G
					Designs
				</div>
           </footer>
        </>
    );
}