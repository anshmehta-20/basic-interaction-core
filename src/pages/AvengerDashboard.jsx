
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
      value: '3',
      image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=300&fit=crop&crop=center'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Completed Missions',
      value: '45',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&crop=center'
    },
    {
      icon: 'fas fa-percentage',
      title: 'Attendance Rate',
      value: '94%',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=center'
    },
    {
      icon: 'fas fa-coins',
      title: 'Current Balance',
      value: '₹ 50,000',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=300&fit=crop&crop=center'
    }
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
          dotSize={8}
          gap={22}
          baseColor="#2a2a2a"
          activeColor="#1507ff"
          proximity={80}
          shockRadius={120}
          shockStrength={4}
          resistance={800}
          returnDuration={1.2}
        />
      </div>
      
      <header className="dashboard-header">
        <h1 className="dashboard-title">Avengers Portal</h1>
        <p className="welcome-message">Welcome, <span>Agent!</span></p>
      </header>

      <div className="dashboard-layout-container">
        <nav className="sidebar">
          <ul>
            <li className={`nav-item ${activeSection === 'overview' ? 'active' : ''}`} onClick={() => handleNavClick('overview')}>
              <i className="fas fa-home"></i> Home Base
            </li>
            <li className={`nav-item ${activeSection === 'missions' ? 'active' : ''}`} onClick={() => handleNavClick('missions')}>
              <i className="fas fa-rocket"></i> My Missions
            </li>
            <li className={`nav-item ${activeSection === 'attendance' ? 'active' : ''}`} onClick={() => handleNavClick('attendance')}>
              <i className="fas fa-user-check"></i> Check-In
            </li>
            <li className={`nav-item ${activeSection === 'balance' ? 'active' : ''}`} onClick={() => handleNavClick('balance')}>
              <i className="fas fa-wallet"></i> Account Balance
            </li>
            <li className={`nav-item ${activeSection === 'feedback' ? 'active' : ''}`} onClick={() => handleNavClick('feedback')}>
              <i className="fas fa-comment-dots"></i> Send Feedback
            </li>
            <li className={`nav-item ${activeSection === 'announcements' ? 'active' : ''}`} onClick={() => handleNavClick('announcements')}>
              <i className="fas fa-bullhorn"></i> Announcements
            </li>
            <li className={`nav-item ${activeSection === 'profile' ? 'active' : ''}`} onClick={() => handleNavClick('profile')}>
              <i className="fas fa-user-cog"></i> Profile
            </li>
          </ul>
          <button className="logout-sidebar-btn" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </nav>

        <main className="dashboard-main-content">
          {activeSection === 'overview' && (
            <section className="dashboard-section">
              <h2 className="section-title">Home Base</h2>
              
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
