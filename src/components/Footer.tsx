import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';

const socialLinks = [
  { name: 'Twitter (X)', href: 'https://x.com/IoMarkets', icon: Twitter },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/109605371/', icon: Linkedin },
  { name: 'Facebook', href: 'https://www.facebook.com/IoMarkets/', icon: Facebook },
  { name: 'YouTube', href: 'https://youtu.be/Jj8Hx4rACOU', icon: Youtube },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 to-blue-50 border-t border-slate-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <img src="/images/IoMarkets_Logo.png" alt="IoMarkets" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent tracking-tight leading-none">
                  IoMarkets<sup className="text-xs">®</sup>
                </h3>
              </div>
            </Link>
            <p className="text-gray-700 text-sm font-light leading-relaxed mb-3">
              Venture Capital Investment Fund.
            </p>
            <p className="text-gray-600 text-sm font-light">
              Email: <a href="mailto:info@iomarkets.org" className="text-cyan-600 hover:text-cyan-500 transition-colors">info@iomarkets.org</a>
            </p>
          </div>

          {/* IoMarkets LLC */}
          <div>
            <h4 className="text-sm font-semibold text-cyan-600 mb-4 tracking-wide">IoMarkets<sup className="text-xs">®</sup> LLC</h4>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              30 N Gould St Ste R,<br />
              Sheridan, Sheridan County,<br />
              WY 82801,<br />
              USA
            </p>
          </div>

          {/* IoMarkets UG */}
          <div>
            <h4 className="text-sm font-semibold text-cyan-600 mb-4 tracking-wide">IoMarkets<sup className="text-xs">®</sup> UG</h4>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Weningstrasse 8,<br />
              94405 Landau,<br />
              Germany
            </p>
          </div>

          {/* IoMarkets Ltd */}
          <div>
            <h4 className="text-sm font-semibold text-blue-600 mb-4 tracking-wide">IoMarkets<sup className="text-xs">®</sup> Ltd</h4>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              20-22 Wenlock Road<br />
              London, N1 7GU<br />
              United Kingdom
            </p>
          </div>

          {/* IoMarkets WLL */}
          <div>
            <h4 className="text-sm font-semibold text-blue-600 mb-4 tracking-wide">IoMarkets<sup className="text-xs">®</sup> WLL</h4>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Office No. 1002, Building 1260, Road 2421, Block 324, Juffair<br />
              Manama / Al Fateh<br />
              Kingdom of Bahrain
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-sm font-semibold text-cyan-600 mb-4 tracking-wide">Follow Us</h4>
            <ul className="space-y-3 text-sm">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-cyan-600 transition-colors font-light flex items-center gap-2"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-200">
          <p className="text-center text-base font-semibold text-gray-700 mb-2">
            Built with ❤️ by{' '}
            <a
              href="https://www.linkedin.com/in/sergovashakmadze/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-cyan-600"
            >
              Sergo Vashakmadze
            </a>
          </p>
          <p className="text-center text-sm text-gray-600 font-light">
            © {currentYear} IoMarkets<sup className="text-xs">®</sup> All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
