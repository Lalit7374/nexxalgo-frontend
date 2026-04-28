import React from 'react';

/* ================================================================
   PROJECT MOCKUPS — Custom SVG illustrations for each project
   Each project gets a unique mini-mockup that visually represents
   the actual app's interface (dashboards, charts, layouts, etc).
   ================================================================ */

const baseGradients = (
  <defs>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#2c6ed1" />
      <stop offset="100%" stopColor="#7c3aed" />
    </linearGradient>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#4a9eff" />
      <stop offset="100%" stopColor="#2c6ed1" />
    </linearGradient>
    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#a855f7" />
      <stop offset="100%" stopColor="#7c3aed" />
    </linearGradient>
  </defs>
);

const baseStyle = {
  width: '100%',
  height: '100%',
  display: 'block',
  background: 'linear-gradient(135deg, #0a0a0c 0%, #14181d 100%)',
};

// 1. SMART CRM — Dashboard with pipeline + chart
const SmartCRMMockup = () => (
  <svg viewBox="0 0 320 200" style={baseStyle} xmlns="http://www.w3.org/2000/svg">
    {baseGradients}
    {/* Top bar */}
    <rect x="0" y="0" width="320" height="24" fill="#0f1318" />
    <circle cx="12" cy="12" r="3" fill="#ff5f57" /><circle cx="24" cy="12" r="3" fill="#febc2e" /><circle cx="36" cy="12" r="3" fill="#28c840" />
    <rect x="200" y="8" width="100" height="8" rx="4" fill="#1a2030" />
    {/* Sidebar */}
    <rect x="0" y="24" width="60" height="176" fill="#0d1117" />
    <rect x="10" y="40" width="40" height="6" rx="2" fill="url(#brandGrad)" />
    <rect x="10" y="56" width="32" height="4" rx="2" fill="#2a3548" />
    <rect x="10" y="68" width="36" height="4" rx="2" fill="#2a3548" />
    <rect x="10" y="80" width="28" height="4" rx="2" fill="#2a3548" />
    {/* Stats cards */}
    <rect x="70" y="36" width="76" height="44" rx="6" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <text x="78" y="52" fill="#6b7d96" fontSize="6" fontFamily="monospace">REVENUE</text>
    <text x="78" y="68" fill="#fff" fontSize="13" fontWeight="600">₹4.2L</text>
    <rect x="152" y="36" width="76" height="44" rx="6" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <text x="160" y="52" fill="#6b7d96" fontSize="6" fontFamily="monospace">DEALS</text>
    <text x="160" y="68" fill="#fff" fontSize="13" fontWeight="600">87</text>
    <rect x="234" y="36" width="76" height="44" rx="6" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <text x="242" y="52" fill="#6b7d96" fontSize="6" fontFamily="monospace">RATE</text>
    <text x="242" y="68" fill="#4a9eff" fontSize="13" fontWeight="600">+24%</text>
    {/* Chart area */}
    <rect x="70" y="90" width="240" height="100" rx="6" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <polyline points="80,170 100,150 120,160 140,135 160,140 180,115 200,125 220,100 240,110 260,85 280,95 300,75" fill="none" stroke="url(#brandGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="80,170 100,150 120,160 140,135 160,140 180,115 200,125 220,100 240,110 260,85 280,95 300,75 300,180 80,180" fill="url(#brandGrad)" opacity="0.15" />
  </svg>
);

// 2. MEDCARE HOSPITAL — Patient calendar interface
const MedCareMockup = () => (
  <svg viewBox="0 0 320 200" style={baseStyle} xmlns="http://www.w3.org/2000/svg">
    {baseGradients}
    <rect x="0" y="0" width="320" height="28" fill="#0f1318" />
    <rect x="12" y="10" width="60" height="8" rx="2" fill="url(#brandGrad)" />
    <text x="80" y="17" fill="#6b7d96" fontSize="7" fontFamily="monospace">MEDCARE</text>
    {/* Patient list left */}
    <rect x="14" y="40" width="100" height="148" rx="8" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <text x="22" y="56" fill="#6b7d96" fontSize="6" fontFamily="monospace">TODAY • 12 PATIENTS</text>
    {[60, 80, 100, 120, 140, 160].map((y, i) => (
      <g key={i}>
        <circle cx="26" cy={y + 8} r="6" fill={i === 1 ? 'url(#brandGrad)' : '#2a3548'} />
        <rect x="38" y={y + 4} width="50" height="3" rx="1" fill="#fff" opacity="0.85" />
        <rect x="38" y={y + 10} width="38" height="2.5" rx="1" fill="#6b7d96" />
      </g>
    ))}
    {/* Right calendar */}
    <rect x="120" y="40" width="186" height="148" rx="8" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <text x="130" y="56" fill="#fff" fontSize="9" fontWeight="600">Schedule</text>
    {/* Time slots */}
    {[68, 86, 104, 122, 140, 158, 176].map((y, i) => (
      <g key={i}>
        <text x="130" y={y + 6} fill="#6b7d96" fontSize="6" fontFamily="monospace">{`${9 + i}:00`}</text>
        <rect x="148" y={y} width={i === 2 || i === 4 ? 140 : 100} height="12" rx="3"
          fill={i === 2 ? 'url(#brandGrad)' : i === 4 ? 'url(#purpleGrad)' : '#2a3548'} opacity={i === 2 || i === 4 ? '1' : '0.4'} />
      </g>
    ))}
  </svg>
);

// 3. AI CHATBOT — Chat interface
const AIChatbotMockup = () => (
  <svg viewBox="0 0 320 200" style={baseStyle} xmlns="http://www.w3.org/2000/svg">
    {baseGradients}
    <rect x="0" y="0" width="320" height="28" fill="#0f1318" />
    <circle cx="16" cy="14" r="6" fill="url(#brandGrad)" />
    <rect x="28" y="10" width="60" height="3" rx="1" fill="#fff" />
    <rect x="28" y="16" width="40" height="2" rx="1" fill="#6b7d96" />
    {/* Chat messages */}
    <rect x="14" y="40" width="180" height="22" rx="11" fill="#1a2030" />
    <text x="22" y="55" fill="#a8b3c5" fontSize="7" fontFamily="sans-serif">How do I integrate Stripe?</text>
    <rect x="100" y="72" width="206" height="42" rx="11" fill="url(#brandGrad)" />
    <text x="110" y="86" fill="#fff" fontSize="7" fontWeight="600">To integrate Stripe with your app,</text>
    <text x="110" y="98" fill="#fff" fontSize="7">first install the SDK with npm,</text>
    <text x="110" y="110" fill="#fff" fontSize="7" opacity="0.85">then configure your API keys...</text>
    {/* Source citation */}
    <rect x="100" y="120" width="120" height="14" rx="3" fill="#1a2030" stroke="#4a9eff" strokeWidth="0.5" />
    <circle cx="108" cy="127" r="2" fill="#4a9eff" />
    <text x="114" y="130" fill="#4a9eff" fontSize="6" fontFamily="monospace">stripe-docs.md • p.12</text>
    {/* User typing area */}
    <rect x="14" y="170" width="292" height="20" rx="10" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <text x="24" y="183" fill="#6b7d96" fontSize="7">Ask anything...</text>
    <circle cx="294" cy="180" r="6" fill="url(#brandGrad)" />
  </svg>
);

// 4. TRADEFLOW ALGO — Trading chart
const TradeFlowMockup = () => (
  <svg viewBox="0 0 320 200" style={baseStyle} xmlns="http://www.w3.org/2000/svg">
    {baseGradients}
    <rect x="0" y="0" width="320" height="24" fill="#0f1318" />
    <text x="14" y="16" fill="#fff" fontSize="9" fontWeight="600">RELIANCE</text>
    <text x="80" y="16" fill="#22c55e" fontSize="8" fontWeight="600">+2.34%</text>
    <text x="240" y="16" fill="#6b7d96" fontSize="7" fontFamily="monospace">₹2,847.50</text>
    {/* Candlestick chart */}
    <g>
      {[
        { x: 22, h: 30, t: 80, b: 130, color: '#22c55e' },
        { x: 38, h: 50, t: 110, b: 145, color: '#ef4444' },
        { x: 54, h: 35, t: 95, b: 130, color: '#22c55e' },
        { x: 70, h: 45, t: 90, b: 135, color: '#22c55e' },
        { x: 86, h: 60, t: 75, b: 135, color: '#ef4444' },
        { x: 102, h: 40, t: 85, b: 125, color: '#22c55e' },
        { x: 118, h: 30, t: 95, b: 125, color: '#22c55e' },
        { x: 134, h: 50, t: 85, b: 135, color: '#ef4444' },
        { x: 150, h: 70, t: 65, b: 135, color: '#22c55e' },
        { x: 166, h: 35, t: 70, b: 105, color: '#22c55e' },
        { x: 182, h: 40, t: 65, b: 105, color: '#22c55e' },
        { x: 198, h: 30, t: 70, b: 100, color: '#ef4444' },
        { x: 214, h: 50, t: 50, b: 100, color: '#22c55e' },
        { x: 230, h: 35, t: 55, b: 90, color: '#22c55e' },
        { x: 246, h: 45, t: 45, b: 90, color: '#22c55e' },
        { x: 262, h: 55, t: 35, b: 90, color: '#22c55e' },
        { x: 278, h: 40, t: 40, b: 80, color: '#22c55e' },
        { x: 294, h: 45, t: 30, b: 75, color: '#22c55e' },
      ].map((c, i) => (
        <g key={i}>
          <line x1={c.x + 4} y1={c.t - 8} x2={c.x + 4} y2={c.b + 8} stroke={c.color} strokeWidth="0.8" />
          <rect x={c.x} y={c.t} width="8" height={c.h} fill={c.color} />
        </g>
      ))}
    </g>
    {/* MA line */}
    <polyline points="22,135 38,140 54,128 70,128 86,130 102,120 118,118 134,128 150,120 166,100 182,100 198,98 214,90 230,85 246,82 262,75 278,68 294,60"
      fill="none" stroke="url(#brandGrad)" strokeWidth="1.5" />
    {/* Bottom bar */}
    <rect x="0" y="180" width="320" height="20" fill="#0f1318" />
    <rect x="14" y="186" width="60" height="8" rx="4" fill="url(#brandGrad)" />
    <text x="20" y="192" fill="#fff" fontSize="6" fontWeight="600">BUY ₹2,847</text>
    <rect x="80" y="186" width="60" height="8" rx="4" fill="#1a2030" stroke="#ef4444" strokeWidth="0.5" />
    <text x="86" y="192" fill="#ef4444" fontSize="6" fontWeight="600">SELL ₹2,853</text>
  </svg>
);

// 5. SHOPSPHERE — E-commerce product grid
const ShopSphereMockup = () => (
  <svg viewBox="0 0 320 200" style={baseStyle} xmlns="http://www.w3.org/2000/svg">
    {baseGradients}
    <rect x="0" y="0" width="320" height="32" fill="#0f1318" />
    <text x="14" y="20" fill="#fff" fontSize="11" fontWeight="700">ShopSphere</text>
    <rect x="200" y="10" width="80" height="14" rx="7" fill="#1a2030" />
    <text x="210" y="20" fill="#6b7d96" fontSize="6">Search...</text>
    <circle cx="294" cy="16" r="7" fill="url(#brandGrad)" />
    <text x="291" y="19" fill="#fff" fontSize="7" fontWeight="700">3</text>
    {/* Product grid 3 cols */}
    {[
      { x: 14, color: 'url(#brandGrad)' },
      { x: 116, color: 'url(#purpleGrad)' },
      { x: 218, color: 'url(#blueGrad)' },
    ].map((p, i) => (
      <g key={i}>
        <rect x={p.x} y="44" width="88" height="72" rx="6" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
        <rect x={p.x + 6} y="50" width="76" height="48" rx="4" fill={p.color} opacity="0.7" />
        {/* Heart icon */}
        <circle cx={p.x + 76} cy="56" r="5" fill="#1a2030" />
        <path d={`M${p.x + 73} 56 q1.5 -2 3 0 q1.5 -2 3 0 q0 2 -3 4 q-3 -2 -3 -4`} fill="#ef4444" opacity="0.9" />
        {/* Price tag */}
        <rect x={p.x + 6} y="102" width="50" height="6" rx="2" fill="#fff" opacity="0.9" />
        <rect x={p.x + 60} y="102" width="22" height="6" rx="2" fill="#22c55e" />
      </g>
    ))}
    {/* Filter bar */}
    <rect x="14" y="128" width="292" height="32" rx="6" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <text x="22" y="142" fill="#6b7d96" fontSize="6" fontFamily="monospace">FILTERS</text>
    {[60, 100, 140, 180, 220].map((x, i) => (
      <rect key={i} x={x} y="138" width="32" height="14" rx="7" fill={i === 1 ? 'url(#brandGrad)' : '#1a2030'} stroke="#2a3548" strokeWidth="0.5" />
    ))}
    {/* Add to cart bar */}
    <rect x="14" y="170" width="200" height="20" rx="10" fill="url(#brandGrad)" />
    <text x="68" y="183" fill="#fff" fontSize="7" fontWeight="700">ADD TO CART · ₹2,499</text>
    <rect x="222" y="170" width="84" height="20" rx="10" fill="#1a2030" stroke="#fff" strokeWidth="0.5" opacity="0.8" />
    <text x="240" y="183" fill="#fff" fontSize="7" fontWeight="600">BUY NOW</text>
  </svg>
);

// 6. INVOICE PRO SAAS — Invoice document
const InvoiceProMockup = () => (
  <svg viewBox="0 0 320 200" style={baseStyle} xmlns="http://www.w3.org/2000/svg">
    {baseGradients}
    <rect x="0" y="0" width="320" height="24" fill="#0f1318" />
    <rect x="14" y="8" width="50" height="8" rx="2" fill="url(#brandGrad)" />
    {/* Invoice document */}
    <rect x="40" y="36" width="240" height="148" rx="6" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <text x="50" y="56" fill="#fff" fontSize="11" fontWeight="700">INVOICE #1042</text>
    <rect x="220" y="48" width="50" height="14" rx="7" fill="#22c55e" opacity="0.2" />
    <text x="230" y="58" fill="#22c55e" fontSize="7" fontWeight="700">PAID</text>
    {/* Bill to */}
    <text x="50" y="76" fill="#6b7d96" fontSize="6" fontFamily="monospace">BILL TO</text>
    <rect x="50" y="80" width="80" height="3" rx="1" fill="#fff" />
    <rect x="50" y="86" width="60" height="2" rx="1" fill="#6b7d96" />
    {/* Lines */}
    <line x1="50" y1="100" x2="270" y2="100" stroke="#1f2938" strokeWidth="0.5" />
    {[110, 124, 138].map((y, i) => (
      <g key={i}>
        <rect x="50" y={y} width="120" height="3" rx="1" fill="#fff" opacity={0.85 - i * 0.15} />
        <rect x="220" y={y} width="50" height="3" rx="1" fill="#fff" opacity={0.85 - i * 0.15} />
      </g>
    ))}
    <line x1="50" y1="152" x2="270" y2="152" stroke="#1f2938" strokeWidth="0.5" />
    <text x="50" y="166" fill="#6b7d96" fontSize="6" fontFamily="monospace">TOTAL (incl. GST)</text>
    <text x="220" y="170" fill="url(#brandGrad)" fontSize="13" fontWeight="700">₹47,200</text>
  </svg>
);

// 7. TASKPILOT — Kanban board
const TaskPilotMockup = () => (
  <svg viewBox="0 0 320 200" style={baseStyle} xmlns="http://www.w3.org/2000/svg">
    {baseGradients}
    <rect x="0" y="0" width="320" height="24" fill="#0f1318" />
    <text x="14" y="16" fill="#fff" fontSize="9" fontWeight="700">Sprint Board</text>
    {/* Three columns */}
    {[
      { x: 14, title: 'TO DO', color: '#6b7d96', count: 4 },
      { x: 116, title: 'IN PROGRESS', color: '#4a9eff', count: 3 },
      { x: 218, title: 'DONE', color: '#22c55e', count: 5 },
    ].map((col, i) => (
      <g key={i}>
        <text x={col.x + 6} y="40" fill={col.color} fontSize="6" fontFamily="monospace" fontWeight="700">{col.title}</text>
        <text x={col.x + 80} y="40" fill="#6b7d96" fontSize="6" fontFamily="monospace">{col.count}</text>
        {/* Cards */}
        {[48, 76, 104, 132].slice(0, col.count >= 3 ? 3 : 2).map((y, j) => (
          <g key={j}>
            <rect x={col.x} y={y} width="88" height="22" rx="4" fill="#161b24" stroke={i === 1 && j === 0 ? 'url(#brandGrad)' : '#1f2938'} strokeWidth={i === 1 && j === 0 ? 1 : 0.5} />
            <rect x={col.x + 4} y={y + 4} width="60" height="2.5" rx="1" fill="#fff" opacity="0.8" />
            <rect x={col.x + 4} y={y + 10} width="40" height="2" rx="1" fill="#6b7d96" />
            <circle cx={col.x + 80} cy={y + 14} r="3" fill={i === 0 ? '#6b7d96' : i === 1 ? 'url(#brandGrad)' : '#22c55e'} />
          </g>
        ))}
      </g>
    ))}
    {/* Bottom progress */}
    <rect x="14" y="170" width="292" height="20" rx="6" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <rect x="14" y="170" width="180" height="20" rx="6" fill="url(#brandGrad)" opacity="0.5" />
    <text x="22" y="183" fill="#fff" fontSize="7" fontFamily="monospace">SPRINT 12 • 62% COMPLETE</text>
  </svg>
);

// 8. FINSIGHT — Analytics dashboard with charts
const FinSightMockup = () => (
  <svg viewBox="0 0 320 200" style={baseStyle} xmlns="http://www.w3.org/2000/svg">
    {baseGradients}
    <rect x="0" y="0" width="320" height="24" fill="#0f1318" />
    <text x="14" y="16" fill="#fff" fontSize="9" fontWeight="700">FinSight Analytics</text>
    {/* Top stats */}
    <rect x="14" y="36" width="68" height="40" rx="5" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <text x="20" y="50" fill="#6b7d96" fontSize="5" fontFamily="monospace">CASHFLOW</text>
    <text x="20" y="66" fill="#22c55e" fontSize="11" fontWeight="700">+₹1.2L</text>
    <rect x="86" y="36" width="68" height="40" rx="5" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <text x="92" y="50" fill="#6b7d96" fontSize="5" fontFamily="monospace">RECEIVABLE</text>
    <text x="92" y="66" fill="#fff" fontSize="11" fontWeight="700">₹3.8L</text>
    <rect x="158" y="36" width="68" height="40" rx="5" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <text x="164" y="50" fill="#6b7d96" fontSize="5" fontFamily="monospace">PAYABLE</text>
    <text x="164" y="66" fill="#ef4444" fontSize="11" fontWeight="700">₹1.4L</text>
    <rect x="230" y="36" width="76" height="40" rx="5" fill="url(#brandGrad)" />
    <text x="236" y="50" fill="#fff" fontSize="5" fontFamily="monospace" opacity="0.9">PROFIT MARGIN</text>
    <text x="236" y="66" fill="#fff" fontSize="11" fontWeight="700">28.4%</text>
    {/* Bar chart */}
    <rect x="14" y="86" width="180" height="100" rx="5" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    {[
      { x: 30, h: 40 }, { x: 50, h: 55 }, { x: 70, h: 35 }, { x: 90, h: 70 },
      { x: 110, h: 50 }, { x: 130, h: 80 }, { x: 150, h: 60 }, { x: 170, h: 75 },
    ].map((b, i) => (
      <rect key={i} x={b.x} y={170 - b.h} width="12" height={b.h} rx="2" fill="url(#brandGrad)" opacity={0.5 + i * 0.06} />
    ))}
    {/* Donut chart */}
    <rect x="198" y="86" width="108" height="100" rx="5" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <circle cx="240" cy="136" r="28" fill="none" stroke="#1f2938" strokeWidth="8" />
    <circle cx="240" cy="136" r="28" fill="none" stroke="url(#brandGrad)" strokeWidth="8"
      strokeDasharray="120 60" strokeDashoffset="0" transform="rotate(-90 240 136)" />
    <text x="240" y="138" fill="#fff" fontSize="11" fontWeight="700" textAnchor="middle">76%</text>
    <text x="276" y="120" fill="#6b7d96" fontSize="5" fontFamily="monospace">Q3</text>
  </svg>
);

// 9. QUICKSERVE RESTAURANT — Order tablet UI
const QuickServeMockup = () => (
  <svg viewBox="0 0 320 200" style={baseStyle} xmlns="http://www.w3.org/2000/svg">
    {baseGradients}
    <rect x="0" y="0" width="320" height="24" fill="#0f1318" />
    <text x="14" y="16" fill="#fff" fontSize="9" fontWeight="700">Table 7 · Order #084</text>
    {/* Menu items */}
    <rect x="14" y="36" width="180" height="148" rx="6" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <text x="22" y="52" fill="#fff" fontSize="8" fontWeight="600">Menu</text>
    {[64, 86, 108, 130, 152].map((y, i) => (
      <g key={i}>
        <rect x="22" y={y} width="36" height="14" rx="3" fill="url(#brandGrad)" opacity={0.3 + (i % 2) * 0.4} />
        <rect x="64" y={y + 2} width="80" height="3" rx="1" fill="#fff" opacity="0.85" />
        <rect x="64" y={y + 8} width="50" height="2" rx="1" fill="#6b7d96" />
        <text x="160" y={y + 8} fill="#fff" fontSize="7" fontWeight="600">₹{(i + 1) * 120 + 80}</text>
      </g>
    ))}
    {/* Cart right */}
    <rect x="200" y="36" width="106" height="148" rx="6" fill="#0d1117" stroke="#1f2938" strokeWidth="0.5" />
    <text x="208" y="52" fill="#fff" fontSize="8" fontWeight="600">Order</text>
    {[64, 80, 96, 112].map((y, i) => (
      <g key={i}>
        <rect x="208" y={y} width="60" height="2.5" rx="1" fill="#fff" opacity="0.85" />
        <text x="278" y={y + 3} fill="#fff" fontSize="6">×{i + 1}</text>
      </g>
    ))}
    <line x1="208" y1="130" x2="298" y2="130" stroke="#1f2938" strokeWidth="0.5" />
    <text x="208" y="146" fill="#6b7d96" fontSize="6" fontFamily="monospace">TOTAL</text>
    <text x="208" y="158" fill="url(#brandGrad)" fontSize="11" fontWeight="700">₹840</text>
    <rect x="208" y="166" width="90" height="14" rx="7" fill="url(#brandGrad)" />
    <text x="232" y="176" fill="#fff" fontSize="6" fontWeight="700">SEND TO KITCHEN</text>
  </svg>
);

// 10. EDUTRACK LMS — Course player
const EduTrackMockup = () => (
  <svg viewBox="0 0 320 200" style={baseStyle} xmlns="http://www.w3.org/2000/svg">
    {baseGradients}
    <rect x="0" y="0" width="320" height="24" fill="#0f1318" />
    <text x="14" y="16" fill="#fff" fontSize="9" fontWeight="700">EduTrack · Module 4</text>
    {/* Video player */}
    <rect x="14" y="36" width="200" height="120" rx="6" fill="#0d1117" stroke="#1f2938" strokeWidth="0.5" />
    <rect x="14" y="36" width="200" height="120" rx="6" fill="url(#brandGrad)" opacity="0.15" />
    {/* Play button */}
    <circle cx="114" cy="92" r="20" fill="#fff" opacity="0.95" />
    <polygon points="108,82 108,102 124,92" fill="url(#brandGrad)" />
    {/* Progress bar */}
    <rect x="22" y="142" width="184" height="3" rx="1.5" fill="#1f2938" />
    <rect x="22" y="142" width="110" height="3" rx="1.5" fill="url(#brandGrad)" />
    <text x="22" y="138" fill="#fff" fontSize="6" fontFamily="monospace" opacity="0.7">12:34 / 22:45</text>
    {/* Side: lesson list */}
    <rect x="220" y="36" width="86" height="120" rx="6" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <text x="228" y="50" fill="#fff" fontSize="7" fontWeight="600">Lessons</text>
    {[60, 76, 92, 108, 124, 140].map((y, i) => (
      <g key={i}>
        <circle cx="232" cy={y + 4} r="3" fill={i < 3 ? '#22c55e' : i === 3 ? 'url(#brandGrad)' : '#2a3548'} />
        <rect x="240" y={y + 2} width="55" height="2.5" rx="1" fill={i < 4 ? '#fff' : '#6b7d96'} opacity={i < 4 ? 0.85 : 0.6} />
        <rect x="240" y={y + 7} width="35" height="2" rx="1" fill="#6b7d96" />
      </g>
    ))}
    {/* Quiz progress */}
    <rect x="14" y="166" width="200" height="22" rx="6" fill="url(#brandGrad)" />
    <text x="22" y="180" fill="#fff" fontSize="7" fontWeight="700">TAKE QUIZ → EARN CERTIFICATE</text>
  </svg>
);

// 11. PROPERTY HUB — Real estate listing
const PropertyHubMockup = () => (
  <svg viewBox="0 0 320 200" style={baseStyle} xmlns="http://www.w3.org/2000/svg">
    {baseGradients}
    <rect x="0" y="0" width="320" height="24" fill="#0f1318" />
    <text x="14" y="16" fill="#fff" fontSize="9" fontWeight="700">PropertyHub</text>
    {/* Map area */}
    <rect x="14" y="36" width="180" height="148" rx="6" fill="#0d1117" stroke="#1f2938" strokeWidth="0.5" />
    {/* Map roads */}
    <line x1="14" y1="80" x2="194" y2="80" stroke="#2a3548" strokeWidth="2" />
    <line x1="14" y1="120" x2="194" y2="120" stroke="#2a3548" strokeWidth="2" />
    <line x1="14" y1="160" x2="194" y2="160" stroke="#2a3548" strokeWidth="2" />
    <line x1="60" y1="36" x2="60" y2="184" stroke="#2a3548" strokeWidth="2" />
    <line x1="120" y1="36" x2="120" y2="184" stroke="#2a3548" strokeWidth="2" />
    <line x1="160" y1="36" x2="160" y2="184" stroke="#2a3548" strokeWidth="2" />
    {/* Map pins */}
    {[
      { x: 50, y: 70, price: '85L' },
      { x: 100, y: 100, price: '1.2Cr', highlight: true },
      { x: 145, y: 75, price: '65L' },
      { x: 80, y: 145, price: '95L' },
      { x: 165, y: 140, price: '1.8Cr' },
    ].map((pin, i) => (
      <g key={i}>
        <rect x={pin.x - 12} y={pin.y - 8} width="28" height="14" rx="7" fill={pin.highlight ? 'url(#brandGrad)' : '#fff'} />
        <text x={pin.x + 2} y={pin.y + 1} fill={pin.highlight ? '#fff' : '#0d1117'} fontSize="6" fontWeight="700" textAnchor="middle">₹{pin.price}</text>
      </g>
    ))}
    {/* Listing card */}
    <rect x="200" y="36" width="106" height="148" rx="6" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <rect x="208" y="44" width="90" height="50" rx="4" fill="url(#brandGrad)" opacity="0.4" />
    <text x="208" y="108" fill="#fff" fontSize="8" fontWeight="700">3BHK Apartment</text>
    <text x="208" y="120" fill="#6b7d96" fontSize="6">Bandra West, Mumbai</text>
    <text x="208" y="142" fill="url(#brandGrad)" fontSize="13" fontWeight="700">₹1.2 Cr</text>
    <rect x="208" y="148" width="90" height="14" rx="7" fill="#fff" opacity="0.95" />
    <text x="226" y="158" fill="#0d1117" fontSize="7" fontWeight="700">Schedule visit</text>
    <text x="208" y="174" fill="#6b7d96" fontSize="6" fontFamily="monospace">1,250 sq ft · Parking</text>
  </svg>
);

// 12. DENTALCARE — Patient profile + appointment
const DentalCareMockup = () => (
  <svg viewBox="0 0 320 200" style={baseStyle} xmlns="http://www.w3.org/2000/svg">
    {baseGradients}
    <rect x="0" y="0" width="320" height="24" fill="#0f1318" />
    <text x="14" y="16" fill="#fff" fontSize="9" fontWeight="700">DentalCare</text>
    {/* Patient profile */}
    <rect x="14" y="36" width="140" height="148" rx="6" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <circle cx="84" cy="64" r="18" fill="url(#brandGrad)" />
    <text x="84" y="69" fill="#fff" fontSize="13" fontWeight="700" textAnchor="middle">RP</text>
    <text x="84" y="98" fill="#fff" fontSize="9" fontWeight="700" textAnchor="middle">Rohan Patel</text>
    <text x="84" y="110" fill="#6b7d96" fontSize="6" textAnchor="middle">+91 98765 43210</text>
    {/* Tooth chart */}
    <rect x="22" y="120" width="124" height="56" rx="4" fill="#0d1117" />
    <text x="28" y="134" fill="#6b7d96" fontSize="5" fontFamily="monospace">TOOTH CHART</text>
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <g key={i}>
        <rect x={28 + i * 14} y="140" width="10" height="14" rx="2" fill={i === 3 || i === 5 ? '#ef4444' : '#fff'} opacity={i === 3 || i === 5 ? 1 : 0.85} />
        <rect x={28 + i * 14} y="158" width="10" height="14" rx="2" fill={i === 4 ? 'url(#brandGrad)' : '#fff'} opacity={i === 4 ? 1 : 0.85} />
      </g>
    ))}
    {/* Appointments */}
    <rect x="160" y="36" width="146" height="148" rx="6" fill="#161b24" stroke="#1f2938" strokeWidth="0.5" />
    <text x="170" y="52" fill="#fff" fontSize="8" fontWeight="700">Upcoming</text>
    {[
      { y: 64, date: 'Apr 30', time: '10:00 AM', type: 'Cleaning' },
      { y: 96, date: 'May 14', time: '4:00 PM', type: 'Filling', highlight: true },
      { y: 128, date: 'Jun 2', time: '11:30 AM', type: 'Checkup' },
    ].map((a, i) => (
      <g key={i}>
        <rect x="168" y={a.y} width="130" height="26" rx="4" fill={a.highlight ? 'url(#brandGrad)' : '#0d1117'} stroke={a.highlight ? 'none' : '#1f2938'} strokeWidth="0.5" />
        <text x="174" y={a.y + 10} fill="#fff" fontSize="7" fontWeight="700">{a.date} · {a.time}</text>
        <text x="174" y={a.y + 21} fill={a.highlight ? '#fff' : '#6b7d96'} fontSize="6" opacity={a.highlight ? 0.9 : 1}>{a.type}</text>
      </g>
    ))}
    <rect x="168" y="162" width="130" height="14" rx="7" fill="#1a2030" stroke="#4a9eff" strokeWidth="0.5" />
    <text x="186" y="172" fill="#4a9eff" fontSize="6" fontWeight="700">+ NEW APPOINTMENT</text>
  </svg>
);

const mockupsByProjectId = {
  'smartcrm-pro': SmartCRMMockup,
  'medcare-hospital': MedCareMockup,
  'ai-support-chatbot': AIChatbotMockup,
  'tradeflow-algo': TradeFlowMockup,
  'shopsphere': ShopSphereMockup,
  'invoicepro-saas': InvoiceProMockup,
  'taskpilot': TaskPilotMockup,
  'finsight-analytics': FinSightMockup,
  'quickserve-restaurant': QuickServeMockup,
  'edutrack-lms': EduTrackMockup,
  'propertyhub': PropertyHubMockup,
  'dentalcare-clinic': DentalCareMockup,
};

const ProjectMockup = ({ projectId }) => {
  const Component = mockupsByProjectId[projectId];
  if (!Component) return null;
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 10',
        borderRadius: '14px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        background: '#0a0a0c',
      }}
    >
      <Component />
    </div>
  );
};

export default ProjectMockup;
