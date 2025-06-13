// File: src/Layout.jsx

import React, { useState } from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';

function Layout({ children }) {
  // localStorage’de token var mı?
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const [showNetworkSub, setShowNetworkSub] = useState(false);
  const toggleNetworkSubMenu = () => {
    setShowNetworkSub(!showNetworkSub);
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      {/* Üst Navbar */}
      <nav className="navbar navbar-light bg-white shadow-sm" style={{ height: '60px' }}>
        <div className="container-fluid d-flex align-items-center justify-content-between h-100">
          <div className="d-flex flex-column">
            <span className="navbar-brand fs-3 mb-0">NetGate</span>
            <span className="text-body fs-6" style={{ marginTop: '-3px' }}>
              Hoş Geldiniz, Sistem Yöneticisi
            </span>
          </div>
        </div>
      </nav>

      {/* İçerik + Yan Menü */}
      <div className="flex-grow-1">
        <div className="row g-0 h-100">
          {/* Sol Menü */}
          <div
            className="col-auto bg-light border-end"
            style={{ width: '220px', minHeight: 'calc(100vh - 60px)' }}
          >
            <div className="p-3">
              <h6 className="px-3 pt-3 pb-2 text-muted text-uppercase small">Menü</h6>
              <ul className="nav flex-column">
                <li className="nav-item mb-1">
                  <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/dashboard">
                    Ana Sayfa
                  </NavLink>
                </li>
                <li className="nav-item mb-1">
                  <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/logs">
                    Log Yönetimi
                  </NavLink>
                </li>
                <li className="nav-item mb-1">
                  <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/updates">
                    Güncellemeler
                  </NavLink>
                </li>
                <li className="nav-item mb-1">
                  <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/rules">
                    Güvenlik Kuralları
                  </NavLink>
                </li>

                {/* Kural Grupları */}
                <li className="nav-item mb-1">
                  <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/groups">
                    Kural Grupları
                  </NavLink>
                </li>

                <li className="nav-item mb-1">
                  <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/reports">
                    Raporlar
                  </NavLink>
                </li>
                <li className="nav-item mb-1">
                  <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/settings">
                    Sistem Ayarları
                  </NavLink>
                </li>

                {/* DNS Yönetimi */}
                <li className="nav-item mb-1">
                  <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/dns-management">
                    DNS Yönetimi
                  </NavLink>
                </li>

                {/* Network alt menü */}
                <li className="nav-item mb-1">
                  <div
                    className="nav-link"
                    style={{ cursor: 'pointer' }}
                    onClick={toggleNetworkSubMenu}
                  >
                    Network {showNetworkSub ? '▼' : '▶'}
                  </div>
                  {showNetworkSub && (
                    <ul className="nav flex-column ms-3 mt-1">
                      <li className="nav-item mb-1">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/network">
                          Interface Ayarları
                        </NavLink>
                      </li>
                      <li className="nav-item mb-1">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/nat">
                          NAT Ayarları
                        </NavLink>
                      </li>
                      <li className="nav-item mb-1">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/routes">
                          Rota Yönetimi
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* Sağdaki esas içerik */}
          <div className="col p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
