import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-32 bg-black text-white">
                <aside>
                    <img src={logo}></img>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to='' className="link link-hover">About us</Link>
                    <Link to='' className="link link-hover">Contact</Link>
                    <Link to='' className="link link-hover">Jobs</Link>
                    <Link to='' className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link to='' className="link link-hover">Terms of use</Link>
                    <Link to='' className="link link-hover">Privacy policy</Link>
                    <Link to='' className="link link-hover">Cookie policy</Link>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;