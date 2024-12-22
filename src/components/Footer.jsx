import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary w-full text-white text-center md:text-left font-thin text-sm px-10 py-5">
      <div className="flex justify-evenly flex-col md:flex-row space-x-3 2xl:px-52">
        {/* Hotels Section */}
        <div className="lg:w-1/4 md:w-2/4 p-5">
          <h3 className="text-xl font-extralight border-b-[0.5px] border-secondary w-2/2 mx-auto mb-3">
            Hotels
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/moonway-travel/under-construction">Moonway Plus</Link>
            </li>
            <li>
              <Link to="/moonway-travel/under-construction">
                Moonway Premium Rooms
              </Link>
            </li>
            <li>
              <Link to="/moonway-travel/under-construction">Our Rooms</Link>
            </li>
            <li>
              <Link to="/moonway-travel/under-construction">Deal Offers</Link>
            </li>
          </ul>
        </div>

        {/* Destinations Section */}
        <div className="lg:w-1/4 md:w-2/4 p-5">
          <h3 className="text-xl font-extralight border-b border-secondary w-2/2 mx-auto mb-3">
            Destinations
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/moonway-travel/under-construction">Blog</Link>
            </li>
            <li>
              <Link to="/moonway-travel/hotels">Find a Hotel</Link>
            </li>
            <li>
              <Link to="/moonway-travel/under-construction">
                Wedding Accommodations
              </Link>
            </li>
            <li>
              <Link to="/moonway-travel/under-construction">
                Conference Accommodations
              </Link>
            </li>
            <li>
              <Link to="/moonway-travel/under-construction">
                Group Bookings
              </Link>
            </li>
          </ul>
        </div>

        {/* Find Out More Section */}
        <div className="lg:w-1/4 md:w-2/4 p-5">
          <h3 className="text-xl font-extralight border-b border-secondary w-2/2 mx-auto mb-3">
            Find Out More
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/moonway-travel/under-construction"
              >
                Covid-19
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/moonway-travel/under-construction"
              >
                Our Responsibilities
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/moonway-travel/under-construction"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/moonway-travel/under-construction"
              >
                Newsletters
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/moonway-travel/under-construction"
              >
                Travel Tips
              </Link>
            </li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="lg:w-1/4 md:w-2/4 p-5">
          <h3 className="text-xl font-extralight border-b border-secondary w-2/2 mx-auto mb-3">
            About Us
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/moonway-travel/contact"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/moonway-travel/under-construction"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/moonway-travel/under-construction"
              >
                T&Cs
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/moonway-travel/under-construction"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/moonway-travel/under-construction"
              >
                Data Access
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/moonway-travel/under-construction"
              >
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Socials */}
      <div className="flex justify-center space-x-6 mt-6">
        <FaLinkedin
          aria-label="Follow us on LinkedIn"
          title="Follow us on LinkedIn"
          className="text-xl hover:text-blue-700 cursor-pointer transition duration-300"
        />
        <FaTwitter
          aria-label="Follow us on Twitter"
          title="Follow us on Twitter"
          className="text-xl hover:text-blue-400 cursor-pointer transition duration-300"
        />
        <FaFacebook
          aria-label="Follow us on Facebook"
          title="Follow us on Facebook"
          className="text-xl hover:text-blue-600 cursor-pointer transition duration-300"
        />
        <FaInstagram
          aria-label="Follow us on Instagram"
          title="Follow us on Instagram"
          className="text-xl hover:text-pink-500 cursor-pointer transition duration-300"
        />
      </div>
    </footer>
  );
};

export default Footer;
