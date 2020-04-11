import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      // var networks= this.props.data.social.map(function(network){
      //   return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      // })
      var networks = 
                      <div>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fa fa-github"></i></a></li>
                      <li><a href="#"><i className="fa fa-skype"></i></a></li>
                      </div>
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
              {/* adding separate icons for social links and respective transition colors  */}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2020 Mohammad Akbar</li>
           </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
