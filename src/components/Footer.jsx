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
              <Link to="/moonway-plus">Moonway Plus</Link>
            </li>
            <li>
              <Link to="/moonway-premium-rooms">Moonway Premium Rooms</Link>
            </li>
            <li>
              <Link to="/our-rooms">Our Rooms</Link>
            </li>
            <li>
              <Link to="/deal-offers">Deal Offers</Link>
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
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/find-a-hotel">Find a Hotel</Link>
            </li>
            <li>
              <Link to="/wedding-accommodations">Wedding Accommodations</Link>
            </li>
            <li>
              <Link to="/conference-accommodations">
                Conference Accommodations
              </Link>
            </li>
            <li>
              <Link to="/group-bookings">Group Bookings</Link>
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
              <Link className="hover:text-accent transition-all" to="/covid-19">
                Covid-19
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/our-responsibilities"
              >
                Our Responsibilities
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/testimonials"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/newsletters"
              >
                Newsletters
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/travel-tips"
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
                to="/contact-us"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent transition-all" to="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/terms-and-conditions"
              >
                T&Cs
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-all"
                to="/data-access"
              >
                Data Access
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent transition-all" to="/cookies">
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
