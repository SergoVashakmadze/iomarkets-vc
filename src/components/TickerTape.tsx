'use client';

import { useEffect, useState, useRef } from 'react';

export function TickerTape() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="tv-ticker-tape.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js';
      document.head.appendChild(script);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && containerRef.current) {
      containerRef.current.innerHTML = '';
      const tickerElement = document.createElement('tv-ticker-tape');
      tickerElement.setAttribute('symbols', 'FOREXCOM:SPXUSD,FOREXCOM:NSXUSD,FOREXCOM:DJI,FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD');
      containerRef.current.appendChild(tickerElement);
    }
  }, [mounted]);

  return (
    <div
      ref={containerRef}
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
    />
  );
}

export default TickerTape;
