import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RankingA = () => {
    const data = [
        { ranking: '1', assist: 9.8, name: "Ja Morant", team:"./Images/Grizzlies.png" },
        { ranking: '2', assist: 8.6, name: "James Harden", team:"./Images/76ers.png"},
        { ranking: '3', assist: 8.3, name: "Chris Pau", team:"./Images/Suns.png"},
        { ranking: '4', assist: 6.8, name: "Giannis Antetokounmpo", team:"./Images/Bucks.png"},
        { ranking: '5', assist: 6.7, name: "D'Angelo Russell", team:"./Images/Timberwolves.png"},
        { ranking: '6', assist: 6.5, name: "Jrue Holiday", team:"./Images/Bucks.png"},
        { ranking: '7', assist: 6.3, name: "Kevin Durant", team:"./Images/Nets.png"},
        { ranking: '8', assist: 6.3, name: "Draymond Green", team:"./Images/Warriors.png"},
        { ranking: '9', assist: 6.2, name: "Jayson Tatum", team:"./Images/Celtics.png"},
        { ranking: '10', assist: 6.0, name: "Brandon Ingram", team:"./Images/Pelicans.png"},
        { ranking: '11', assist: 6.0, name: "Zach LaVine", team:"./Images/Bulls.png"},
        { ranking: '12', assist: 6.0, name: "Trae Young", team:"./Images/Hawks.png"},
        { ranking: '13', assist: 6.0, name: "Luka Doncic", team:"./Images/Mavericks.png"},
        { ranking: '14', assist: 5.9, name: "Marcus Smart", team:"./Images/Celtics.png"},
        { ranking: '15', assist: 5.9, name: "Stephen Curry", team:"./Images/Warriors.png"},
    ];
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 custom-tooltip">
                    <img src={payload[0].payload.team} height="70px" width="70px" className="text-gray-500 dark:text-gray-400 mb-3"></img>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{payload[0].payload.name}</h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">#Ranking: {payload[0].payload.ranking} assist: {payload[0].payload.assist}</p>
                </div>
            )
        }

        return null;
    };
    return <div className="flex flex-col items-center">
        <h1 className="text-3xl pt-3">Player Ranking</h1>
        <BarChart
            width={1700}
            height={800}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name" tick={{fontSize: 10}}/>
            <YAxis/>
            <Tooltip content={<CustomTooltip/>}/>
            <Legend/>
            <Bar dataKey="assist" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue"/>}/>
        </BarChart>
    </div>;
};
export default RankingA;
