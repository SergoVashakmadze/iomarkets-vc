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
        { proName: 'BINANCE:BTCUSDT', title: 'BTC/USDT' },
        { proName: 'BINANCE:ETHUSDT', title: 'ETH/USDT' },
        { proName: 'BINANCE:SOLUSDT', title: 'SOL/USDT' },
        { proName: 'INDEX:SPX', title: 'S&P 500' },
        { proName: 'INDEX:DJI', title: 'Dow Jones' },
        { proName: 'FX_IDC:EURUSD', title: 'EUR/USD' },
        { proName: 'CRYPTOCAP:USDC', title: 'USDC' },
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
      <div className="fixed top-0 left-0 right-0 z-[60] bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 h-[46px]" />
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] tradingview-widget-container bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="tradingview-widget-container__widget" ref={containerRef}></div>
    </div>
  );
}

export default TickerTape;
