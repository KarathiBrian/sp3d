
import React, { useEffect, useState } from "react";
import "../css/Fterminal.css"

function FTerminal() {
  const [commands, setCommands] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const commandList = [
      "whoami",
      "sudo apt-get install exploit-tools",
      "nmap -sS 192.168.1.1",
      "hydra -l admin -P passlist.txt ssh",
      "sqlmap -u http://target.com --dbs",
      "ping -c 4 8.8.8.8",
      "curl http://api.hacktheplanet.io",
    ];

    let i = 0;
    const commandInterval = setInterval(() => {
      if (i < commandList.length) {
        setCommands((prev) => [
          ...prev,
          `$ ${commandList[i]} [${new Date().toLocaleTimeString()}]`,
        ]);
        i++;
      } else {
        clearInterval(commandInterval);
      }
    }, 2000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 300);

    return () => {
      clearInterval(commandInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="terminal-root">
      <div className="terminal-header">Hacker Terminal v1.0</div>
      <div className="terminal-body">
        {commands.map((cmd, index) => (
          <div key={index} className="terminal-line">
            {cmd}
          </div>
        ))}
        <div className="progress-bar">
          <div className="progress-label">System Breach Progress: {progress}%</div>
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

export default FTerminal;
