import './aboutme.css'

export default function Aboutme({ onHomeClick }) {
   const stats = [
  { label: "based in", value: "Sri Lanka" },
  { label: "focus", value: "1% Better than yesterday" },
  { label: "status", value: "available" },
  { label: "bug bounty", value: "active hunter" },
]

const journey = [
    {
    year: "2026",
    title: "Started in University Journey",
    desc: "Started undergraduate degree  programme in B.comp(hons) Information Systems at university of sri jayewardhanapura "
  },

  {
    year: "2025",
    title: "Started in University Journey",
    desc: "Started undergraduate degree  programme in B.comp(hons) Information Systems at university of sri jayewardhanapura "
  },
   {
    year: "2023",
    title: "Get passed from AL exam and qualified to university entry",
    desc: "Qualified to university with higher score in Technology stream"
  },
   {
    year: "2021",
    title: "Started in cybersecurity Journey",
    desc: "Started CyberSecurity carrier journey. Started because a excitement and faced obstacles when I was continuing this path"
  },

 
]

const whatIDo = [
 {
    num: "01",
    title: "Web App Security",
    desc: "Finding vulnerabilities in web applications — OWASP Top 10, logic flaws, auth bypasses, SSRF, XXE, injection attacks."
  },
   {
    num: "02",
    title: "Front-end Development",
    desc: "I make user interfaces using react, javascript, html and Css"
  },
  {
    num: "03",
    title: "Backend & application Development",
    desc: "Design backends using node.js and develop applications using Java,Python and C++"
  },
  {
    num: "04",
    title: "Bug Bounty Hunting",
    desc: "Hunter on HackerOne and Bugcrowd. Focused on high-impact vulnerabilities with detailed technical reports previously. Intent to start again"
  },
]

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };
 
 
 
    return (
     <div className="about">
       <div className="luxury">
                      
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>back</h3>
                                
                            </div>
                        </a>
                    </div>
      <div className="page-label">about &nbsp;·&nbsp; thisal nanayakkara</div>
      
      {/* ── Bio ── */}
      <div className="bio-section">
        <div className="bio-left">
          <div className="section-tag"></div>
          <div className="bio-name">
          Burn the script. Live the unwritten  
          </div>
          <p className="bio-text">
            I am Thisal Nanayakkara, an observer operating in the space between code and the void. 
  While the world is distracted by the rotation of the box, I study the mesh that holds it. 
  I don't just hunt things; I map the shadows where the real mess is hidden.
          </p>
          <p className="bio-text">
            Today I focus on full stack development, Bug bounty hunting,
            and AI red Teaming. Also o I'm the undergraduate of university of sri jayawardhanapura
          who pursuing degree B.comp(hons) Information Systems.
          </p>
        </div>

        <div className="bio-right">
          {stats.map((s) => (
            <div className="bio-stat" key={s.label}>
              <span className="bio-stat-label">{s.label}</span>
              <span className="bio-stat-val">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      {/* ── Journey ── */}
      <div className="journey-section">
        <div className="section-title">my journey</div>
        <div className="timeline">
          {journey.map((item) => (
            <div className="tl-item" key={item.year}>
              <div className="tl-year">{item.year}</div>
              <div className="tl-content">
                <div className="tl-title">{item.title}</div>
                <div className="tl-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      {/* ── What I do ── */}
      <div className="what-section">
        <div className="section-title">what I do</div>
        <div className="what-grid">
          {whatIDo.map((item) => (
            <div className="what-card" key={item.num}>
              <div className="what-num">{item.num}</div>
              <div className="what-title">{item.title}</div>
              <div className="what-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
    )
}