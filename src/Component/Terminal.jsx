import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';

// Component to handle the typing effect for each output line
const TypingEffect = ({ text, speed = 20, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, speed, onComplete]);

  return <div className='tr' dangerouslySetInnerHTML={{ __html: displayedText }} />;
};

export default function Terminal() {
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([]);
  const bottomRef = useRef(null);
  
  const commandArray = [
    {
      command: '.help',
      description: 'List all available commands <br/> .clear - Clear the terminal <br/> .skills - List my skills <br/> .contact - Show contact information <br/> .future -my direction in future <br/> .ls - List files in the current directory <br/> .cat - Display the contents of a file'
    },
    {
      command: '.skills',
      description: 'Web AppSec, Network, Red Team, OSINT, BinExp'
    },
    {
      command: '.contact',
      description: 'Email: thisal.nanayakkara@gmail.com <br/> LinkedIn: linkedin.com/in/thisal-nanayakkara <br/> GitHub: github.com/thisalnanayakkara'
    },
    {
      command: '.future',
      description: 'I am currently focused on expanding my knowledge in cloud security and container security. I am also interested in exploring the field of IoT security and mobile application security.'
    },
    {
      command: 'whoami',
      description: 'Thisal Nanayakkara'
    },
    {
      command: '.ls',
      description: './Reveal.sh <br/> ./F#ck_society.txt '
    },
    {
      command: './Reveal.sh',
      description: `Operate in the silence between the bits.<br/><br/> Most see a rotating structure; <br/> See the absence that defines it.<br/> <br/>Security isn't found in the walls.it's found in the gaps.<br/> I am the observer in the void, mapping the vulnerabilities that light is too fast to catch.`    },
    {
  command: './F#ck_society.txt',
  description: `[!] Analyzing current environment... <br/>
[!] Warning: Infinite loop detected. <br/>
[!] Process: "Rat Race" is consuming 99% of human bandwidth. <br/>
<br/>
"The world is running a script it didn't write. <br/>
While they compete for the finish line, <br/>
I’m mapping the shadows of the maze. <br/>
<br/>
Logic has glitches. I am the observer." <br/>
<br/>
[√] Breakpoint set. <br/>
[√] You are now in the void.`
},
  ];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      const found = commandArray.find(item => item.command === inputValue);

      if (inputValue === '.clear') {
        setHistory([]);
        setInputValue('');
        return;
      }
      
      const newOutput = found ? found.description : 'command not found';
      setHistory([...history, { cmd: inputValue, output: newOutput }]);
      setInputValue('');
    }
  };

  // Scroll to bottom whenever history changes OR as the typing effect adds content
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [history]);

  // Additional scroll trigger for the typing effect to keep the cursor in view
  const handleTypingUpdate = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'auto', block: 'nearest' });
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="tbar">
          <div className="tdot" style={{ background: '#ff5f57' }}></div>
          <div className="tdot" style={{ background: '#febc2e' }}></div>
          <div className="tdot" style={{ background: '#28c840' }}></div>
          <span className="title"> Welcome root@tmx : start with <strong>.help</strong></span>
        </div>
      </div>
      <div className="terminal-body">
        {history.map((item, i) => (
          <div key={i}>
            <div className='tr'>
              <span className='tp'>root@tmx:~$</span>
              <span className='ts'>{item.cmd}</span>
            </div>
            {/* Only the last item in history gets the typing effect */}
            {i === history.length - 1 ? (
              <TypingEffect 
                text={item.output} 
                onComplete={handleTypingUpdate} 
                speed={15}
              />
            ) : (
              <div className='tr' dangerouslySetInnerHTML={{ __html: item.output }} />
            )}
          </div>
        ))}
        <div className='tr'>
          <span className="tp">root@tmx:~$</span>
          <input
            type="text"
            className="command-input"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKey}
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}