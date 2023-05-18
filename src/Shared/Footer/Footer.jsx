import { FaPhoneAlt, FaFacebook, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdLocationPin } from 'react-icons/md';

import logo from "../../../public/ZooLand.png"
const Footer = () => {
    return (
        <div className="mt-auto">
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <p className="font-semibold">Monday to Friday 9 a.m. - 5 p.m.</p>
                    <div className='flex items-center justify-center'> <FaPhoneAlt />
                        <p className='px-3'>0123 456 7890</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <MdEmail />
                        <a className="link link-hover px-3">zoo_land@gmail.com</a>
                    </div>
                    <div className='flex items-center justify-center'> <MdLocationPin />
                        <p className='px-3'>48, Lakedown Road, USA</p></div>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img className="w-16" src={logo} alt="" />
                    <div>
                        <p className="text-2xl font-bold ">Zoo <span className="text-orange-600">Land</span> </p>
                        <p>© 2023 Das Interactive, All Rights Reserved</p>
                    </div>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4">
                        <a href='https://www.facebook.com/' className='text-2xl'><FaFacebook /></a>
                        <a href='https://www.instagram.com/' className='text-2xl'> <FaInstagramSquare /></a>
                        <a href='https://www.youtube.com/' className='text-2xl'> <FaYoutube /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;