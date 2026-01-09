import { useEffect, useRef, useState } from 'react';

export function TickerTape() {
  const [mounted, setMounted] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !widgetRef.current) return;

    // Clear previous content
    widgetRef.current.innerHTML = '';

    // Create widget container
    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container__widget';

    // Create and configure script
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

    // Append elements
    widgetRef.current.appendChild(widgetContainer);
    widgetRef.current.appendChild(script);

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = '';
      }
    };
  }, [mounted]);

  return (
    <div
      ref={mounted ? widgetRef : undefined}
      className="tradingview-widget-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '46px',
        backgroundColor: '#131722',
        borderBottom: '1px solid #2a3550',
        zIndex: 60,
        overflow: 'hidden',
      }}
    >
      {/* Placeholder while widget loads */}
      {!mounted && (
        <div className="flex items-center justify-center h-full text-slate-400 text-sm">
          Loading market data...
        </div>
      )}
    </div>
  );
}

export default TickerTape;
