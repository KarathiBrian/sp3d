import React, { useEffect, useRef, useState } from "react";
import "./Sp3.css";
// import img1 from "../assets/2.jpeg";
// import img2 from "../assets/3.png";
// import img3 from "../assets/4.png";
// import img4 from "../assets/5.png";
// import img5 from "../assets/6.jpeg";
// import img6 from "../assets/7.jpeg";
// import img7 from "../assets/8.jpeg";
// import img8 from "../assets/9.jpeg";
// import img9 from "../assets/10.jpeg";

// -------- IntroSplash component (harmless visual only) --------
function IntroSplash({ duration = 5000 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const fontSize = 18;
    let columns = Math.floor(w / fontSize) || 1;
    let drops = Array(columns).fill(0);
    const chars = "アァカサタナハマヤ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&*+=-";

    let animId;
    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > h && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      animId = requestAnimationFrame(draw);
    }
    draw();

    function handleResize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      columns = Math.floor(w / fontSize) || 1;
      drops = Array(columns).fill(0);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="intro-splash" aria-hidden="true">
      <canvas ref={canvasRef} className="intro-canvas" />
      <div className="intro-overlay">
        <div className="intro-text">loading...</div>
      </div>
    </div>
  );
}

// -------- Timer Component --------
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(16 * 3600); // 16 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer-box">
      <strong>Idle Timeout:</strong> {hours}h {minutes}m {seconds}s
    </div>
  );
}

// -------- Original component renamed (no logic changed) --------
function HackPrank6Inner() {
  const [logs, setLogs] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeChat, setActiveChat] = useState(null);
  const [activeWhatsApp, setActiveWhatsApp] = useState(null);
  const canvasRef = useRef(null);

  // Matrix background (only top 30%)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight * 0.3);
    const fontSize = 16;
    const columns = Math.floor(w / fontSize);
    const drops = Array(columns).fill(1);
    const chars = "アァカサタナハマヤ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&*+=-";

    function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > h && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      requestAnimationFrame(draw);
    }
    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight * 0.3;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fake Logs
  useEffect(() => {
    const fakeLogs = [
      "Initializing spyware…",
      "Bypassing firewall…",
      "Connected to target device",
      "Syncing messages…",
      "Accessing call logs…",
      "Activating microphone…",
      "Streaming camera feed…",
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < fakeLogs.length) {
        setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${fakeLogs[i]}`]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Sample data
  const people = [
    "Anyango Interior Designer",
    "SAFARICOM",
    "Stanley",
    "Njeri Curtains",
    "Diana Kendu",
    "Pishori Mwea",
    "Frankl",
    "Phyliss",
    "Akoth",
  ];
  const whatsappPeople = [
    "Irene",
    "Vicario Muthaiga Golf",
    "Kevin Kileleshwa",
    "Liam Mwaunza",
    "Mona Hardware",
    "Mama Judy",
    "Anyango Interior Designer",
    "Joska",
  ];

  const sampleConversation = [
    "Yes, I realize the last milestone was missed.",
    "It’s affecting the whole team’s schedule.",
    "I understand. I’ll make adjustments to catch up.",
    "We also need better communication going forward.",
    "Agreed. I’ll send daily updates from now on.",
    "Thanks. Let’s make sure this doesn’t happen again.",
  ];

  const aliceConversation = [
    { from: "Anyango Interior Designer", text: "Did you check it out?" },
    { from: "You", text: "Yea, niliangalia. Nitakupa feedback kesho" },
    { from: "Anyango Interior Designer", text: "Don’t forget the documents." },
    { from: "You", text: "Already packed." },
    { from: "Anyango Interior Designer", text: "So what time are they expecting us to arrive?" },
    { from: "You", text: "A minute I confirm" },
    { from: "Anyango Interior Designer", text: "Sawa" },
    { from: "You", text: "Also If I were to ask, did you talk to her" },
    { from: "Anyango Interior Designer", text: "??" },
    { from: "You", text: "Kezra." },
    { from: "Anyango Interior Designer", text: "Let me call and give you a detailed report on what we talked about" },
    { from: "You", text: "No problem." },
  ];

  const safaricomConversation = [
    { from: "SAFARICOM", text: "A SPECIAL NEW offer Awaits you! Dial *131# today and stay connected." },
    { from: "SAFARICOM", text: "Get Zidisha Plus for your business & enjoy 10GB + Free whatsapp for Kshs.1000 only! Share resources with your staff by adding them as beneficiaries. Dial *485#." },
    { from: "SAFARICOM", text: "Deni ya OKOA isikuzuie kupata DATA! Dial *544# Option 0, upate 200MB for Ksh 2 valid 24 Hrs ufurahie Deals MOTO MOTO za DATA ukiendelea kulipa Okoa pole pole" },
    { from: "SAFARICOM", text: "Just for you! Grab Kes.500 cashback every hour, every day. If you are the 100th customer to send money above Kes100. Dial *334>My Mpesa Offer for more details." },
    { from: "SAFARICOM", text: "Browse, chat & stream for 1 hour bila waas, bila kucheck balance! B-LIVE @20 bob. Dial *555# & select Data B-LIVE!" },
    { from: "SAFARICOM", text: "Just for you! Grab Kes.500 cashback every hour, every day. If you are the 100th customer to send money above Kes100. Dial *334>My Mpesa Offer for more details." },
  ];

  const calls = [
    { type: "Incoming", name: "Anyango Interior Designer", time: "12:30", duration: "5m 12s" },
    { type: "Incoming", name: "Principal Thika", time: "11:45", duration: "2m 40s" },
    { type: "Incoming", name: "Justus Pork city", time: "11:00", duration: "7m 03s" },
    { type: "Incoming", name: "Diana", time: "10:15", duration: "1m 50s" },
    { type: "Incoming", name: "Stanley", time: "09:40", duration: "4m 25s" },
    { type: "Incoming", name: "Okoth", time: "09:10", duration: "3m 11s" },
    { type: "Incoming", name: "Kim Timberyard", time: "08:55", duration: "6m 08s" },
    { type: "Outgoing", name: "Risper", time: "08:20", duration: "10m 02s" },
    { type: "Outgoing", name: "Okoth", time: "07:55", duration: "2m 15s" },
    { type: "Outgoing", name: "Brani", time: "07:30", duration: "5m 45s" },
    { type: "Outgoing", name: "George", time: "07:05", duration: "3m 20s" },
  ];

  const micRecordings = Array.from({ length: 10 }, (_, i) => `Recording_${i + 1}.mp3`);
//   const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className="hack-root">
      <canvas ref={canvasRef} className="matrix-canvas" />

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>☠ Control Panel</h2>
        <nav>
          <button onClick={() => setActiveTab("dashboard")}>Dashboard</button>
          <button onClick={() => setActiveTab("messages")}>Messages</button>
          <button onClick={() => setActiveTab("whatsapp")}>WhatsApp</button>
          <button onClick={() => setActiveTab("calls")}>Calls</button>
          <button onClick={() => setActiveTab("camera")}>Camera</button>
          <button onClick={() => setActiveTab("mic")}>Mic</button>
          <button onClick={() => setActiveTab("logs")}>Logs</button>
        </nav>
      </aside>

      

      
      <main className="main-panel">
        {activeTab === "dashboard" && (
          <div className="panel">
            <h1>📡 Remote Spy Dashboard</h1>
            <p>Status: <span className="highlight">Not Connected- Link device connection</span></p>
            <p>Target Device: <span className="highlight">Samsung Galaxy A55 12/256 variant SM-A556V</span></p>
            <p> <span className="highlight">Designed for use with Samsung Galaxy S24, supporting LPDDR5X-4800 memory.</span> </p>

            <p>IMEI: <span className="highlight">*****not set</span></p>
            <p>Current Location: <span className="highlight">****not set</span></p>
            <p>Lat: <span className="highlight">-0.091702</span></p>
            <p>Lon: <span className="highlight">34.767956</span></p>

            <div className="warning-box">
              <strong>⚠️ WARNING:</strong> This is a live spyware attack simulation.  
              Use ONLY in ethical and controlled environments.  
              Unauthorized deployment is ILLEGAL. Unauthorized deployment or use may constitute a data breach and is ILLEGAL.

              The author, developer, distributor and any affiliated parties (collectively, the “Provider”) shall not be held liable for any direct, indirect, incidental, special, consequential or punitive damages, losses, claims or legal liabilities arising from the use, misuse, unauthorized deployment, or distribution of this software.
            </div>

            <div className="validity-box">
              <strong>Package Validity:</strong> This package has a validity of 90 days until renewal and an idle timeout of 7 days.
            </div>

            <CountdownTimer />

            <div className="overview">
              <h2>☠️ Overview</h2>
              <p>
                This is a powerful, stealthy keylogger and spyware simulator built for
                ethical hacking, red teaming, and cybersecurity research.
              </p>
              <p>
                It captures sensitive user data such as keystrokes, screenshots, audio,
                text messages, call logs, device microphone, webcam footage, clipboard
                data, and system info — and streams it to a live Flask-based web dashboard.
              </p>
            </div>
          </div>
        )}

        {activeTab === "messages" && (
          <div className="panel">
            <h1>💬 Messages Inbox</h1>
            <h4>SpyWatch — Text messages will appear here once connected.</h4>
          </div>
        )}

        {activeTab === "whatsapp" && (
          <div className="panel">
            <h1>📱 WhatsApp Inbox</h1>
            <h4>SpyWatch — Whatsapp messages will appear will here once connected.</h4>
          </div>
        )}

        {activeTab === "calls" && (
          <div className="panel">
            <h1>📞 Call Logs</h1>
            <h4>SpyWatch — call logs will appear here once connected.</h4>
          </div>
        )}

        {activeTab === "camera" && (
          <div className="panel">
            <h1>📸 Camera Feed</h1>
          </div>
        )}

        {activeTab === "mic" && (
          <div className="panel">
            <h1>🎤 Recorded Calls</h1>
            <h4>SpyWatch — Recorded calls will appear here once connected.</h4>
          </div>
        )}

        {activeTab === "logs" && (
          <div className="panel terminal">
            <h1>🖥 System Logs</h1>
            {logs.map((log, i) => (
              <div key={i}>{log}</div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// -------- Wrapper export: shows intro for 5 seconds then mounts original component --------
export default function HackPrank6() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 5000); // show intro for 5000ms
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {showIntro && <IntroSplash duration={5000} />}
      {!showIntro && <HackPrank6Inner />}
    </>
  );
}