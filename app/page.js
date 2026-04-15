export default function Home() {
  return (
    <main>
      {/* TOP BAR */}
      <div style={{ background: '#1a1a1a', padding: '6px 32px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#888' }}>
        <span>📞 385-786-9324 · 5639 Mirabella Dr, Herriman, UT 84096</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
          All Courts Playable
        </span>
      </div>

      {/* NAV */}
      <nav style={{ background: '#0f0f0f', borderBottom: '1px solid #1e1e1e', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ background: '#fff', color: '#0f0f0f', fontWeight: '700', fontSize: '14px', padding: '4px 7px', borderRadius: '4px' }}>TZ</div>
          <div style={{ color: '#fff', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', lineHeight: '1.2' }}>
            TRAINING ZONE
            <span style={{ color: '#888', fontSize: '9px', letterSpacing: '2px', display: 'block' }}>LOVE THE WORK</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href="#programs" style={{ color: '#bbb', fontSize: '13px', textDecoration: 'none' }}>Programs</a>
          <a href="#coaches" style={{ color: '#bbb', fontSize: '13px', textDecoration: 'none' }}>Coaches</a>
          <a href="#memberships" style={{ color: '#bbb', fontSize: '13px', textDecoration: 'none' }}>Memberships</a>
          <a href="#book" style={{ color: '#bbb', fontSize: '13px', textDecoration: 'none' }}>Book a Court</a>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href="/login" style={{ background: 'transparent', border: '1px solid #333', color: '#fff', padding: '7px 16px', borderRadius: '6px', fontSize: '13px', textDecoration: 'none' }}>Log In</a>
          <a href="/signup" style={{ background: '#f97316', border: 'none', color: '#fff', padding: '7px 18px', borderRadius: '6px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>Join Now →</a>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ background: '#0f0f0f', minHeight: '420px', display: 'flex', alignItems: 'center', padding: '64px 32px', borderBottom: '3px solid #f97316', position: 'relative' }}>
        <div style={{ maxWidth: '560px' }}>
          <div style={{ color: '#f97316', fontSize: '11px', letterSpacing: '3px', fontWeight: '600', marginBottom: '16px' }}>HERRIMAN, UTAH · ELITE BASKETBALL TRAINING</div>
          <h1 style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.0', marginBottom: '16px', letterSpacing: '-2px' }}>
            TRAIN LIKE<br />A <span style={{ color: '#f97316' }}>PRO.</span>
          </h1>
          <p style={{ color: '#888', fontSize: '16px', marginBottom: '32px', lineHeight: '1.7', maxWidth: '440px' }}>
            Private coaching, court rentals, and elite programs — all powered by smart gym technology.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="/signup" style={{ background: '#f97316', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: '700', textDecoration: 'none' }}>Join Training Zone</a>
            <a href="#programs" style={{ background: 'transparent', border: '1.5px solid #333', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontSize: '15px', textDecoration: 'none' }}>Explore Programs</a>
          </div>
          <div style={{ marginTop: '48px', display: 'flex', gap: '40px' }}>
            {[['8', 'COURTS'], ['4', 'ELITE COACHES'], ['5am–12am', 'DAILY HOURS']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontSize: '28px', fontWeight: '700' }}>{num}</div>
                <div style={{ fontSize: '11px', color: '#666', letterSpacing: '0.5px', marginTop: '2px' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SOCIAL PROOF TOASTS */}
      <div style={{ background: '#111', padding: '20px 32px' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {[
            { initials: 'JR', name: 'Jordan R.', action: 'just booked a Private Session with Matt', time: '3 minutes ago' },
            { initials: 'SK', name: 'Sarah K.', action: 'signed up for Shot Lab membership', time: '12 minutes ago' },
            { initials: 'TM', name: 'Tyler M.', action: 'registered for Advanced Group Training', time: '28 minutes ago' },
          ].map((t) => (
            <div key={t.initials} style={{ background: '#161616', border: '1px solid #2a2a2a', borderRadius: '10px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px', maxWidth: '280px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px', flexShrink: 0 }}>{t.initials}</div>
              <div>
                <div style={{ fontSize: '12px', color: '#bbb', lineHeight: '1.4' }}><strong style={{ color: '#fff' }}>{t.name}</strong> {t.action}</div>
                <div style={{ fontSize: '10px', color: '#555', marginTop: '2px' }}>{t.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT WE OFFER */}
      <div id="programs" style={{ background: '#111', padding: '64px 32px' }}>
        <div style={{ color: '#f97316', fontSize: '10px', letterSpacing: '3px', fontWeight: '600', marginBottom: '8px' }}>WHAT WE OFFER</div>
        <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>Everything You Need to Level Up</h2>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '40px' }}>One facility. Four ways to train.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {[
            { icon: '🏀', title: 'Private Coaching', desc: '1-on-1 sessions with elite trainers. Custom programming built around your game.' },
            { icon: '⛹️', title: 'Court Rentals', desc: 'Book individual hoops or full courts from 5am to midnight, 7 days a week.' },
            { icon: '📋', title: 'Programs & Classes', desc: 'Rookies, Intermediate, Advanced, Academy, Kidz Zone — structured for every level.', badge: 'NEW' },
            { icon: '📱', title: 'Smart Gym Tech', desc: 'Book courts, track workouts, and manage your membership — all in the YourStats app.', badge: 'APP' },
          ].map((item) => (
            <div key={item.title} style={{ background: '#171717', border: '1px solid #252525', borderRadius: '10px', padding: '24px', position: 'relative' }}>
              {item.badge && <div style={{ position: 'absolute', top: '12px', right: '12px', background: '#f97316', color: '#fff', fontSize: '9px', padding: '2px 7px', borderRadius: '20px', fontWeight: '600' }}>{item.badge}</div>}
              <div style={{ fontSize: '24px', marginBottom: '14px' }}>{item.icon}</div>
              <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px' }}>{item.title}</div>
              <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MEMBERSHIPS */}
      <div id="memberships" style={{ background: '#0f0f0f', padding: '64px 32px' }}>
        <div style={{ color: '#f97316', fontSize: '10px', letterSpacing: '3px', fontWeight: '600', marginBottom: '8px' }}>MEMBERSHIP PLANS</div>
        <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>Find Your Level</h2>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '40px' }}>Click any plan to see everything included →</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {[
            { slug: 'gym-pass', badge: 'GYM PASS', badgeStyle: { background: '#252525', color: '#88
