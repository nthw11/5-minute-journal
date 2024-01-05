import React from 'react';

type MoonPhaseProps = {
    date: Date;
};

const MoonPhase: React.FC<MoonPhaseProps> = ({ date }) => {
    const getLunarPhase = (date: Date): number => {
        const knownFullMoon = new Date('2023-12-26T00:00:00Z');
        const lunarCycleLength = 29.53;
        const diffInDays = (date.getTime() - knownFullMoon.getTime()) / (1000 * 60 * 60 * 24);
        return diffInDays % lunarCycleLength;
    };

    const lunarAge = getLunarPhase(date);
    let phaseBlocks: boolean[];

    if (lunarAge < 1.84566) {
        phaseBlocks = [false, false, false, false]; // New Moon
        // phaseBlocks = [true, true, true, true]; // New Moon
    } else if (lunarAge < 4.53699) {
        phaseBlocks = [false, false, false, true]; // Waxing Crescent
        // phaseBlocks = [false, true, true, true]; // Waxing Crescent
    } else if (lunarAge < 9.22831) {
        phaseBlocks = [false, false, true, true]; // First Quarter
        // phaseBlocks = [false, false, true, true]; // First Quarter
    } else if (lunarAge < 12.91963) {
        phaseBlocks = [false, true, true, true]; // Waxing Gibbous
        // phaseBlocks = [false, false, false, true]; // Waxing Gibbous
    } else if (lunarAge < 17.61096) {
        phaseBlocks = [true, true, true, true]; // Full Moon
        // phaseBlocks = [false, false, false, false]; // Full Moon
    } else if (lunarAge < 19.30228) {
        phaseBlocks = [true, true, true, false]; // Waning Gibbous
        // phaseBlocks = [true, false, false, false]; // Waning Gibbous
    } else if (lunarAge < 23.99361) {
        phaseBlocks = [true, true, false, false]; // Last Quarter
        // phaseBlocks = [true, true, false, false]; // Last Quarter
    } else {
        phaseBlocks = [true, false, false, false]; // Waning Crescent
        // phaseBlocks = [true, true, true, false]; // Waning Crescent
    }

    return (
        <div style={{ display: 'flex' }}>
            {phaseBlocks.map((filled, index) => (
                <svg key={index} width="15" height="15" style={{ margin: '2px' }}>
                    <rect width="15" height="15" fill={filled ? '#555' : 'none'} stroke='#555' />
                </svg>
            ))}
        </div>
    );
};

export default MoonPhase;
