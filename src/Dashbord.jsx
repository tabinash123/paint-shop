import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const styles = {
    app: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#F7F7F7',
      transition: 'background-color 0.3s',
    },
    header: {
      backgroundColor: '#FF6B6B',
      color: '#FFFFFF',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      marginBottom: '20px',
    },
    appBody: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
    },
    sidebar: {
      width: '200px',
      backgroundColor: '#FF9F1C',
      color: '#FFFFFF',
      padding: '20px',
      borderRadius: '10px',
      marginRight: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    sidebarList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    sidebarItem: {
      padding: '10px 20px',
      cursor: 'pointer',
      margin: '5px 0',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
    sidebarItemActive: {
      backgroundColor: '#FF6B6B',
    },
    mainContent: {
      flex: 1,
      padding: '20px',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '800px',
    },
    widget: {
      backgroundColor: '#48DBFB',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    },
    widgetTitle: {
      fontSize: '18px',
      marginBottom: '10px',
      color: '#2C3A47',
    },
    widgetContent: {
      fontSize: '14px',
      color: '#2C3A47',
    },
    chart: {
      width: '100%',
      height: '200px',
      backgroundColor: '#FFFFFF',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    calendar: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      boxSizing: 'border-box',
    },
    notifications: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      boxSizing: 'border-box',
    },
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={{ margin: 0 }}>Dashboard</h1>
      </header>
      <div style={styles.appBody}>
        <aside style={styles.sidebar}>
          <ul style={styles.sidebarList}>
            {['Home', 'Analytics', 'Settings'].map((tab) => (
              <li
                key={tab}
                style={{
                  ...styles.sidebarItem,
                  ...(activeTab === tab ? styles.sidebarItemActive : {}),
                }}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </aside>
        <main style={{ ...styles.mainContent, opacity: activeTab === 'Home' ? 1 : 0.6 }}>
          {activeTab === 'Home' && (
            <>
              <div style={styles.widget} onClick={() => console.log('Sales overview clicked')}>
                <h2 style={styles.widgetTitle}>Sales Overview</h2>
                <p style={styles.widgetContent}>Total Sales: $10,000</p>
                <p style={styles.widgetContent}>This Month: $2,000</p>
              </div>
              <div style={styles.widget} onClick={() => console.log('User engagement clicked')}>
                <h2 style={styles.widgetTitle}>User Engagement</h2>
                <p style={styles.widgetContent}>Active Users: 1,200</p>
                <p style={styles.widgetContent}>New Users: 300</p>
              </div>
              <div style={styles.widget} onClick={() => console.log('Server status clicked')}>
                <h2 style={styles.widgetTitle}>Server Status</h2>
                <p style={styles.widgetContent}>Server Uptime: 
                99.99%</p>
                <p style={styles.widgetContent}>Issues: 0</p>
              </div>
              <div style={styles.chart}>
                {/* Chart component (e.g., using a library like Chart.js) */}
                {/* Replace this comment with your chart component */}
                <p style={{ textAlign: 'center', marginTop: '50px', color: '#6C7A89' }}>Chart Component</p>
              </div>
              <div style={styles.calendar}>
                {/* Calendar component (e.g., using a library like react-calendar) */}
                {/* Replace this comment with your calendar component */}
                <p style={{ textAlign: 'center', marginTop: '50px', color: '#6C7A89' }}>Calendar Component</p>
              </div>
              <div style={styles.notifications}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2C3A47' }}>Notifications</h2>
                {/* Notifications component */}
                {/* Replace this comment with your notifications component */}
                <p style={{ textAlign: 'center', color: '#6C7A89' }}>No new notifications</p>
              </div>
            </>
          )}
          {activeTab === 'Analytics' && (
            <div style={styles.widget}>
              <h2 style={styles.widgetTitle}>Analytics Data</h2>
              <p style={styles.widgetContent}>Coming Soon...</p>
            </div>
          )}
          {activeTab === 'Settings' && (
            <div style={styles.widget}>
              <h2 style={styles.widgetTitle}>Settings</h2>
              <p style={styles.widgetContent}>Configuration Options</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
