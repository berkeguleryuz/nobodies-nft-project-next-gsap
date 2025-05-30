'use client';

interface SVGProps {
  className?: string;
  size?: number;
}

export const CyberGrid = ({ className = "", size = 100 }: SVGProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    fill="none"
  >
    <defs>
      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#grid)" />
    <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="80" cy="80" r="2" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

export const CyberCircuit = ({ className = "", size = 100 }: SVGProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    fill="none"
  >
    <path 
      d="M10 50 L30 50 L30 30 L70 30 L70 70 L90 70" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
      opacity="0.7"
    />
    <circle cx="30" cy="50" r="3" fill="currentColor" opacity="0.8">
      <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="70" cy="30" r="3" fill="currentColor" opacity="0.8">
      <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="70" cy="70" r="3" fill="currentColor" opacity="0.8">
      <animate attributeName="r" values="3;5;3" dur="1.8s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

export const CyberHex = ({ className = "", size = 100 }: SVGProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    fill="none"
  >
    <polygon 
      points="50,10 80,30 80,70 50,90 20,70 20,30" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
      opacity="0.6"
    >
      <animateTransform 
        attributeName="transform" 
        type="rotate" 
        values="0 50 50;360 50 50" 
        dur="20s" 
        repeatCount="indefinite"
      />
    </polygon>
    <polygon 
      points="50,25 70,37.5 70,62.5 50,75 30,62.5 30,37.5" 
      stroke="currentColor" 
      strokeWidth="1" 
      fill="none"
      opacity="0.4"
    >
      <animateTransform 
        attributeName="transform" 
        type="rotate" 
        values="360 50 50;0 50 50" 
        dur="15s" 
        repeatCount="indefinite"
      />
    </polygon>
  </svg>
);

export const CyberOrb = ({ className = "", size = 100 }: SVGProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    fill="none"
  >
    <defs>
      <radialGradient id="orbGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.8"/>
        <stop offset="70%" stopColor="currentColor" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.1"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="40" fill="url(#orbGradient)">
      <animate attributeName="r" values="35;45;35" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

export const CyberGlitch = ({ className = "", size = 100 }: SVGProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    fill="none"
  >
    <rect x="10" y="20" width="80" height="4" fill="currentColor" opacity="0.7">
      <animate attributeName="opacity" values="0.7;0;0.7" dur="0.1s" repeatCount="indefinite"/>
      <animate attributeName="x" values="10;12;8;10" dur="0.2s" repeatCount="indefinite"/>
    </rect>
    <rect x="15" y="40" width="70" height="4" fill="currentColor" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0;0.5" dur="0.15s" repeatCount="indefinite"/>
      <animate attributeName="x" values="15;13;17;15" dur="0.25s" repeatCount="indefinite"/>
    </rect>
    <rect x="20" y="60" width="60" height="4" fill="currentColor" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0;0.8" dur="0.12s" repeatCount="indefinite"/>
      <animate attributeName="x" values="20;22;18;20" dur="0.18s" repeatCount="indefinite"/>
    </rect>
  </svg>
);

export const CyberFrame = ({ className = "", size = 100 }: SVGProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    fill="none"
  >
    <path 
      d="M10 10 L30 10 M70 10 L90 10 M90 10 L90 30 M90 70 L90 90 M90 90 L70 90 M30 90 L10 90 M10 90 L10 70 M10 30 L10 10" 
      stroke="currentColor" 
      strokeWidth="2" 
      opacity="0.6"
    />
    <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.8"/>
    <circle cx="90" cy="10" r="2" fill="currentColor" opacity="0.8"/>
    <circle cx="90" cy="90" r="2" fill="currentColor" opacity="0.8"/>
    <circle cx="10" cy="90" r="2" fill="currentColor" opacity="0.8"/>
  </svg>
);

export const DataStream = ({ className = "", size = 100 }: SVGProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    fill="none"
  >
    <g opacity="0.7">
      <rect x="10" y="10" width="2" height="8" fill="currentColor">
        <animate attributeName="height" values="8;20;8" dur="1s" repeatCount="indefinite"/>
      </rect>
      <rect x="20" y="15" width="2" height="12" fill="currentColor">
        <animate attributeName="height" values="12;25;12" dur="1.2s" repeatCount="indefinite"/>
      </rect>
      <rect x="30" y="12" width="2" height="10" fill="currentColor">
        <animate attributeName="height" values="10;18;10" dur="0.8s" repeatCount="indefinite"/>
      </rect>
      <rect x="40" y="8" width="2" height="15" fill="currentColor">
        <animate attributeName="height" values="15;30;15" dur="1.5s" repeatCount="indefinite"/>
      </rect>
      <rect x="50" y="20" width="2" height="6" fill="currentColor">
        <animate attributeName="height" values="6;22;6" dur="0.9s" repeatCount="indefinite"/>
      </rect>
    </g>
  </svg>
);

export const CyberPulse = ({ className = "", size = 100 }: SVGProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    fill="none"
  >
    <circle cx="50" cy="50" r="5" fill="currentColor" opacity="1"/>
    <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6">
      <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3">
      <animate attributeName="r" values="25;35;25" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite"/>
    </circle>
  </svg>
); 