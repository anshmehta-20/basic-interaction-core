
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import DotGrid from '../components/animations/DotGrid'
import TiltedCard from '../components/cards/TiltedCard'
import '../styles/dashboard.css'

export const AvengerDashboard = () => {
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
      icon: 'fas fa-rocket',
      title: 'Active Missions',
      value: '3'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Completed Missions',
      value: '45'
    },
    {
      icon: 'fas fa-percentage',
      title: 'Attendance Rate',
      value: '94%'
    },
    {
      icon: 'fas fa-coins',
      title: 'Current Balance',
      value: '₹ 50,000'
    }
  ]

  const navigationItems = [
    { id: 'overview', label: 'Home Base', icon: 'fas fa-home' },
    { id: 'missions', label: 'My Missions', icon: 'fas fa-rocket' },
    { id: 'attendance', label: 'Check-In', icon: 'fas fa-user-check' },
    { id: 'balance', label: 'Account Balance', icon: 'fas fa-wallet' },
    { id: 'feedback', label: 'Send Feedback', icon: 'fas fa-comment-dots' },
    { id: 'announcements', label: 'Announcements', icon: 'fas fa-bullhorn' },
    { id: 'profile', label: 'Profile', icon: 'fas fa-user-cog' }
  ]

  return (
    <div className="content-wrapper avenger-dashboard">
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1 
      }}>
        <DotGrid
          dotSize={2}
          gap={18}
          baseColor="#2a2a2a"
          activeColor={isDark ? "#2507ff" : "#2507ff"}
          proximity={80}
          shockRadius={120}
          shockStrength={4}
          resistance={800}
          returnDuration={1.2}
        />
      </div>
      
      <header className="dashboard-header">
        <h1 className="dashboard-title">Avenger<span className='dashboard-title-span'>  Dashboard</span></h1>
        
        <nav className="horizontal-nav">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </button>
          ))}
          <button className="logout-nav-btn" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </button>
        </nav>
      </header>


      <main className="dashboard-main-content">
          {activeSection === 'overview' && (
            <section className="dashboard-section">
              <div className="tilted-cards-grid">
                {dashboardStats.map((stat, index) => (
                  <TiltedCard
                    key={index}
                    altText={stat.title}
                    captionText={stat.title}
                    containerHeight="280px"
                    containerWidth="100%"
                    imageHeight="280px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={false}
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
                <h3><i className="fas fa-bolt"></i> Quick Actions</h3>
                <div className="quick-actions">
                  <button className="action-btn" onClick={() => handleNavClick('attendance')}>
                    <i className="fas fa-user-check"></i>
                    <span>Mark Attendance</span>
                  </button>
                  <button className="action-btn" onClick={() => handleNavClick('missions')}>
                    <i className="fas fa-rocket"></i>
                    <span>View Missions</span>
                  </button>
                  <button className="action-btn" onClick={() => handleNavClick('feedback')}>
                    <i className="fas fa-comment-dots"></i>
                    <span>Send Feedback</span>
                  </button>
                  <button className="action-btn" onClick={() => handleNavClick('announcements')}>
                    <i className="fas fa-bullhorn"></i>
                    <span>View Announcements</span>
                  </button>
                </div>
              </div>

              <div className="card">
                <h3><i className="fas fa-clock"></i> Recent Activity</h3>
                <div className="activity-timeline">
                  <div className="activity-item">
                    <i className="fas fa-rocket activity-icon"></i>
                    <span>Mission "Operation Shield" assigned</span>
                    <time>2 hours ago</time>
                  </div>
                  <div className="activity-item">
                    <i className="fas fa-user-check activity-icon"></i>
                    <span>Attendance marked for today</span>
                    <time>8 hours ago</time>
                  </div>
                  <div className="activity-item">
                    <i className="fas fa-trophy activity-icon"></i>
                    <span>Mission "Rescue Alpha" completed</span>
                    <time>1 day ago</time>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Add other sections as needed */}
          {activeSection !== 'overview' && (
            <section className="dashboard-section">
              <div className="card">
                <p>This section is under development.</p>
              </div>
            </section>
          )}
      </main>
    </div>
  )
}
