import React from 'react';

import logo from './logo.png';
import shapegray from './shape-gray.svg';

import plate from './plate.png';

const Logo = ()=>{
	return(
		<div className="hero-section">
      <div className="hero">
         <img src={shapegray} className="shape-left" alt="" />
          <div className="container cst-container">
             <div className="row align-items-center">
                 <div className="col-md-7">
                     <div className="account">
                        <img src={logo} alt="logo"/>
                     </div>
                     <div className="location">
                         <div className="heading">
                            <h1>Craving Something?</h1>
                            <p>Order food from favourite resturants near you.</p>
                         </div>
                           <div className="search-box">
                               <form method="post" action="http://www.hoo-ha.com.au/store-location">
                              <input type="hidden" name="_token" value="WjiWe7EJShFWsvwhq77J94RnNiYNK5wvZjd7cyF2" />
                                <div className="input-group">
                                    <input id="searchTextField" className="form-control" type="text" placeholder="Tell us your location"name="address" required="required" />  
                                    <input type="hidden" id="city2" name="city" />
                                    <input type="hidden" id="cityLat" name="cityLat" />
                                    <input type="hidden" id="cityLng" name="cityLng" />
                                    <div className="input-group-append">
                                      <button className="btn btn-success" type="submit">Find Food</button>
                                    </div>
                                </div>
                                </form>
                           </div>
                     </div>
                 </div>
                  <div className="col-md-5">
                    <div className="food-plate">
                      <img src={plate} alt="" className="img-fluid"/>
                    </div>
                  </div>
             </div>
          </div>
      </div>
    </div>

	);
}
export default Logo;

