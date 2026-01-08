import { Link } from 'react-router-dom';
import { Twitter, Github, Mail, ExternalLink, Linkedin } from 'lucide-react';

const footerLinks = {
  ecosystem: [
    { name: 'IoMarkets.io', href: 'https://iomarkets.io', external: true },
    { name: 'IoMarkets.money', href: 'https://iomarkets.money', external: true },
    { name: 'IoMarkets.xyz', href: 'https://iomarkets.xyz', external: true },
    { name: 'IoMarkets.com', href: 'https://iomarkets.com', external: true },
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ],
  resources: [
    { name: 'IoMarkets.ai', href: 'https://iomarkets.ai', external: true },
    { name: 'IoMarkets.news', href: 'https://iomarkets.news', external: true },
    { name: 'IoMarkets.tech', href: 'https://iomarkets.tech', external: true },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/iomarkets', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/iomarkets', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/iomarkets', icon: Github },
  { name: 'Email', href: 'mailto:info@iomarkets.org', icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo and Description - Takes 2 columns on lg */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-lg overflow-hidden relative border border-slate-700/50 group-hover:border-slate-500/50 transition-all flex items-center justify-center bg-slate-800">
                <img
                  src="/images/IoMarkets_Logo.png"
                  alt="IoMarkets"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white">IoMarkets</span>
                <span className="text-amber-500 text-2xl font-bold">®</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4 max-w-sm leading-relaxed">
              The most holistic AI-powered Web3 financial ecosystem powering the future of capital markets.
            </p>
            <p className="text-gray-500 text-sm mb-8">
              IoMarkets® LLC<br />
              30 N Gould St Ste R<br />
              Sheridan, Wyoming 82801
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Ecosystem
            </h4>
            <ul className="space-y-4">
              {footerLinks.ecosystem.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    {link.name}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal Combined */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Resources
            </h4>
            <ul className="space-y-4 mb-8">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    {link.name}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="text-center mb-4">
            <p className="text-sm font-semibold text-gray-400">
              Built with ❤️ by{' '}
              <a
                href="https://www.linkedin.com/in/sergovashakmadze/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:underline transition-colors"
              >
                Sergo Vashakmadze
              </a>
            </p>
          </div>
          <p className="text-sm text-center text-gray-500">
            &copy; 2025 IoMarkets<sup>&reg;</sup> All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
