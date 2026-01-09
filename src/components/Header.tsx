import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const ecosystemDomains = [
  { name: 'IoMarkets.org', subtitle: 'Organization', url: 'https://iomarkets.org', icon: '🏛️' },
  { name: 'IoMarkets.io', subtitle: 'AI-Powered Web3 Capital Markets', url: 'https://iomarkets.io', icon: '📈' },
  { name: 'IoMarkets.money', subtitle: 'Digital Money, Stablecoins & Payments', url: 'https://iomarkets.money', icon: '💰' },
  { name: 'IoMarkets.xyz', subtitle: 'Digital Collectibles & NFT Platform', url: 'https://iomarkets.xyz', icon: '🎨' },
  { name: 'IoMarkets.pro', subtitle: 'Universal Exchange - Pro Trading Suite', url: 'https://iomarkets.pro', icon: '💹' },
  { name: 'IoMarkets.ai', subtitle: 'AI-Powered Markets Intelligence', url: 'https://iomarkets.ai', icon: '🤖' },
  { name: 'IoMarkets.co', subtitle: 'Corporate Finance & Investor Relations', url: 'https://iomarkets.co', icon: '🏢' },
  { name: 'IoMarkets.vc', subtitle: 'Venture Capital Investment Fund', url: 'https://iomarkets.vc', icon: '🚀', current: true },
  { name: 'IoMarkets.fund', subtitle: 'Asset Management', url: 'https://iomarkets.fund', icon: '📊' },
  { name: 'IoMarkets.tv', subtitle: 'Global Financial News Television', url: 'https://iomarkets.tv', icon: '📺' },
  { name: 'IoMarkets.news', subtitle: 'Global Online Financial News', url: 'https://iomarkets.news', icon: '📰' },
  { name: 'IoMarkets.tech', subtitle: 'Financial Technology Solutions', url: 'https://iomarkets.tech', icon: '⚙️' },
  { name: 'DipBuyer AI', subtitle: 'AI Agent for Value Investing', url: 'https://dipbuyer.ai', icon: '🎯' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const ecosystemDesktopRef = useRef<HTMLDivElement>(null);
  const ecosystemMobileRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const isOutsideDesktop = ecosystemDesktopRef.current && !ecosystemDesktopRef.current.contains(target);
      const isOutsideMobile = ecosystemMobileRef.current && !ecosystemMobileRef.current.contains(target);

      if ((isOutsideDesktop || !ecosystemDesktopRef.current) &&
          (isOutsideMobile || !ecosystemMobileRef.current)) {
        setEcosystemOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-[46px] left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <img src="/images/IoMarkets_Logo.png" alt="IoMarkets" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-white">IoMarkets</span>
                  <span className="text-xl font-bold text-amber-500">®</span>
                </div>
                <span className="text-[10px] text-cyan-400 -mt-0.5 uppercase tracking-wider font-bold">VENTURE CAPITAL</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-4">
              <div ref={ecosystemDesktopRef} className="relative">
                <button onClick={() => setEcosystemOpen(!ecosystemOpen)} className="flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-medium bg-slate-800 border border-slate-700 hover:bg-slate-700">
                  IoMarkets Ecosystem
                  <ChevronDown className={`w-4 h-4 transition-transform ${ecosystemOpen ? 'rotate-180' : ''}`} />
                </button>
                {ecosystemOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 max-h-[70vh] overflow-y-auto rounded-2xl bg-slate-800 border border-slate-700 shadow-xl z-50">
                    <div className="p-2">
                      {ecosystemDomains.map((domain) => (
                        <a
                          key={domain.name}
                          href={domain.current ? '/' : domain.url}
                          target={domain.current ? undefined : '_blank'}
                          rel={domain.current ? undefined : 'noopener noreferrer'}
                          onClick={(e) => {
                            e.stopPropagation();
                            setEcosystemOpen(false);
                            if (!domain.current) {
                              window.open(domain.url, '_blank', 'noopener,noreferrer');
                            }
                          }}
                          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg transition-colors hover:bg-slate-700 ${domain.current ? 'bg-slate-700 border-r-2 border-amber-500' : ''}`}
                        >
                          <span className="text-lg flex-shrink-0">{domain.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium truncate ${domain.current ? 'text-white' : 'text-gray-200'}`}>{domain.name}</p>
                            <p className={`text-xs truncate ${domain.current ? 'text-amber-500' : 'text-gray-400'}`}>{domain.subtitle}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <div ref={ecosystemMobileRef} className="relative">
                <button onClick={() => setEcosystemOpen(!ecosystemOpen)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-medium bg-slate-800 border border-slate-700">Ecosystem</button>
                {ecosystemOpen && (
                  <div className="absolute top-full right-0 mt-2 w-72 max-h-[60vh] overflow-y-auto rounded-2xl bg-slate-800 border border-slate-700 shadow-xl z-50">
                    <div className="p-2">
                      {ecosystemDomains.map((domain) => (
                        <a
                          key={domain.name}
                          href={domain.current ? '/' : domain.url}
                          target={domain.current ? undefined : '_blank'}
                          rel={domain.current ? undefined : 'noopener noreferrer'}
                          onClick={(e) => {
                            e.stopPropagation();
                            setEcosystemOpen(false);
                            if (!domain.current) {
                              window.open(domain.url, '_blank', 'noopener,noreferrer');
                            }
                          }}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-slate-700 ${domain.current ? 'bg-slate-700 border-r-2 border-amber-500' : ''}`}
                        >
                          <span className="text-base flex-shrink-0">{domain.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className={`text-xs font-medium truncate ${domain.current ? 'text-white' : 'text-gray-200'}`}>{domain.name}</p>
                            <p className={`text-[10px] truncate ${domain.current ? 'text-amber-500' : 'text-gray-400'}`}>{domain.subtitle}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-gray-300 hover:text-white"><Menu className="w-6 h-6" /></button>
            </div>
          </nav>
        </div>
      </header>
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[99998]" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-slate-900 overflow-y-auto z-[99999]">
            <div className="flex justify-end p-4">
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-300 hover:text-white"><X className="w-6 h-6" /></button>
            </div>
            <nav className="px-4 pb-6">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg">Home</Link>
            </nav>
          </div>
        </>
      )}
      <div className="h-[110px]" />
    </>
  );
}

export default Header;
