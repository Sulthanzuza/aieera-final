import { FC } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,

} from "react-icons/fa";
import { Link } from "react-router-dom";
import FooterLogo from "../assets/Logo with name large.webp";

interface SocialLink {
  name: string;
  icon: JSX.Element;
  url: string;
}

interface UsefulLink {
  name: string;
  url: string;
}

const Footer: FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      icon: <FaFacebookF size={18} />,
      url: "https://www.facebook.com/aieerafm",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={18} />,
      url: "https://www.instagram.com/aieerafm",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={18} />,
      url: "https://www.linkedin.com/company/aieera",
    }
  ];

  const usefulLinks: UsefulLink[] = [
    { name: "Services", url: "/services" },
    { name: "About", url: "/about" },
    { name: "Future", url: "/future" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-slate-900 text-white px-6 py-12 border-white">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand & Social */}
        <div className="space-y-4">
          <div>
            <img
             loading="lazy"
              src={FooterLogo}
              alt="Aieera Digital Marketing Logo"
              className="h-40 w-auto filter invert"
            />
            <p className="text-xl text-gray-300 mt-2 ">
              Future Marketing Company
            </p>
          </div>

          <div className="flex space-x-5 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-blue-500 transition-all duration-300 cursor-pointer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-zinc-200 relative after:content-[''] after:absolute after:w-16 after:h-1 after:bg-gray-500 after:-bottom-2 after:left-0">
            Useful Links
          </h3>
          <ul className="space-y-3 pt-4">
            {usefulLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.url}
                  className="text-gray-300 hover:text-white hover:underline decoration-gray-400 underline-offset-4 transition-all duration-300 flex items-center cursor-pointer"
                >
                  <span className="text-gray-400 mr-2">›</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-zinc-200 relative after:content-[''] after:absolute after:w-16 after:h-1 after:bg-gray-500 after:-bottom-2 after:left-0">
            Contact Us
          </h3>
          <address className="not-italic text-gray-300 space-y-3 pt-4">
            <p className="flex items-center">
              <span className="text-gray-400 mr-2">•</span>
              <a
                href="mailto:hello@aieera.com"
                className="hover:text-white hover:underline decoration-gray-400 underline-offset-4 transition-all duration-300 cursor-pointer"
              >
                hello@aieera.com
              </a>
            </p>
            <p className="flex items-center">
              <span className="text-gray-400 mr-2">•</span>
              <a
                href="tel:+971545458167"
                className="hover:text-white hover:underline decoration-gray-400 underline-offset-4 transition-all duration-300 cursor-pointer"
              >
                +971 54 545 8167
              </a>
            </p>
          </address>
        </div>

        {/* Our Vision */}
        <div className="space-y-4 pt-4">
          <div className="relative overflow-hidden p-2 sm:p-5">
            <div className="absolute inset-0 rounded-lg blur-xl opacity-50" />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white mb-2 animate-pulse">
                  Your Vision
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-stone-300 to-gray-300 mt-1 animate-pulse">
                  Our Mission
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-zinc-100 to-stone-100 rounded-full mt-4"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
        <p>
          Copyright ©  {new Date().getFullYear()}<span className="relative inline-block cursor-pointer group">
   Aieera Digital Marketing.
  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
</span>

        </p>
      </div>
    </footer>
  );
};

export default Footer;