import './skills.css'

export default function Skills() {
  const ctfplayed = [
  {
    title: "Web Application Security",
    skills: [
      { name: "OWASP Top 10", level: "advanced", percent: 90 },
      { name: "Burp Suite", level: "advanced", percent: 88 },
      
      // add 
    ]
  },
  {
    title: "Programming & coding",
    skills: [
      { name: "python", level: "intermediate", percent: 80 },
      { name: "java", level: "intermediate", percent: 70 },
      { name: "C++", level: "intermediate", percent: 70 },
      { name: "JavaScript", level: "intermediate", percent: 70 },
      { name: "node.js", level: "beginner", percent: 40 },
      { name: "React", level: "Beginner", percent: 40 },
      // add 
    ]
  },
  // add more categories
]

const tools = [
  "Burp Suite", "Nmap", "Metasploit",
  "Wireshark", "Gobuster", "ffuf","evilwinrm","Amass"
  // add 
]

const learning = [
  {
    title: "Containers",
    desc: "",
    status: "yet to start ",
    percent: 0
  },
  {
    title: "Mongo DB",
    desc: "",
    status: "yet to start ",
    percent: 0
  },
  // add 
]
  return (
    <div className="skills-page">
      <div className="page-label">skills · thisal nanayakkara</div>

      
      
      <div className="section-title">what I know</div>
      <div className="skills-grid">
        {ctfplayed.map((cat) => (
          <div className="skill-category" key={cat.title}>
            <div className="cat-title">{cat.title}</div>
            <div className="skill-list">
              {cat.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-name">
                    {skill.name}
                    <span>{skill.level}</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="divider"></div>

     
      
      <div className="section-title">my toolkit</div>
      <div className="tools-grid">
        {tools.map((tool) => (
          <div className="tool-tag" key={tool}>
            <div className="tool-dot"></div>
            {tool}
          </div>
        ))}
      </div>

      <div className="divider"></div>

      
      
      <div className="section-title">what's next</div>
      <div className="learning-grid">
        {learning.map((item) => (
          <div className="learn-card" key={item.title}>
            <div className="learn-badge">{item.status}</div>
            <div className="learn-title">{item.title}</div>
            <div className="learn-desc">{item.desc}</div>
            <div className="learn-progress">
              <div
                className="learn-fill"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}