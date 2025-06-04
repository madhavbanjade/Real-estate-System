import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#2a2a2a] text-white py-10 mt-20 rounded-tl-3xl">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Information */}
        <div>
          <h2 className="text-lg font-bold mb-4">GharJagga Nepal</h2>
          <p>
            Your trusted partner in finding the perfect property. We offer a
            wide range of real estate solutions to meet your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search" className="hover:underline">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li>Email: info@GharJaggaNepal.com</li>
            <li>Phone: +977-077420111</li>
            <li>Address: Tinkune-32, Kathmandu, Nepal</li>
          </ul>
        </div>

        {/* Social Media and Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com/YourProfile" // Replace with your Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-gray-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/YourProfile" // Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-gray-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/madhavbanjade" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-gray-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/YourProfile" // Replace with your Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-gray-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/YourProfile" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-gray-300"
            >
              <FaLinkedin />
            </a>
          </div>
          {/* Newsletter section can be uncommented if needed */}
          {/* <h2 className="text-lg font-bold mb-4">
            Subscribe to Our Newsletter
          </h2> */}
          {/* <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-black"
            />
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </form> */}
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="text-center mt-10 border-t border-gray-400 pt-6">
        <p>&copy; 2024 Real Estate Company. All Rights Reserved.</p>
      </div>
    </div>
  );
}
