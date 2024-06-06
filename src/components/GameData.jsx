import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React from "react";

function GameData(){
    const data = [
        {
            name: 'first quarter',
            lead: 5,
        },
        {
            name: 'second quarter',
            lead: 10,
        },
        {
            name: 'third quarter',
            lead: -5,
        },
        {
            name: 'forth quarter',
            lead: 3,
        },
    ];
    const gradientOffset = () => {
        const dataMax = Math.max(...data.map((i) => i.lead));
        const dataMin = Math.min(...data.map((i) => i.lead));

        if (dataMax <= 0) {
            return 0;
        }
        if (dataMin >= 0) {
            return 1;
        }

        return dataMax / (dataMax - dataMin);
    };

    const off = gradientOffset();
    return(
        <div className="flex flex-col items-center">
            <h1 className="text-3xl pt-3">Score trend</h1>
            <AreaChart
                width={800}
                height={700}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <defs>
                    <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset={off} stopColor="#FFDD92" stopOpacity={1}/>
                        <stop offset={off} stopColor="#4DA87F" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                <Area type="monotone" dataKey="lead" stroke="#000" fill="url(#splitColor)"/>
            </AreaChart>
        </div>
    )
}

export default GameData