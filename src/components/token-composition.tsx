
import { useState, useEffect, useRef } from 'react';
import Chart, { TooltipItem } from 'chart.js/auto';
import generateData from '@/utils/utils';

const TokenComposition = () => {

    const chartRef = useRef<HTMLCanvasElement>(null);
    const [windowWidth, setWindowWidth] = useState(0);
    const [timeframe, setTimeframe] = useState(200); // Default timeframe
    const [chartData, setChartData] = useState<number[]>([]); // Define the type of chartData

    useEffect(() => {
        // Function to update the state with the current window width
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Set the initial width
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        console.log(`Current window width: ${windowWidth}px`);

        // Clean up: Remove event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array ensures this runs only on mount and unmount

    // Update chart data when timeframe changes
    useEffect(() => {
        setChartData(generateData(timeframe));
    }, [timeframe]);
    
    // Used for creating the chart using Chart.js
    useEffect(() => {
        if (chartRef.current && chartData.length > 0) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                const myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: Array.from({ length: chartData.length }, (_, i) => i + 1),
                        datasets: [{
                            label: 'Dataset 1',
                            data: chartData,
                            backgroundColor: 'rgba(54, 162, 235, 0.5)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1,
                            fill: true,
                        },
                        {
                            label: 'Dataset 2',
                            data: chartData,
                            backgroundColor: 'rgba(54, 162, 235, 0.5)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1,
                            fill: true,
                        },
                    ]
                    },
                    options: {
                        scales: {
                            y: {
                                stacked: true
                            }
                        },
                        plugins: {
                            tooltip: {
                                enabled: true,
                                mode: 'index',
                                intersect: false,
                                callbacks: {
                                    label: function(tooltipItem: TooltipItem<'line'>) {
                                        let label = tooltipItem.dataset.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        label += tooltipItem.raw;
                                        return label;
                                    }
                                }
                            },
                        },
                        interaction: {
                            mode: 'nearest',
                            intersect: true,
                        }
                    }
                });
                return () => {
                    myChart.destroy();
                };    
            }    
        }
    }, [chartData, windowWidth]);

    return (
        <>
            {/* Title */}
            <div className='font-orbitron text-2xl m-20'>
                Composition of Restaked Tokens
            </div>

            <div className="relative m-20 z-0">

                {/* Timeframe selection buttons */}

                <div className="font-orbitron text-sm absolute -top-4 right-0 flex">

                    {[1, 7, 30, 200].map((tf) => (
                        <button key={tf} onClick={() => setTimeframe(tf)} className={`px-2 py-1 text-white relative timeframe-button ${timeframe === tf ? 'active' : ''}`}>
                            {tf} d
                        </button>
                    ))}

                </div>

                {/* Chart canvas */}
                <canvas ref={chartRef} />

            </div>

        </>
    )
  }

export default TokenComposition;
