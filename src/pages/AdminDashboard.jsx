
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import DotGrid from '../components/animations/DotGrid'
import TiltedCard from '../components/cards/TiltedCard'
import '../styles/dashboard.css'

export const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview')
  const { isDark, toggleTheme } = useTheme()
  const navigate = useNavigate()

  const handleNavClick = (section) => {
    setActiveSection(section)
  }

  const handleLogout = () => {
    navigate('/')
  }

  // Dashboard stats data
  const dashboardStats = [
    {
      icon: 'fas fa-users',
      title: 'Total Avengers',
      value: '24',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=center'
    },
    {
      icon: 'fas fa-crosshairs',
      title: 'Active Missions',
      value: '8',
      image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=300&fit=crop&crop=center'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Threats Neutralized',
      value: '156',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&crop=center'
    },
    {
      icon: 'fas fa-globe',
      title: 'Cities Protected',
      value: '47',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=300&fit=crop&crop=center'
    }
  ]
  return (
    <div className="content-wrapper admin-dashboard">
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1 
      }}>
        <DotGrid
          dotSize={8}
          gap={22}
          baseColor="#2a2a2a"
          activeColor="#ff4757"
          proximity={80}
          shockRadius={120}
          shockStrength={4}
          resistance={800}
          returnDuration={1.2}
        />
      </div>
      
      <header className="dashboard-header">
        <h1 className="dashboard-title">Avengers Command Center</h1>
        <p className="welcome-message">Earth's Mightiest Heroes Dashboard</p>
      </header>

      <div className="dashboard-layout-container">
        <nav className="sidebar">
          <ul>
            <li className={`nav-item ${activeSection === 'overview' ? 'active' : ''}`} onClick={() => handleNavClick('overview')}>
              <i className="fas fa-chart-line"></i>
              <span>Mission Overview</span>
            </li>
            <li className={`nav-item ${activeSection === 'heroes' ? 'active' : ''}`} onClick={() => handleNavClick('heroes')}>
              <i className="fas fa-users"></i>
              <span>Heroes Registry</span>
            </li>
            <li className={`nav-item ${activeSection === 'missions' ? 'active' : ''}`} onClick={() => handleNavClick('missions')}>
              <i className="fas fa-crosshairs"></i>
              <span>Active Missions</span>
            </li>
            <li className={`nav-item ${activeSection === 'attendance' ? 'active' : ''}`} onClick={() => handleNavClick('attendance')}>
              <i className="fas fa-calendar-check"></i>
              <span>Attendance</span>
            </li>
            <li className={`nav-item ${activeSection === 'reports' ? 'active' : ''}`} onClick={() => handleNavClick('reports')}>
              <i className="fas fa-file-alt"></i>
              <span>Mission Reports</span>
            </li>
            <li className={`nav-item ${activeSection === 'alerts' ? 'active' : ''}`} onClick={() => handleNavClick('alerts')}>
              <i className="fas fa-exclamation-triangle"></i>
              <span>Threat Alerts</span>
            </li>
            <li className={`nav-item ${activeSection === 'settings' ? 'active' : ''}`} onClick={() => handleNavClick('settings')}>
              <i className="fas fa-cog"></i>
              <span>System Settings</span>
            </li>
          </ul>
          <button className="logout-sidebar-btn" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </button>
        </nav>

        <main className="dashboard-main-content">
          {activeSection === 'overview' && (
            <section className="dashboard-section">
              <h2 className="section-title">
                <i className="fas fa-chart-line"></i>
                Mission Overview
              </h2>
              
              <div className="tilted-cards-grid">
                {dashboardStats.map((stat, index) => (
                  <TiltedCard
                    key={index}
                    imageSrc={stat.image}
                    altText={stat.title}
                    captionText={stat.title}
                    containerHeight="280px"
                    containerWidth="100%"
                    imageHeight="280px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div>
                        <div className="stat-icon">
                          <i className={stat.icon}></i>
                        </div>
                        <div className="stat-title">{stat.title}</div>
                        <div className="stat-value">{stat.value}</div>
                      </div>
                    }
                  />
                ))}
              </div>

              <div className="card">
                <h3><i className="fas fa-clock"></i> Recent Activities</h3>
                <div className="activity-list">
                  <div className="activity-item">
                    <i className="fas fa-user-plus activity-icon"></i>
                    <span>Spider-Man joined the team</span>
                    <time>2 hours ago</time>
                  </div>
                  <div className="activity-item">
                    <i className="fas fa-crosshairs activity-icon"></i>
                    <span>Mission "Operation Thunder" completed</span>
                    <time>4 hours ago</time>
                  </div>
                  <div className="activity-item">
                    <i className="fas fa-exclamation-triangle activity-icon"></i>
                    <span>New threat detected in New York</span>
                    <time>6 hours ago</time>
                  </div>
                  <div className="activity-item">
                    <i className="fas fa-shield-alt activity-icon"></i>
                    <span>Defensive systems upgraded</span>
                    <time>1 day ago</time>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'heroes' && (
            <section className="dashboard-section">
              <h2 className="section-title">
                <i className="fas fa-users"></i>
                Heroes Registry
              </h2>
              
              <div className="avengers-grid">
                <div className="avenger-card">
                  <div className="avenger-avatar">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <div className="avenger-info">
                    <h4>Tony Stark</h4>
                    <div className="avenger-alias">Iron Man</div>
                    <div className="avenger-role">Tech Specialist</div>
                    <div className="avenger-stats">
                      <div className="stat">
                        <span className="stat-label">Power Level</span>
                        <span className="stat-value">95</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Missions</span>
                        <span className="stat-value">127</span>
                      </div>
                    </div>
                    <div className="avenger-actions">
                      <button className="button primary-button small-button">View Profile</button>
                      <button className="button small-button">Contact</button>
                    </div>
                  </div>
                </div>

                <div className="avenger-card">
                  <div className="avenger-avatar">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="avenger-info">
                    <h4>Steve Rogers</h4>
                    <div className="avenger-alias">Captain America</div>
                    <div className="avenger-role">Team Leader</div>
                    <div className="avenger-stats">
                      <div className="stat">
                        <span className="stat-label">Power Level</span>
                        <span className="stat-value">88</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Missions</span>
                        <span className="stat-value">203</span>
                      </div>
                    </div>
                    <div className="avenger-actions">
                      <button className="button primary-button small-button">View Profile</button>
                      <button className="button small-button">Contact</button>
                    </div>
                  </div>
                </div>

                <div className="avenger-card">
                  <div className="avenger-avatar">
                    <i className="fas fa-hammer"></i>
                  </div>
                  <div className="avenger-info">
                    <h4>Thor Odinson</h4>
                    <div className="avenger-alias">God of Thunder</div>
                    <div className="avenger-role">Heavy Assault</div>
                    <div className="avenger-stats">
                      <div className="stat">
                        <span className="stat-label">Power Level</span>
                        <span className="stat-value">98</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Missions</span>
                        <span className="stat-value">89</span>
                      </div>
                    </div>
                    <div className="avenger-actions">
                      <button className="button primary-button small-button">View Profile</button>
                      <button className="button small-button">Contact</button>
                    </div>
                  </div>
                </div>

                <div className="avenger-card">
                  <div className="avenger-avatar">
                    <i className="fas fa-spider"></i>
                  </div>
                  <div className="avenger-info">
                    <h4>Peter Parker</h4>
                    <div className="avenger-alias">Spider-Man</div>
                    <div className="avenger-role">Scout & Recon</div>
                    <div className="avenger-stats">
                      <div className="stat">
                        <span className="stat-label">Power Level</span>
                        <span className="stat-value">82</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Missions</span>
                        <span className="stat-value">45</span>
                      </div>
                    </div>
                    <div className="avenger-actions">
                      <button className="button primary-button small-button">View Profile</button>
                      <button className="button small-button">Contact</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Add other sections as needed */}
          {activeSection !== 'overview' && activeSection !== 'heroes' && (
            <section className="dashboard-section">
              <h2 className="section-title">
                <i className="fas fa-cog"></i>
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              </h2>
              <div className="card">
                <p>This section is under development.</p>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}
