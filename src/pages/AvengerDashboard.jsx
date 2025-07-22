
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
    { id: 'overview', label: 'Overview', icon: 'fas fa-home' },
    { id: 'missions', label: 'Missions', icon: 'fas fa-rocket' },
    { id: 'training', label: 'Training', icon: 'fas fa-dumbbell' },
    { id: 'team', label: 'Team', icon: 'fas fa-users' },
    { id: 'reports', label: 'Reports', icon: 'fas fa-chart-line' },
    { id: 'attendance', label: 'Attendance', icon: 'fas fa-user-check' },
    { id: 'profile', label: 'Profile', icon: 'fas fa-user-cog' }
  ]

  return (
    <div className="avenger-dashboard">
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
          activeColor="#5227FF"
          proximity={80}
          shockRadius={120}
          shockStrength={4}
          resistance={800}
          returnDuration={1.2}
        />
      </div>
      
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1 className="dashboard-title">Avenger Dashboard</h1>
        </header>

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

        <main className="dashboard-main-content">
          {activeSection === 'overview' && (
            <div className="dashboard-section">
              <h2 className="section-title">Mission Overview</h2>
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
            </div>
          )}

          {activeSection === 'missions' && (
            <div className="dashboard-section">
              <h2 className="section-title">My Missions</h2>
              <div className="card">
                <p>Mission tracking interface coming soon...</p>
              </div>
            </div>
          )}

          {activeSection === 'training' && (
            <div className="dashboard-section">
              <h2 className="section-title">Training Programs</h2>
              <div className="card">
                <p>Training modules coming soon...</p>
              </div>
            </div>
          )}

          {activeSection === 'team' && (
            <div className="dashboard-section">
              <h2 className="section-title">Team Directory</h2>
              <div className="card">
                <p>Team member directory coming soon...</p>
              </div>
            </div>
          )}

          {activeSection === 'reports' && (
            <div className="dashboard-section">
              <h2 className="section-title">Mission Reports</h2>
              <div className="card">
                <p>Report generation system coming soon...</p>
              </div>
            </div>
          )}

          {activeSection === 'attendance' && (
            <div className="dashboard-section">
              <h2 className="section-title">Attendance Tracking</h2>
              <div className="card">
                <p>Attendance management coming soon...</p>
              </div>
            </div>
          )}

          {activeSection === 'profile' && (
            <div className="dashboard-section">
              <h2 className="section-title">Profile Settings</h2>
              <div className="card">
                <p>Profile management coming soon...</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
