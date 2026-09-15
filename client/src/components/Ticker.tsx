/**
 * Ticker — infinite horizontal marquee under the header.
 * Montgomery-style: lime bg, ink border, rotating asterisk between items.
 */
const ITEMS = [
  'AVAILABLE FOR VOICE-AI WORK',
  'AI ENGINEER @ PLIVO',
  'CNCF SHUBHRA KAR SCHOLAR 2026',
  'BUILDING AT THE EDGE',
  'BANGALORE · IST',
  'OPEN TO COLLABS',
  'QUANTUM · CLOUD-NATIVE · OPEN SOURCE',
];

const Ticker = () => {
  // Duplicate for a seamless loop.
  const track = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker" aria-hidden>
      <div className="ticker__track">
        {track.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-7">
            {t}
            <i className="ast" aria-hidden>✳</i>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
