import { useState, useEffect } from 'react';

export default function Loader({ onDone }) {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const fadeOut = setTimeout(() => setHiding(true), 2400);
    const finish  = setTimeout(onDone, 3000);
    return () => { clearTimeout(fadeOut); clearTimeout(finish); };
  }, [onDone]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#09090d',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      opacity: hiding ? 0 : 1,
      transition: 'opacity 0.6s ease',
      pointerEvents: hiding ? 'none' : 'all',
    }}>
      {/* Glow backdrop */}
      <div style={{
        position: 'absolute', width: '320px', height: '320px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Spinner ring wraps the initials */}
      <div style={{ position: 'relative', width: '110px', height: '110px', marginBottom: '28px' }}>
        {/* Track */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          border: '3px solid #1e1e2e',
        }} />
        {/* Spinning arc */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          border: '3px solid transparent',
          borderTopColor: '#60a5fa',
          borderRightColor: '#a78bfa',
          animation: 'spin 1s linear infinite',
        }} />
        {/* Initials inside ring */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '32px', fontWeight: '900',
          background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          letterSpacing: '-1px',
          animation: 'loaderUp 0.5s cubic-bezier(0.22,1,0.36,1) both',
        }}>
          SH
        </div>
      </div>

      {/* Name */}
      <div style={{
        color: '#4b5563', fontSize: '11px', letterSpacing: '5px',
        textTransform: 'uppercase',
        animation: 'loaderUp 0.5s 0.15s cubic-bezier(0.22,1,0.36,1) both',
      }}>
        Samni Hasnath
      </div>
    </div>
  );
}
