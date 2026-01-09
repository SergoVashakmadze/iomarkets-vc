import { useEffect, useRef, useState } from 'react';

export function TickerTape() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (scriptLoaded.current || !containerRef.current) return;
    if (containerRef.current.querySelector('script')) return;

    scriptLoaded.current = true;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },
        { proName: 'FOREXCOM:NSXUSD', title: 'Nasdaq 100' },
        { proName: 'FOREXCOM:DJI', title: 'Dow Jones' },
        { proName: 'FX:EURUSD', title: 'EUR/USD' },
        { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
        { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' },
        { proName: 'CMCMARKETS:GOLD', title: 'Gold' },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: 'adaptive',
      colorTheme: 'dark',
      locale: 'en',
    });

    containerRef.current.appendChild(script);
  }, [mounted]);

  if (!mounted) {
    return (
      <div
        className="fixed top-0 left-0 right-0 z-[60] h-[46px]"
        style={{ backgroundColor: '#131722', borderBottom: '1px solid #2a3550' }}
      />
    );
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] tradingview-widget-container"
      style={{ backgroundColor: '#131722', borderBottom: '1px solid #2a3550' }}
    >
      <div className="tradingview-widget-container__widget" ref={containerRef}></div>
    </div>
  );
}

export default TickerTape;
