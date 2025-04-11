import React, { useState, useEffect } from 'react';

function Portfolio() {
    const [headerColor, setHeaderColor] = useState("#000000");
    const [isRainbow, setIsRainbow] = useState(false);
    const [hue, setHue] = useState(0);

    useEffect(() => {

        let interval;

        if (isRainbow) {
            interval = setInterval(() => {
                setHue((prevHue) => (prevHue + 5) % 360);
                setHeaderColor(`hsl(${hue}, 100%, 50%)`);
            }, 100);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRainbow, hue]);

    function handleColorChange(event) { setHeaderColor(event.target.value); }

    function toggleRainbow() { setIsRainbow(!isRainbow); }

    return (
        <div className="portfolio-container">

            <header className="portfolio-header" style={{ backgroundColor: headerColor, position: 'relative', transition: 'background-color 0.5s linear' }}>
                <h1>My Portfolio</h1>
                <button className="rainbow-toggle" onClick={toggleRainbow} style={{ position: 'absolute', bottom: '10px', left: '10px' }}> </button>
            </header>
            
            <div className="color-picker-container">

                <label>Select Header Color:</label>
                <input type="color" value={headerColor} onChange={handleColorChange} disabled={isRainbow} />
            
            </div>

            <section className="portfolio-content">
                <h2>About Me</h2>
                <p>Hello!</p>               
                <h2>Projects</h2>
                <ul>
                    <li>Project 1</li>
                </ul>
            </section>

        </div>
    );
}

export default Portfolio;
