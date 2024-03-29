import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className="mx-16 mt-12 mb-6">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <a href='#/' className="link link-hover">Branding</a>
                    <a href='#/' className="link link-hover">Design</a>
                    <a href='#/' className="link link-hover">Marketing</a>
                    <a href='#/' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='#/' className="link link-hover">About us</a>
                    <a href='#/' className="link link-hover">Contact</a>
                    <a href='#/' className="link link-hover">Jobs</a>
                    <a href='#/' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='#/' className="link link-hover">Terms of use</a>
                    <a href='#/' className="link link-hover">Privacy policy</a>
                    <a href='#/' className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='mt-10 font-medium text-center'>
                <p>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;