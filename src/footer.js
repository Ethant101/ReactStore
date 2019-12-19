import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='topFoot'>
                    <ul>
                        <li>Corporate Info.</li>
                        <li>Forums, blogs and More</li>
                        <li>Careers</li>
                        <li>Accessibility</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className='botFoot'>
                    <i className="fab fa-reddit reddit"> </i>
                    <i className="fab fa-youtube youtube"> </i>
                    <i className="fab fa-facebook-f facebook"> </i>
                    <i className="fab fa-twitter twitter"> </i>
                    <i className="fab fa-instagram instagram"> </i>
                </div>
            </div>
        )
    }
}

export default Footer;