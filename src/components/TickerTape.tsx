import { useEffect, useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'tv-ticker-tape': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        symbols?: string;
        'color-theme'?: string;
        'is-transparent'?: string;
        'display-mode'?: string;
        locale?: string;
      }, HTMLElement>;
    }
  }
}

export function TickerTape() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load the TradingView web component script
    const existingScript = document.querySelector('script[src*="tv-ticker-tape.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js';
      document.head.appendChild(script);
    }
    setMounted(true);
  }, []);

  return (
    <div
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
      {mounted && (
        <tv-ticker-tape
          symbols="FOREXCOM:SPXUSD,FOREXCOM:NSXUSD,FOREXCOM:DJI,FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD"
          color-theme="dark"
          is-transparent="true"
          display-mode="adaptive"
          locale="en"
        />
      )}
    </div>
  );
}

export default TickerTape;
