// Inline SVG "prototype screenshot" components for project cards
// These mimic real dashboard UIs with data, charts, and UI elements

export function AiOsDashboard() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="800" height="450" fill="#0f1117" />

      {/* Sidebar */}
      <rect x="0" y="0" width="160" height="450" fill="#161b22" />
      <text x="20" y="30" fill="#e6edf3" fontSize="13" fontWeight="bold" fontFamily="system-ui">🎓 StudyOS</text>

      {/* Sidebar menu items */}
      {[
        { icon: "⊞", label: "Dashboard", active: true, y: 60 },
        { icon: "✓", label: "Tasks", active: false, y: 90 },
        { icon: "🤖", label: "AI Assistant", active: false, y: 120 },
        { icon: "📅", label: "Study Planner", active: false, y: 150 },
        { icon: "📝", label: "Notes", active: false, y: 180 },
        { icon: "📊", label: "Analytics", active: false, y: 210 },
      ].map((item) => (
        <g key={item.y}>
          {item.active && <rect x="0" y={item.y - 14} width="160" height="26" fill="#1f6feb22" rx="4" />}
          {item.active && <rect x="0" y={item.y - 14} width="3" height="26" fill="#58a6ff" />}
          <text x="20" y={item.y + 2} fill={item.active ? "#58a6ff" : "#8b949e"} fontSize="11" fontFamily="system-ui">
            {item.icon} {item.label}
          </text>
        </g>
      ))}

      {/* Avatar */}
      <circle cx="80" cy="420" r="16" fill="#1f6feb" />
      <text x="73" y="424" fill="#fff" fontSize="10" fontFamily="system-ui">TK</text>
      <text x="100" y="418" fill="#e6edf3" fontSize="10" fontFamily="system-ui">Tanya K</text>
      <text x="100" y="430" fill="#8b949e" fontSize="9" fontFamily="system-ui">Student</text>

      {/* Main content area */}
      <text x="180" y="35" fill="#e6edf3" fontSize="16" fontWeight="bold" fontFamily="system-ui">Good morning, Tanya! 👋</text>
      <text x="180" y="52" fill="#8b949e" fontSize="10" fontFamily="system-ui">Sunday, September 21, 2026 • 4 tasks due today</text>

      {/* Stat cards */}
      {[
        { label: "Tasks Done", value: "8", sub: "today", color: "#3fb950", x: 180 },
        { label: "Study Hours", value: "4.5h", sub: "today", color: "#58a6ff", x: 320 },
        { label: "Day Streak", value: "12🔥", sub: "days", color: "#f78166", x: 460 },
        { label: "AI Chats", value: "23", sub: "this week", color: "#d2a8ff", x: 600 },
      ].map((card) => (
        <g key={card.x}>
          <rect x={card.x} y="65" width="125" height="68" rx="8" fill="#161b22" stroke="#30363d" strokeWidth="1" />
          <text x={card.x + 12} y="87" fill="#8b949e" fontSize="9" fontFamily="system-ui">{card.label}</text>
          <text x={card.x + 12} y="110" fill={card.color} fontSize="22" fontWeight="bold" fontFamily="system-ui">{card.value}</text>
          <text x={card.x + 12} y="125" fill="#8b949e" fontSize="9" fontFamily="system-ui">{card.sub}</text>
        </g>
      ))}

      {/* Today's Tasks */}
      <rect x="180" y="150" width="280" height="270" rx="8" fill="#161b22" stroke="#30363d" strokeWidth="1" />
      <text x="196" y="172" fill="#e6edf3" fontSize="12" fontWeight="bold" fontFamily="system-ui">Today's Tasks</text>
      <rect x="196" y="180" width="248" height="1" fill="#30363d" />

      {[
        { task: "Complete ML Assignment", done: true, tag: "CS", color: "#58a6ff", y: 200 },
        { task: "Review Lecture Notes - DSA", done: true, tag: "DSA", color: "#3fb950", y: 226 },
        { task: "Submit Database Project", done: true, tag: "DB", color: "#d2a8ff", y: 252 },
        { task: "Read Chapter 7 - Networks", done: false, tag: "NET", color: "#f78166", y: 278 },
        { task: "Practice LeetCode (3 problems)", done: false, tag: "CP", color: "#ffa657", y: 304 },
        { task: "Revise Linear Algebra", done: false, tag: "MATH", color: "#79c0ff", y: 330 },
        { task: "Project Report Draft", done: false, tag: "PROJ", color: "#56d364", y: 356 },
      ].map((item) => (
        <g key={item.y}>
          <circle cx="207" cy={item.y + 2} r="6" fill={item.done ? "#3fb950" : "#30363d"} stroke={item.done ? "#3fb950" : "#8b949e"} strokeWidth="1.5" />
          {item.done && <text x="203" y={item.y + 6} fill="#0d1117" fontSize="9" fontFamily="system-ui">✓</text>}
          <text x="220" y={item.y + 6} fill={item.done ? "#8b949e" : "#e6edf3"} fontSize="10" fontFamily="system-ui"
            textDecoration={item.done ? "line-through" : "none"}>{item.task}</text>
          <rect x="380" y={item.y - 6} width="32" height="14" rx="6" fill={item.color + "22"} />
          <text x="382" y={item.y + 4} fill={item.color} fontSize="8" fontFamily="system-ui">{item.tag}</text>
        </g>
      ))}

      {/* Productivity Ring */}
      <rect x="475" y="150" width="160" height="160" rx="8" fill="#161b22" stroke="#30363d" strokeWidth="1" />
      <text x="491" y="172" fill="#e6edf3" fontSize="11" fontWeight="bold" fontFamily="system-ui">Productivity</text>
      <circle cx="555" cy="245" r="45" fill="none" stroke="#30363d" strokeWidth="10" />
      <circle cx="555" cy="245" r="45" fill="none" stroke="#3fb950" strokeWidth="10"
        strokeDasharray="202" strokeDashoffset="56" strokeLinecap="round"
        transform="rotate(-90 555 245)" />
      <text x="545" y="242" fill="#3fb950" fontSize="18" fontWeight="bold" fontFamily="system-ui">72%</text>
      <text x="536" y="258" fill="#8b949e" fontSize="9" fontFamily="system-ui">on track</text>

      {/* AI Assistant Chat widget */}
      <rect x="475" y="325" width="160" height="95" rx="8" fill="#161b22" stroke="#30363d" strokeWidth="1" />
      <text x="491" y="345" fill="#e6edf3" fontSize="11" fontWeight="bold" fontFamily="system-ui">🤖 AI Assistant</text>
      <rect x="491" y="353" width="128" height="28" rx="6" fill="#1f6feb11" />
      <text x="499" y="362" fill="#8b949e" fontSize="8" fontFamily="system-ui">Explain Dynamic Programming</text>
      <text x="499" y="375" fill="#8b949e" fontSize="8" fontFamily="system-ui">with examples...</text>
      <rect x="491" y="388" width="128" height="22" rx="5" fill="#1f6feb" />
      <text x="533" y="402" fill="#fff" fontSize="9" fontFamily="system-ui">Ask AI →</text>

      {/* Upcoming Deadlines */}
      <rect x="650" y="150" width="140" height="270" rx="8" fill="#161b22" stroke="#30363d" strokeWidth="1" />
      <text x="662" y="172" fill="#e6edf3" fontSize="11" fontWeight="bold" fontFamily="system-ui">Deadlines</text>
      <rect x="662" y="180" width="115" height="1" fill="#30363d" />

      {[
        { sub: "ML Assignment", date: "Today", color: "#f78166", y: 198 },
        { sub: "DSA Quiz", date: "Tomorrow", color: "#ffa657", y: 230 },
        { sub: "DB Project", date: "Sep 25", color: "#e3b341", y: 262 },
        { sub: "Network Lab", date: "Sep 28", color: "#3fb950", y: 294 },
        { sub: "Math Test", date: "Oct 1", color: "#58a6ff", y: 326 },
        { sub: "Final Report", date: "Oct 10", color: "#d2a8ff", y: 358 },
      ].map((item) => (
        <g key={item.y}>
          <rect x="662" y={item.y - 12} width="115" height="26" rx="5" fill="#0d1117" />
          <rect x="662" y={item.y - 12} width="3" height="26" fill={item.color} rx="2" />
          <text x="672" y={item.y + 1} fill="#e6edf3" fontSize="9" fontFamily="system-ui">{item.sub}</text>
          <text x="672" y={item.y + 11} fill={item.color} fontSize="8" fontFamily="system-ui">{item.date}</text>
        </g>
      ))}
    </svg>
  );
}

export function PlantDiseaseDashboard() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="800" height="450" fill="#f8fafc" />
      {/* Header */}
      <rect width="800" height="52" fill="#fff" />
      <rect y="52" width="800" height="1" fill="#e2e8f0" />
      <circle cx="22" cy="26" r="12" fill="#16a34a" />
      <text x="17" y="30" fill="#fff" fontSize="11" fontFamily="system-ui">🌿</text>
      <text x="40" y="23" fill="#1e293b" fontSize="14" fontWeight="bold" fontFamily="system-ui">PlantGuard AI</text>
      <text x="40" y="38" fill="#64748b" fontSize="9" fontFamily="system-ui">Disease Detection System</text>
      <rect x="660" y="13" width="120" height="26" rx="5" fill="#16a34a" />
      <text x="690" y="30" fill="#fff" fontSize="10" fontFamily="system-ui">+ New Scan</text>

      {/* Left panel */}
      <rect x="12" y="64" width="300" height="375" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="24" y="88" fill="#1e293b" fontSize="12" fontWeight="bold" fontFamily="system-ui">Uploaded Image</text>

      {/* Leaf image area */}
      <rect x="24" y="96" width="276" height="185" rx="6" fill="#e8f5e9" />
      <ellipse cx="162" cy="188" rx="100" ry="75" fill="#4caf50" />
      <line x1="162" y1="118" x2="162" y2="258" stroke="#388e3c" strokeWidth="2" opacity="0.6" />
      <line x1="162" y1="155" x2="110" y2="175" stroke="#388e3c" strokeWidth="1" opacity="0.4" />
      <line x1="162" y1="170" x2="220" y2="190" stroke="#388e3c" strokeWidth="1" opacity="0.4" />
      <line x1="162" y1="195" x2="105" y2="215" stroke="#388e3c" strokeWidth="1" opacity="0.4" />
      <circle cx="130" cy="165" r="14" fill="#8b4513" opacity="0.85" />
      <circle cx="148" cy="172" r="8" fill="#d2691e" opacity="0.7" />
      <circle cx="190" cy="200" r="18" fill="#8b4513" opacity="0.8" />
      <circle cx="205" cy="192" r="10" fill="#a0522d" opacity="0.6" />
      <circle cx="140" cy="210" r="11" fill="#7b3f00" opacity="0.75" />
      <circle cx="130" cy="165" r="18" fill="none" stroke="#ffd700" strokeWidth="1.5" opacity="0.5" />
      <circle cx="190" cy="200" r="22" fill="none" stroke="#ffd700" strokeWidth="1.5" opacity="0.5" />
      <rect x="24" y="285" width="276" height="1" fill="#e2e8f0" />
      <text x="24" y="305" fill="#64748b" fontSize="9" fontFamily="system-ui">tomato_leaf_sample_003.jpg • 2.4 MB</text>

      {/* Confidence bars */}
      <text x="24" y="330" fill="#1e293b" fontSize="11" fontWeight="bold" fontFamily="system-ui">Model Predictions</text>
      {[
        { label: "Early Blight", pct: 89, color: "#ef4444", y: 348 },
        { label: "Late Blight", pct: 7, color: "#f97316", y: 368 },
        { label: "Healthy", pct: 4, color: "#22c55e", y: 388 },
      ].map((item) => (
        <g key={item.y}>
          <text x="24" y={item.y + 8} fill="#374151" fontSize="9" fontFamily="system-ui">{item.label}</text>
          <rect x="100" y={item.y} width="160" height="12" rx="6" fill="#f1f5f9" />
          <rect x="100" y={item.y} width={item.pct * 1.6} height="12" rx="6" fill={item.color} />
          <text x="268" y={item.y + 9} fill="#374151" fontSize="9" fontFamily="system-ui" fontWeight="bold">{item.pct}%</text>
        </g>
      ))}

      {/* Right: Detection result */}
      <rect x="324" y="64" width="464" height="180" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="324" y="64" width="464" height="46" rx="8" fill="#fef2f2" />
      <rect x="324" y="94" width="464" height="16" fill="#fef2f2" />
      <text x="340" y="85" fill="#991b1b" fontSize="12" fontWeight="bold" fontFamily="system-ui">⚠ Disease Detected: Early Blight</text>
      <rect x="632" y="73" width="80" height="20" rx="10" fill="#ef4444" />
      <text x="645" y="87" fill="#fff" fontSize="9" fontFamily="system-ui">Moderate</text>
      <text x="340" y="112" fill="#64748b" fontSize="10" fontFamily="system-ui">Confidence: 89.3% • Model: EfficientNet-B4 • Processing time: 0.34s</text>
      {[
        { label: "Affected Area", value: "23%", color: "#ef4444", x: 340 },
        { label: "Spread Risk", value: "High", color: "#f97316", x: 460 },
        { label: "Treatment", value: "Urgent", color: "#eab308", x: 570 },
        { label: "Scans Today", value: "147", color: "#3b82f6", x: 670 },
      ].map((s) => (
        <g key={s.x}>
          <text x={s.x} y="138" fill="#64748b" fontSize="9" fontFamily="system-ui">{s.label}</text>
          <text x={s.x} y="157" fill={s.color} fontSize="16" fontWeight="bold" fontFamily="system-ui">{s.value}</text>
        </g>
      ))}
      <rect x="340" y="162" width="432" height="1" fill="#e2e8f0" />
      <text x="340" y="180" fill="#64748b" fontSize="9" fontFamily="system-ui">Pathogen: Alternaria solani • First detected: 2026-09-19 • Samples analysed: 1,240</text>
      <text x="340" y="195" fill="#64748b" fontSize="9" fontFamily="system-ui">Similar cases in database: 384 • Recommended action: Immediate fungicide treatment</text>
      <text x="340" y="210" fill="#64748b" fontSize="9" fontFamily="system-ui">Crop: Tomato • Growth stage: Vegetative • Humidity: 82% • Temp: 28°C</text>
      <text x="340" y="225" fill="#64748b" fontSize="9" fontFamily="system-ui">Environmental risk factors: High humidity, warm temperatures</text>

      {/* Treatment Recommendations */}
      <rect x="324" y="256" width="464" height="183" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="340" y="278" fill="#1e293b" fontSize="12" fontWeight="bold" fontFamily="system-ui">🤖 AI Treatment Recommendations</text>
      <rect x="340" y="285" width="432" height="1" fill="#e2e8f0" />
      {[
        { num: "1", text: "Remove and destroy all affected leaves immediately to prevent spread", color: "#ef4444", y: 305 },
        { num: "2", text: "Apply copper-based fungicide (Bordeaux mixture) every 7-10 days", color: "#f97316", y: 328 },
        { num: "3", text: "Ensure adequate plant spacing for airflow — minimum 60cm apart", color: "#eab308", y: 351 },
        { num: "4", text: "Water at base only; avoid wetting foliage. Water in the morning", color: "#22c55e", y: 374 },
        { num: "5", text: "Monitor closely for 14 days and re-scan affected plants weekly", color: "#3b82f6", y: 397 },
        { num: "6", text: "Rotate crops next season — avoid planting tomato in same location", color: "#8b5cf6", y: 420 },
      ].map((rec) => (
        <g key={rec.y}>
          <circle cx="350" cy={rec.y - 4} r="9" fill={rec.color + "22"} />
          <text x="346" y={rec.y} fill={rec.color} fontSize="9" fontWeight="bold" fontFamily="system-ui">{rec.num}</text>
          <text x="366" y={rec.y} fill="#374151" fontSize="9.5" fontFamily="system-ui">{rec.text}</text>
        </g>
      ))}
    </svg>
  );
}

export function RoadDamageDashboard() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="450" fill="#f1f5f9" />
      {/* Header */}
      <rect width="800" height="52" fill="#1e3a5f" />
      <text x="20" y="22" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="system-ui">🛣 CivicRoad — Road Damage Reporting Portal</text>
      <text x="20" y="40" fill="#93c5fd" fontSize="9" fontFamily="system-ui">Admin Dashboard • Chennai Municipal Corporation</text>
      <rect x="660" y="14" width="120" height="24" rx="5" fill="#3b82f6" />
      <text x="680" y="30" fill="#fff" fontSize="10" fontFamily="system-ui">+ New Report</text>

      {/* Stats */}
      {[
        { label: "Total Reports", value: "247", icon: "📋", color: "#3b82f6", x: 12 },
        { label: "Resolved", value: "189", icon: "✅", color: "#22c55e", x: 212 },
        { label: "In Progress", value: "35", icon: "🔧", color: "#f59e0b", x: 412 },
        { label: "Pending", value: "23", icon: "🔴", color: "#ef4444", x: 612 },
      ].map((s) => (
        <g key={s.x}>
          <rect x={s.x} y="62" width="188" height="64" rx="6" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
          <text x={s.x + 14} y="86" fill={s.color} fontSize="20" fontFamily="system-ui">{s.icon}</text>
          <text x={s.x + 42} y="86" fill={s.color} fontSize="24" fontWeight="bold" fontFamily="system-ui">{s.value}</text>
          <text x={s.x + 14} y="112" fill="#64748b" fontSize="10" fontFamily="system-ui">{s.label}</text>
        </g>
      ))}

      {/* Map */}
      <rect x="12" y="136" width="340" height="302" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="24" y="158" fill="#1e293b" fontSize="12" fontWeight="bold" fontFamily="system-ui">📍 Live Map View — Chennai</text>
      <rect x="12" y="166" width="340" height="272" fill="#e8edf5" />
      {[80, 130, 180, 230, 280].map(y => (
        <line key={y} x1="12" y1={y + 86} x2="352" y2={y + 86} stroke="#fff" strokeWidth="8" opacity="0.7" />
      ))}
      {[60, 120, 180, 240, 300].map(x => (
        <line key={x} x1={x + 12} y1="166" x2={x + 12} y2="438" stroke="#fff" strokeWidth="8" opacity="0.7" />
      ))}
      {[
        { cx: 80, cy: 220, color: "#ef4444", label: "P" },
        { cx: 160, cy: 260, color: "#f59e0b", label: "C" },
        { cx: 240, cy: 200, color: "#ef4444", label: "P" },
        { cx: 120, cy: 330, color: "#22c55e", label: "✓" },
        { cx: 290, cy: 350, color: "#f59e0b", label: "F" },
        { cx: 200, cy: 380, color: "#ef4444", label: "P" },
        { cx: 60, cy: 300, color: "#22c55e", label: "✓" },
        { cx: 320, cy: 250, color: "#ef4444", label: "P" },
      ].map((pin, i) => (
        <g key={i}>
          <circle cx={pin.cx + 12} cy={pin.cy} r="12" fill={pin.color} opacity="0.9" />
          <text x={pin.cx + 8} y={pin.cy + 4} fill="#fff" fontSize="8" fontFamily="system-ui">{pin.label}</text>
        </g>
      ))}
      <rect x="24" y="418" width="8" height="8" rx="2" fill="#ef4444" />
      <text x="36" y="426" fill="#374151" fontSize="8" fontFamily="system-ui">Pothole</text>
      <rect x="85" y="418" width="8" height="8" rx="2" fill="#f59e0b" />
      <text x="97" y="426" fill="#374151" fontSize="8" fontFamily="system-ui">Crack/Flood</text>
      <rect x="160" y="418" width="8" height="8" rx="2" fill="#22c55e" />
      <text x="172" y="426" fill="#374151" fontSize="8" fontFamily="system-ui">Resolved</text>

      {/* Table */}
      <rect x="362" y="136" width="426" height="302" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="378" y="158" fill="#1e293b" fontSize="12" fontWeight="bold" fontFamily="system-ui">Recent Reports</text>
      <rect x="362" y="163" width="426" height="26" fill="#f8fafc" />
      {["ID", "Location", "Type", "Severity", "Status", "Date"].map((h, i) => (
        <text key={h} x={[376, 410, 520, 590, 645, 730][i]} y="180" fill="#64748b" fontSize="9" fontWeight="bold" fontFamily="system-ui">{h}</text>
      ))}
      <rect x="362" y="189" width="426" height="1" fill="#e2e8f0" />
      {[
        { id: "#247", loc: "Anna Nagar, 3rd St", type: "Pothole", sev: "High", status: "Pending", date: "21 Sep", statusC: "#ef4444", y: 208 },
        { id: "#246", loc: "T Nagar Main Rd", type: "Crack", sev: "Med", status: "In Prog", date: "21 Sep", statusC: "#f59e0b", y: 232 },
        { id: "#245", loc: "Adyar Signal Jn", type: "Flooding", sev: "High", status: "In Prog", date: "20 Sep", statusC: "#f59e0b", y: 256 },
        { id: "#244", loc: "Velachery Bypass", type: "Pothole", sev: "Low", status: "Resolved", date: "20 Sep", statusC: "#22c55e", y: 280 },
        { id: "#243", loc: "Guindy Ind Estate", type: "Sign Dmg", sev: "Med", status: "Resolved", date: "19 Sep", statusC: "#22c55e", y: 304 },
        { id: "#242", loc: "Vadapalani Circle", type: "Pothole", sev: "High", status: "Pending", date: "19 Sep", statusC: "#ef4444", y: 328 },
        { id: "#241", loc: "Tambaram South", type: "Crack", sev: "Low", status: "Resolved", date: "18 Sep", statusC: "#22c55e", y: 352 },
        { id: "#240", loc: "Sholinganallur", type: "Pothole", sev: "Med", status: "In Prog", date: "18 Sep", statusC: "#f59e0b", y: 376 },
        { id: "#239", loc: "Perambur North", type: "Flooding", sev: "High", status: "Pending", date: "17 Sep", statusC: "#ef4444", y: 400 },
        { id: "#238", loc: "KK Nagar West", type: "Sign Dmg", sev: "Low", status: "Resolved", date: "17 Sep", statusC: "#22c55e", y: 424 },
      ].map((row) => (
        <g key={row.y}>
          <text x="376" y={row.y + 2} fill="#3b82f6" fontSize="9" fontFamily="system-ui">{row.id}</text>
          <text x="410" y={row.y + 2} fill="#374151" fontSize="9" fontFamily="system-ui">{row.loc}</text>
          <text x="520" y={row.y + 2} fill="#374151" fontSize="9" fontFamily="system-ui">{row.type}</text>
          <text x="590" y={row.y + 2} fill="#374151" fontSize="9" fontFamily="system-ui">{row.sev}</text>
          <rect x="640" y={row.y - 8} width="52" height="16" rx="8" fill={row.statusC + "22"} />
          <text x="644" y={row.y + 2} fill={row.statusC} fontSize="8" fontFamily="system-ui">{row.status}</text>
          <text x="730" y={row.y + 2} fill="#64748b" fontSize="9" fontFamily="system-ui">{row.date}</text>
          <rect x="362" y={row.y + 10} width="426" height="1" fill="#f1f5f9" />
        </g>
      ))}
    </svg>
  );
}

export function FinancialDashboard() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="finRevGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="#0a0e1a" />
      {/* Header */}
      <rect width="800" height="50" fill="#0d1225" />
      <rect y="50" width="800" height="1" fill="#1e2d4a" />
      <text x="20" y="22" fill="#e2e8f0" fontSize="14" fontWeight="bold" fontFamily="system-ui">📊 FinSight — GenAI Financial Analytics</text>
      <text x="20" y="40" fill="#64748b" fontSize="9" fontFamily="system-ui">Powered by GPT-4o + Power BI • FY 2025-26 • Last updated: 21 Sep 2026</text>
      <rect x="680" y="13" width="108" height="24" rx="5" fill="#1d4ed8" />
      <text x="700" y="29" fill="#fff" fontSize="10" fontFamily="system-ui">Export Report</text>

      {/* KPI Cards */}
      {[
        { label: "Total Revenue", value: "$2.4M", change: "↑ 12.3%", pos: true, x: 10 },
        { label: "Total Expenses", value: "$1.8M", change: "↑ 4.1%", pos: false, x: 210 },
        { label: "Net Profit", value: "$620K", change: "↑ 24.8%", pos: true, x: 410 },
        { label: "ROI", value: "34.5%", change: "↑ 6.2%", pos: true, x: 610 },
      ].map((card) => (
        <g key={card.x}>
          <rect x={card.x} y="60" width="188" height="72" rx="6" fill="#0d1225" stroke="#1e2d4a" strokeWidth="1" />
          <text x={card.x + 14} y="82" fill="#64748b" fontSize="9" fontFamily="system-ui">{card.label}</text>
          <text x={card.x + 14} y="108" fill="#e2e8f0" fontSize="22" fontWeight="bold" fontFamily="system-ui">{card.value}</text>
          <rect x={card.x + 14} y="116" width="70" height="12" rx="6" fill={card.pos ? "#16a34a22" : "#dc262622"} />
          <text x={card.x + 20} y="125" fill={card.pos ? "#22c55e" : "#ef4444"} fontSize="9" fontFamily="system-ui">{card.change}</text>
        </g>
      ))}

      {/* Line Chart */}
      <rect x="10" y="142" width="490" height="185" rx="8" fill="#0d1225" stroke="#1e2d4a" strokeWidth="1" />
      <text x="24" y="164" fill="#e2e8f0" fontSize="11" fontWeight="bold" fontFamily="system-ui">Monthly Revenue vs Expenses (FY 2025-26)</text>
      {[0, 1, 2, 3, 4].map(i => (
        <g key={i}>
          <line x1="50" y1={178 + i * 32} x2="488" y2={178 + i * 32} stroke="#1e2d4a" strokeWidth="1" />
          <text x="14" y={182 + i * 32} fill="#64748b" fontSize="8" fontFamily="system-ui">{["500K", "400K", "300K", "200K", "100K"][i]}</text>
        </g>
      ))}
      {["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"].map((m, i) => (
        <text key={m} x={54 + i * 36} y="316" fill="#64748b" fontSize="7.5" fontFamily="system-ui">{m}</text>
      ))}
      <polyline points="54,262 90,248 126,240 162,225 198,218 234,205 270,195 306,188 342,180 378,178 414,182 450,178"
        fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="54,262 90,248 126,240 162,225 198,218 234,205 270,195 306,188 342,180 378,178 414,182 450,178"
        fill="url(#finRevGrad)" stroke="none" opacity="0.15" />
      <polyline points="54,285 90,278 126,280 162,272 198,268 234,265 270,260 306,255 342,250 378,248 414,252 450,245"
        fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {[[54,262],[90,248],[126,240],[162,225],[198,218],[234,205],[270,195],[306,188],[342,180],[378,178],[414,182],[450,178]].map(([x,y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#3b82f6" />
      ))}
      <circle cx="28" cy="330" r="4" fill="#3b82f6" />
      <text x="36" y="334" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Revenue</text>
      <circle cx="100" cy="330" r="4" fill="#f97316" />
      <text x="108" y="334" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Expenses</text>

      {/* Candlestick chart */}
      <rect x="10" y="337" width="490" height="102" rx="8" fill="#0d1225" stroke="#1e2d4a" strokeWidth="1" />
      <text x="24" y="356" fill="#e2e8f0" fontSize="11" fontWeight="bold" fontFamily="system-ui">NIFTY50 Price Action — Sep 2026</text>
      {[
        [60,380,370,365,388],[96,365,355,360,375],[132,375,368,370,382],
        [168,382,360,362,385],[204,365,358,360,368],[240,368,362,365,372],
        [276,372,345,348,374],[312,350,340,342,355],[348,355,348,350,358],
        [384,360,352,355,364],[420,364,355,358,368],[456,368,358,362,372],
      ].map(([x, high, low, open, close]) => {
        const green = close > open;
        const color = green ? "#22c55e" : "#ef4444";
        const bodyTop = Math.min(open, close) - 330;
        const bodyH = Math.abs(close - open);
        return (
          <g key={x}>
            <line x1={x} y1={high - 330} x2={x} y2={low - 330} stroke={color} strokeWidth="1" />
            <rect x={x - 6} y={bodyTop} width="12" height={Math.max(bodyH, 3)} fill={color} rx="1" />
          </g>
        );
      })}

      {/* AI Insights */}
      <rect x="512" y="142" width="276" height="297" rx="8" fill="#0d1225" stroke="#1e2d4a" strokeWidth="1" />
      <text x="526" y="164" fill="#e2e8f0" fontSize="11" fontWeight="bold" fontFamily="system-ui">🤖 GenAI Insights</text>
      <rect x="526" y="172" width="248" height="1" fill="#1e2d4a" />
      {[
        { text: "Revenue grew 12.3% QoQ — highest in 3 years", type: "positive", y: 195 },
        { text: "Anomaly detected in March operational expenses", type: "warning", y: 222 },
        { text: "Q3 profit margin exceeded forecast by 8.2%", type: "positive", y: 249 },
        { text: "FX headwinds risk: USD/INR at 84.2 (watch)", type: "warning", y: 276 },
        { text: "Cash reserves sufficient for 18-month runway", type: "positive", y: 303 },
        { text: "Recommend cost-cutting in vendor procurement", type: "info", y: 330 },
      ].map((ins) => {
        const colors: Record<string, string> = { positive: "#22c55e", warning: "#f59e0b", info: "#3b82f6" };
        const c = colors[ins.type];
        return (
          <g key={ins.y}>
            <rect x="526" y={ins.y - 14} width="248" height="24" rx="4" fill={c + "11"} />
            <rect x="526" y={ins.y - 14} width="3" height="24" fill={c} rx="2" />
            <text x="536" y={ins.y + 1} fill="#cbd5e1" fontSize="9" fontFamily="system-ui">{ins.text}</text>
          </g>
        );
      })}

      {/* Forecast table */}
      <text x="526" y="360" fill="#e2e8f0" fontSize="11" fontWeight="bold" fontFamily="system-ui">Forecast Table</text>
      <rect x="526" y="366" width="248" height="1" fill="#1e2d4a" />
      {["Quarter", "Actual", "Forecast", "Var%"].map((h, i) => (
        <text key={h} x={[526, 593, 648, 718][i]} y="382" fill="#64748b" fontSize="8.5" fontFamily="system-ui">{h}</text>
      ))}
      {[
        { q: "Q1 FY26", act: "$580K", fore: "$540K", v: "+7.4%", c: "#22c55e", y: 398 },
        { q: "Q2 FY26", act: "$620K", fore: "$600K", v: "+3.3%", c: "#22c55e", y: 414 },
        { q: "Q3 FY26", act: "$680K", fore: "$625K", v: "+8.8%", c: "#22c55e", y: 430 },
        { q: "Q4 FY26", act: "TBD", fore: "$710K", v: "—", c: "#64748b", y: 446 },
      ].map((row) => (
        <g key={row.y}>
          <text x="526" y={row.y} fill="#94a3b8" fontSize="8.5" fontFamily="system-ui">{row.q}</text>
          <text x="593" y={row.y} fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui">{row.act}</text>
          <text x="648" y={row.y} fill="#64748b" fontSize="8.5" fontFamily="system-ui">{row.fore}</text>
          <text x="718" y={row.y} fill={row.c} fontSize="8.5" fontFamily="system-ui">{row.v}</text>
        </g>
      ))}
    </svg>
  );
}
