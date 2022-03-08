import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div className="container-fluid text-center text-md-left bg-darkgrey display-grid">
                <div className="row footer">

                    <div className="col-md-3 mb-md-0 mb-3 anchors">
                        <h5>Site Map</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Top</a></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="bram">Bram Stoker</Link></li>
                            <li><Link to="anne">Anne Bonny</Link></li>
                            <li><Link to="charles">Sir Charles Parsons</Link></li>
                            <li><Link to="dame">Dame Jocelyn Bell</Link></li>
                            <li><Link to="ernest">Ernest Shackleton</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5>Laszlo's Productions</h5>
                        <p>Finding web solutions.</p>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3 anchors-contact">
                        <h5>Contact</h5>
                        <ul className="list-unstyled anchor">
                            <li><i className="fas fa-envelope fa-fw"></i><a href="mailto:x21144320@student.ncirl.ie"> Email</a></li>
                            <li><i className="fab fa-github-square fa-fw"></i><a href="https://github.com/laszloluque/ASCD-CA" target="_blank" rel="noreferrer"> GitHub Project</a></li>
                            <li><i className="fas fa-user-shield fa-fw"></i><Link to="privacy"> Privacy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Footer;