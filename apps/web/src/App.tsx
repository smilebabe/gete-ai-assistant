const stats = [
  { label: 'Active users', value: '24.8K' },
  { label: 'Skill completions', value: '18.4K' },
  { label: 'Response score', value: '96%' },
  { label: 'Channels live', value: '8' }
];

const quickActions = [
  'Check wallet',
  'Pay a bill',
  'Find property',
  'Get help'
];

export default function App() {
  return (
    <main className="page-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">GETE</span>
          <span className="brand-name">AI Assistant</span>
        </div>

        <nav className="nav">
          <a className="nav-item active">Overview</a>
          <a className="nav-item">Messages</a>
          <a className="nav-item">Skills</a>
          <a className="nav-item">Analytics</a>
          <a className="nav-item">Settings</a>
        </nav>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Operations dashboard</p>
            <h1>Welcome back, GETE team</h1>
          </div>
          <button className="primary-btn">New conversation</button>
        </header>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-label">{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>

        <div className="panel-grid">
          <div className="panel large-panel">
            <div className="panel-header">
              <h2>Conversation overview</h2>
              <span className="chip success">Healthy</span>
            </div>
            <div className="line-chart" aria-label="Conversation overview chart">
              <span className="bar b1" />
              <span className="bar b2" />
              <span className="bar b3" />
              <span className="bar b4" />
              <span className="bar b5" />
              <span className="bar b6" />
              <span className="bar b7" />
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>Quick actions</h2>
            </div>
            <div className="action-list">
              {quickActions.map((action) => (
                <button key={action} className="action-btn">{action}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="panel wide-panel">
          <div className="panel-header">
            <h2>Recent interactions</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Channel</th>
                <th>Skill</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Abebe T.</td>
                <td>Chat</td>
                <td>Wallet balance</td>
                <td><span className="status success">Completed</span></td>
              </tr>
              <tr>
                <td>Selam A.</td>
                <td>Voice</td>
                <td>Bill payment</td>
                <td><span className="status warning">Pending</span></td>
              </tr>
              <tr>
                <td>Bekele M.</td>
                <td>SMS</td>
                <td>Property lookup</td>
                <td><span className="status success">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
