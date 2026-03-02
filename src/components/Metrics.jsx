import { useState } from 'react'

function Metrics() {
  const [flightHeight, setFlightHeight] = useState(120)
  const [screens, setScreens] = useState(8)
  const [screenSize, setScreenSize] = useState(200)
  const [cityDensity, setCityDensity] = useState(18161)

  const visibilityData = [
    { radius: 0.5, area: 0.7854, impressions: 14264 },
    { radius: 1.0, area: 3.1416, impressions: 57054 },
    { radius: 1.5, area: 7.0686, impressions: 128373 },
    { radius: 2.0, area: 12.5664, impressions: 228218 },
    { radius: 3.0, area: 28.2743, impressions: 513490 },
    { radius: 4.0, area: 50.2655, impressions: 912871 }
  ]

  const totalCanvas = screens * screenSize
  const totalCanvasM2 = (totalCanvas * 0.092903).toFixed(0)
  const practicalRadius = (flightHeight / 60).toFixed(1)

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FF8C0A' }}>
      <section style={{ marginBottom: '4rem', background: '#2a2a2a', padding: '4rem 3rem', borderRadius: '16px', width: '100%' }} className="metrics-section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="metrics-grid">
          <div style={{ order: 1 }} className="metrics-controls">
            <h1>Skyvertising Metrics</h1>
            <h2>Visibility &amp; Physical Impressions</h2>
            <p style={{ color: '#CCC', marginBottom: '2rem', lineHeight: '1.6' }}>
              Estimate how altitude, canvas size and city density translate into real, physical impressions on the ground.
            </p>

            <div style={{ background: '#2a2a2a', padding: '1rem', borderRadius: '8px', marginBottom: '2rem', fontWeight: 500, color: '#FFD700', border: '1px solid #333' }}>
              Canvas: {screens} screens × {screenSize} sq ft each = {totalCanvas.toLocaleString()} sq ft ({totalCanvasM2} m²).
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }} className="metrics-inputs">
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#1E90FF' }}>Flight height (ft)</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <input 
                    type="range" 
                    min="100" 
                    max="140" 
                    step="20" 
                    value={flightHeight}
                    onChange={(e) => setFlightHeight(Number(e.target.value))}
                    style={{ flex: 1, height: '6px', borderRadius: '3px', background: '#333', outline: 'none' }}
                  />
                  <span style={{ minWidth: '80px', fontWeight: 600, color: '#FF0000' }}>{flightHeight} ft</span>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#1E90FF' }}># Screens</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <input 
                    type="range" 
                    min="4" 
                    max="12" 
                    step="1" 
                    value={screens}
                    onChange={(e) => setScreens(Number(e.target.value))}
                    style={{ flex: 1, height: '6px', borderRadius: '3px', background: '#333', outline: 'none' }}
                  />
                  <span style={{ minWidth: '80px', fontWeight: 600, color: '#FF0000' }}>{screens}</span>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#1E90FF' }}>Per-screen size (sq ft)</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <input 
                    type="range" 
                    min="100" 
                    max="300" 
                    step="50" 
                    value={screenSize}
                    onChange={(e) => setScreenSize(Number(e.target.value))}
                    style={{ flex: 1, height: '6px', borderRadius: '3px', background: '#333', outline: 'none' }}
                  />
                  <span style={{ minWidth: '80px', fontWeight: 600, color: '#FF0000' }}>{screenSize}</span>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#1E90FF' }}>City density (people/km²)</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <input 
                    type="range" 
                    min="5000" 
                    max="30000" 
                    step="1000" 
                    value={cityDensity}
                    onChange={(e) => setCityDensity(Number(e.target.value))}
                    style={{ flex: 1, height: '6px', borderRadius: '3px', background: '#333', outline: 'none' }}
                  />
                  <span style={{ minWidth: '80px', fontWeight: 600, color: '#FF0000' }}>{cityDensity.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <p style={{ background: '#2a2a2a', padding: '1rem', borderRadius: '8px', marginBottom: '2rem', fontWeight: 500, color: '#FFD700', border: '1px solid #333' }}>
              At {flightHeight} ft, practical radius ≈ {practicalRadius} km in city conditions.
            </p>
          </div>

          <div style={{ order: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="metrics-table">
            <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 4px 12px rgba(255, 215, 0, 0.2)', borderRadius: '12px', overflow: 'hidden' }}>
              <thead>
                <tr>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #333', background: '#FFD700', color: '#000', fontWeight: 600 }}>Radius (km)</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #333', background: '#FFD700', color: '#000', fontWeight: 600 }}>Area (km²)</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #333', background: '#FFD700', color: '#000', fontWeight: 600 }}>Impressions</th>
                </tr>
              </thead>
              <tbody>
                {visibilityData.map((row) => (
                  <tr key={row.radius}>
                    <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #333', color: '#FFF', background: '#2a2a2a' }}>{row.radius.toFixed(1)}</td>
                    <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #333', color: '#FFF', background: '#2a2a2a' }}>{row.area.toFixed(4)}</td>
                    <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #333', color: '#FFF', background: '#2a2a2a' }}>{row.impressions.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <style>{`
        @media (max-width: 768px) {
          .metrics-section { padding: 2rem 1.5rem !important; }
          .metrics-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .metrics-controls { order: 1 !important; }
          .metrics-table { order: 2 !important; }
          .metrics-inputs { grid-template-columns: 1fr !important; }
          h1 { font-size: 2rem !important; }
          h2 { font-size: 1.3rem !important; }
          table { font-size: 0.9rem !important; }
          th, td { padding: 0.75rem !important; }
        }
      `}</style>
    </div>
  )
}

export default Metrics
