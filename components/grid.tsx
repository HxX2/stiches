"use client";

interface GridProps {
  squareSize?: number;
  gridColor?: string;
  junctionColor?: string;
  vignetteColor?: string;
}

export const Grid = ({ 
  squareSize = 50, 
  gridColor = "hsl(var(--heroui-default-200))",
  junctionColor = "hsl(var(--heroui-default-300))",
  vignetteColor = "hsl(var(--heroui-background))"
}: GridProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width={squareSize}
            height={squareSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${squareSize} 0 L 0 0 0 ${squareSize}`}
              fill="none"
              stroke={gridColor}
              strokeWidth="1"
            />
          </pattern>
          <pattern
            id="junctions"
            width={squareSize}
            height={squareSize}
            patternUnits="userSpaceOnUse"
            overflow="visible"
          >
            <g transform={`translate(-4.5, -4.5)`}>
              <path d="M4.5 0C5.32843 0 6 0.671573 6 1.5V3H7.5C8.32843 3 9 3.67157 9 4.5C9 5.32843 8.32843 6 7.5 6H6V7.5C6 8.32843 5.32843 9 4.5 9C3.67157 9 3 8.32843 3 7.5V6H1.5C0.671573 6 1.76401e-07 5.32843 0 4.5C3.62117e-08 3.67157 0.671573 3 1.5 3H3V1.5C3 0.671573 3.67157 0 4.5 0Z" fill={junctionColor}/>
            </g>
            <g transform={`translate(${squareSize - 4.5}, -4.5)`}>
              <path d="M4.5 0C5.32843 0 6 0.671573 6 1.5V3H7.5C8.32843 3 9 3.67157 9 4.5C9 5.32843 8.32843 6 7.5 6H6V7.5C6 8.32843 5.32843 9 4.5 9C3.67157 9 3 8.32843 3 7.5V6H1.5C0.671573 6 1.76401e-07 5.32843 0 4.5C3.62117e-08 3.67157 0.671573 3 1.5 3H3V1.5C3 0.671573 3.67157 0 4.5 0Z" fill={junctionColor}/>
            </g>
            <g transform={`translate(-4.5, ${squareSize - 4.5})`}>
              <path d="M4.5 0C5.32843 0 6 0.671573 6 1.5V3H7.5C8.32843 3 9 3.67157 9 4.5C9 5.32843 8.32843 6 7.5 6H6V7.5C6 8.32843 5.32843 9 4.5 9C3.67157 9 3 8.32843 3 7.5V6H1.5C0.671573 6 1.76401e-07 5.32843 0 4.5C3.62117e-08 3.67157 0.671573 3 1.5 3H3V1.5C3 0.671573 3.67157 0 4.5 0Z" fill={junctionColor}/>
            </g>
            <g transform={`translate(${squareSize - 4.5}, ${squareSize - 4.5})`}>
              <path d="M4.5 0C5.32843 0 6 0.671573 6 1.5V3H7.5C8.32843 3 9 3.67157 9 4.5C9 5.32843 8.32843 6 7.5 6H6V7.5C6 8.32843 5.32843 9 4.5 9C3.67157 9 3 8.32843 3 7.5V6H1.5C0.671573 6 1.76401e-07 5.32843 0 4.5C3.62117e-08 3.67157 0.671573 3 1.5 3H3V1.5C3 0.671573 3.67157 0 4.5 0Z" fill={junctionColor}/>
            </g>
          </pattern>
          <radialGradient id="vignette">
            <stop offset="0%" stopColor={vignetteColor} stopOpacity="0.5" />
            <stop offset="70%" stopColor={vignetteColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={vignetteColor} stopOpacity="1" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#junctions)" />
        <rect width="100%" height="100%" fill="url(#vignette)" />
      </svg>
    </div>
  );
};
