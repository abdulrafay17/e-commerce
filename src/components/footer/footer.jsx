import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
        {/* Subscribe Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Exclusive</h2>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex items-center border-b border-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-white placeholder-gray-400 flex-1 py-2"
            />
            <button className="text-white">
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <p className="text-sm mb-2">
            <Link href="https://goo.gl/maps/xyz" target="_blank">
              ABC ROAD, 123 CITY, EFG STATE, HIJK COUNTRY
            </Link>
          </p>
          <p className="text-sm mb-2">
            <Link href="mailto:exclusive@gmail.com">exclusive@gmail.com</Link>
          </p>
          <p className="text-sm">
            <Link href="tel:+88015888889999">+88015-88888-9999</Link>
          </p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/account">My Account</Link></li>
            <li><Link href="/login">Login / Register</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/wishlist">Wishlist</Link></li>
            <li><Link href="/shop">Shop</Link></li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms Of Use</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Download App</h3>
          <p className="text-sm mb-4">Save $3 with App New User Only</p>
          <div className="flex items-center space-x-4">
            <div className="w-30 h-30">
              <img src="/images/qrcode.png" alt="QR Code" />
            </div>
            <div className="flex flex-col space-y-2">
              <Link href="https://play.google.com/store" target="_blank">
                <img src="/google-play.png" alt="Google Play" className="w-24" />
              </Link>
              <Link href="https://www.apple.com/app-store/" target="_blank">
                <img src="/app-store.png" alt="App Store" className="w-24" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        <p className="text-sm text-gray-400">© Copyright Exclusive 2025. All rights reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://facebook.com" target="_blank">
            <FaFacebookF className="text-white hover:text-blue-500 cursor-pointer" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter className="text-white hover:text-blue-400 cursor-pointer" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <FaInstagram className="text-white hover:text-pink-500 cursor-pointer" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedinIn className="text-white hover:text-blue-700 cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
