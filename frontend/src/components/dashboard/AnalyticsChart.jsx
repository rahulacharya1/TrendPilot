const AnalyticsChart = () => {
    // Monthly generations count
    const points = [
        { label: "Jan", val: 45 },
        { label: "Feb", val: 78 },
        { label: "Mar", val: 56 },
        { label: "Apr", val: 98 },
        { label: "May", val: 82 },
        { label: "Jun", val: 120 },
    ]

    const xCoords = [40, 120, 200, 280, 360, 440]
    const yCoords = points.map(p => 170 - (p.val / 140) * 120)

    // Construct path strings
    const linePath = xCoords.map((x, idx) => `${idx === 0 ? "M" : "L"} ${x} ${yCoords[idx]}`).join(" ")
    const areaPath = `${linePath} L ${xCoords[xCoords.length - 1]} 170 L ${xCoords[0]} 170 Z`

    return (
        <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-xs select-none">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-bold text-base text-foreground">Analytics Overview</h3>
                    <p className="text-xs text-muted-foreground">Monthly output breakdown</p>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Generations</span>
                </div>
            </div>

            {/* SVG Render */}
            <div className="relative w-full overflow-hidden">
                <svg viewBox="0 0 480 200" className="w-full h-auto">
                    {/* Grids */}
                    <line x1="40" y1="50" x2="440" y2="50" className="stroke-border/40 stroke-1" strokeDasharray="4 4" />
                    <line x1="40" y1="110" x2="440" y2="110" className="stroke-border/40 stroke-1" strokeDasharray="4 4" />
                    <line x1="40" y1="170" x2="440" y2="170" className="stroke-border/80 stroke-1" />

                    {/* Gradient Definition */}
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.0" />
                        </linearGradient>
                    </defs>

                    {/* Area path */}
                    <path d={areaPath} fill="url(#chartGradient)" />

                    {/* Line path */}
                    <path d={linePath} fill="none" className="stroke-primary stroke-[3.5]" strokeLinecap="round" />

                    {/* Data Points */}
                    {xCoords.map((x, idx) => (
                        <g key={idx} className="group cursor-pointer">
                            <circle
                                cx={x}
                                cy={yCoords[idx]}
                                r="4"
                                className="fill-card stroke-primary stroke-2 transition-all group-hover:r-5 group-hover:stroke-3"
                            />
                            {/* Hover tooltip text */}
                            <text
                                x={x}
                                y={yCoords[idx] - 10}
                                textAnchor="middle"
                                className="text-[9px] font-bold fill-foreground opacity-0 group-hover:opacity-100 transition-opacity bg-card"
                            >
                                {points[idx].val}
                            </text>
                        </g>
                    ))}

                    {/* Labels */}
                    {points.map((p, idx) => (
                        <text
                            key={idx}
                            x={xCoords[idx]}
                            y="190"
                            textAnchor="middle"
                            className="text-[9px] fill-muted-foreground font-semibold"
                        >
                            {p.label}
                        </text>
                    ))}
                </svg>
            </div>
        </div>
    )
}

export default AnalyticsChart

