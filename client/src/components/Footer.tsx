import { motion } from 'framer-motion';

const Footer = () => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];
  
  return (
    <footer className="border-t-4 border-black py-8 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6 text-center">
        <p className="font-medium">© {new Date().getFullYear()} Saqlain Ahmed P. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          {navLinks.map((link) => (
            <motion.a 
              key={link.href}
              href={link.href} 
              className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
