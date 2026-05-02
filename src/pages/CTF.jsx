import { useState } from 'react'
import './ctf.css'
const ctfs = [
  
  {
    id: 1,
    name: "Eighteen",
    platform: "HackTheBox",
    difficulty: "easy",
    desc: "",
    tags: [],
    date: "22 Nov 2025",
    link: "https://labs.hackthebox.com/achievement/machine/783867/805"
  },
  {
    id: 2,
    name: "Nanocorp",
    platform: "HackTheBox",
    difficulty: "hard",
    desc: "",
    tags: [],
    date: "15 Nov 2025",
    link: "https://labs.hackthebox.com/achievement/machine/783867/802"
  },
  {
    id: 3,
    name: "Editor",
    platform: "HackTheBox",
    difficulty: "easy",
    desc: "",
    tags: [],
    date: "07 Nov 2025",
    link: "https://labs.hackthebox.com/achievement/machine/783867/684"
  },
  {
    id: 4,
    name: "Giveback",
    platform: "HackTheBox",
    difficulty: "medium",
    desc: "",
    tags: [],
    date: "06 Nov 2025",
    link: "https://labs.hackthebox.com/achievement/machine/783867/796"
  },

  {
    id: 5,
    name: "Paper",
    platform: "HackTheBox",
    difficulty: "easy",
    desc: "",
    tags: [],
    date: "22 May 2022",
    link: "https://labs.hackthebox.com/achievement/machine/783867/432"
  },
  // add more...
]

const filters = ["all", "HackTheBox", "TryHackMe", "easy", "medium", "hard"]

export default function CTF() {
  const [active, setActive] = useState("all")

  const filtered = ctfs.filter(ctf => {
    if (active === "all") return true
    return ctf.platform === active || ctf.difficulty === active
  })

  return (
    <div className="ctf-page">
      {/* page label */}
      <div class="page-label">ctf &nbsp;·&nbsp; challenges played</div>
 
      {/* title + subtitle */}
        <div class="page-title">CTF Writeups</div>
       <div class="page-sub">machines and challenges I've rooted — with links and notes</div>


      {/* stats bar — total, per platform */}
        <div class="stats-bar">
    <div class="stat"><div class="stat-v">75</div><div class="stat-l">total solved</div></div>
    <div class="stat"><div class="stat-v">68</div><div class="stat-l">HackTheBox</div></div>
    <div class="stat"><div class="stat-v">7</div><div class="stat-l">TryHackMe</div></div>
  </div>
      {/* filter buttons */}
      <div className="filter-bar">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-btn ${active === f ? "active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      
      <div className="ctf-grid">
        {filtered.map((ctf) => (
          <div className="ctf-card" key={ctf.id}>
            <div class="card-top">
        <span class="platform htb">{ctf.platform}</span>
        <span class="difficulty">{ctf.difficulty}</span>
      </div>
      <div class="card-name">{ctf.name}</div>
      <div class="card-desc">{ctf.desc}</div>
      <div class="card-tags">
        {ctf.tags.map((tag) => (
          <span class="tag">{tag.tags}</span>
        ))}
      </div>
      <div class="card-bottom">
        <span class="card-date">{ctf.date}</span>
        <a class="card-link" href={ctf.link} target="_blank">Proof ↗</a>
      </div>

            
          </div>
        ))}
      </div>
    </div>
  )
}