import { FaFacebookF, FaTwitter, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#1A1919] text-base-content">
  <aside>
    <h1 className="text-white mb-5 text-3xl font-extrabold">CareerHub</h1>
    <p className="max-w-xs text-white/70 text-base">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
    <div className="flex gap-5 text-2xl text-white">
        <FaFacebookF />
        <FaTwitter />
        <FaSquareInstagram />
    </div>
  </aside> 
  <nav>
    <h6 className="footer-title text-white">Services</h6> 
    <a className="link link-hover text-white/70">Branding</a>
    <a className="link link-hover text-white/70">Design</a>
    <a className="link link-hover text-white/70">Marketing</a>
    <a className="link link-hover text-white/70">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-[#ffffff]">Company</h6> 
    <a className="link link-hover text-white/70">About us</a>
    <a className="link link-hover text-white/70">Contact</a>
    <a className="link link-hover text-white/70">Jobs</a>
    <a className="link link-hover text-white/70">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-white">Legal</h6> 
    <a className="link link-hover text-white/70">Terms of use</a>
    <a className="link link-hover text-white/70">Privacy policy</a>
    <a className="link link-hover text-white/70">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;