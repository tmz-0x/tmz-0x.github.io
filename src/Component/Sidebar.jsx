import { Link,useLocation } from 'react-router-dom';



  const navItems = [
    {
      label: "Home",
      path: "/",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12L12 3l9 9" />
          <path d="M9 21V12h6v9" />
        </svg>
      ),
    },
    {
      label: "Projects",
      path: "/projects",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },
    {
      label: "Skills",
      path: "/skills",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19h16" />
          <path d="M4 12h16" />
          <path d="M4 5h16" />
        </svg>
      ),
    },
    {
      label: "CTF",
      path: "/ctf",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ),
    },
   /* {
      label: "Bugs",
      path: "/bugs",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 7a5 5 0 0 1 5 5" />
          <path d="M12 7a5 5 0 0 0-5 5" />
          <path d="M6 20h12" />
          <path d="M4 11h16" />
        </svg>
      ),
    },*/
  ]

export default function Sidebar() {
  const location = useLocation()
  
  return (
    <div className='sidebar-page'>
      <div className="sidebar-container"> 
        <aside className="sidebar">
          {/* logo here */}
          <nav>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <div key={item.path} className='nav-pill'>
                  <Link
                    to={item.path}
                    className={isActive ? "active" : "inactive"}
                    aria-label={item.label}
                  >
                    {item.icon}
                  </Link>
                  <span className="tooltip">{item.label}</span>
                </div>
              )
            })}
          </nav>
        </aside>
      </div>
    </div>
  )
}