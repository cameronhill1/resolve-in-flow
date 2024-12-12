import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-serif text-white">Resolve Bodywork</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button 
                className="bg-primary px-6 py-2 rounded-full text-white hover:bg-primary/90 transition-colors"
                data-cal-link="resolvebodywork/flagship"
                data-cal-namespace="flagship"
                data-cal-config='{"layout":"month_view"}'
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#services">Services</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            <button 
              className="w-full text-center bg-primary px-6 py-2 rounded-full text-white hover:bg-primary/90 transition-colors"
              data-cal-link="resolvebodywork/flagship"
              data-cal-namespace="flagship"
              data-cal-config='{"layout":"month_view"}'
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
  >
    {children}
  </a>
);

export default Navbar;