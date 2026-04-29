import './ctf.css';

export default function CTF() {
  
       const projects = [
    {
      id: 1,
      category: "web_appsec",
      name: "XSSHunter-Pro",
      desc: "Automated XSS payload generator and blind XSS callback server. Supports DOM, reflected, and stored vectors with custom payload encoding.",
      tags: [
        { label: "python", type: "purple" },
        { label: "flask", type: "purple" },
        { label: "web_appsec", type: "dim" },
        { label: "payloads", type: "dim" }
      ],
      hackthebox: "https://github.com/yourusername/xsshunter-pro"
    },
    {
      id: 2,
      category: "web_appsec",
      name: "XSSHunter-Pro",
      desc: "Automated XSS payload generator and blind XSS callback server. Supports DOM, reflected, and stored vectors with custom payload encoding.",
      tags: [
        { label: "python", type: "purple" },
        { label: "flask", type: "purple" },
        { label: "web_appsec", type: "dim" },
        { label: "payloads", type: "dim" }
      ],
      hackthebox: "https://github.com/yourusername/xsshunter-pro"
    },
    {
      id: 3,
      category: "web_appsec",
      name: "XSSHunter-Pro",
      desc: "Automated XSS payload generator and blind XSS callback server. Supports DOM, reflected, and stored vectors with custom payload encoding.",
      tags: [
        { label: "python", type: "purple" },
        { label: "flask", type: "purple" },
        { label: "web_appsec", type: "dim" },
        { label: "payloads", type: "dim" }
      ],
      hackthebox: "https://github.com/yourusername/xsshunter-pro"
    },
      
  ];

  return (
    <div className="ctf-page">
    <div className="page-label">skills · thisal nanayakkara</div>
    <div className="projects-grid">
       
      {projects.map((project) => (
        <div key={project.id} className="pcard">
          <div className="pcard-top">
            <div>
              <div className="pcard-icon">[ {project.category} ]</div>
              <p className="pcard-name">{project.name}</p>
            </div>
            <a className="gh-btn" href={project.hackthebox} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              ~/source
            </a>
          </div>
          <p className="pcard-desc">{project.desc}</p>
          <div className="tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className={`tag tag-${tag.type}`}>{tag.label}</span>
            ))}
          </div>
          <div className="pcard-foot">
            {project.live && <span className="live-pill"><span className="ldot"></span>DONE</span>}
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

//