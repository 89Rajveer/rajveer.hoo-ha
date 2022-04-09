import React from 'react';
import kodekoast from  './kodekoast-logo.svg';

const Footer =() =>{
	return(
		 <div className="footer-section">
        <div className="developed-by" ecl="true">
    Developed by <a href="https://kodekoast.com/" className="Kodekoast-logo"> <img src={kodekoast} alt="Kodekoast"/>
    </a>
				</div>   
		</div>
	);

}
export default Footer;