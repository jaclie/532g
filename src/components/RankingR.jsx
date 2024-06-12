import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RankingR = () => {
    const data = [
        { ranking: '1', rebound: 14.6, name: "Rudy Gobert", team:"./Images/Jazz.png" },
        { ranking: '2', rebound: 13.7, name: "Nikola Jokic", team:"./Images/Nuggets.png"},
        { ranking: '3', rebound: 12.1, name: "Domantas Sabonis", team:"./Images/Pacers.png"},
        { ranking: '4', rebound: 11.8, name: "Clint Capela", team:"./Images/Hawks.png"},
        { ranking: '5', rebound: 11.7, name: "Joel Embiid", team:"./Images/76ers.png"},
        { ranking: '6', rebound: 11.6, name: "Giannis Antetokounmpo", team:"./Images/Bucks.png"},
        { ranking: '7', rebound: 11.4, name: "Jonas Valanciunas", team:"./Images/Pelicans.png"},
        { ranking: '8', rebound: 11.0, name: "Nikola Vucevic", team:"./Images/Bulls.png"},
        { ranking: '9', rebound: 10.4, name: "Wendell Carter Jr.", team:"./Images/Magic.png"},
        { ranking: '10', rebound: 10.2, name: "DeAndre Ayton", team:"./Images/Suns.png"},
        { ranking: '11', rebound: 10.1, name: "Christian Wood", team:"./Images/Rockets.png"},
        { ranking: '12', rebound: 10.0, name: "Julius Randle", team:"./Images/Knicks.png"},
        { ranking: '13', rebound: 10.0, name: "Steven Adams", team:"./Images/Grizzlies.png"},
        { ranking: '14', rebound: 9.9, name: "Karl-Anthony Towns", team:"./Images/Timberwolves.png"},
        { ranking: '15', rebound: 9.7, name: "Robert Williams III", team:"./Images/Celtics.png"},
    ];
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 custom-tooltip">
                    <img src={payload[0].payload.team} height="70px" width="70px" className="text-gray-500 dark:text-gray-400 mb-3"></img>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{payload[0].payload.name}</h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">#Ranking: {payload[0].payload.ranking} rebound: {payload[0].payload.rebound}</p>
                </div>
            )
        }

        return null;
    };
    return <div className="flex flex-col items-center">
        <h1 className="text-3xl pt-3">Play Offs Player Ranking</h1>
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
            <Bar dataKey="rebound" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue"/>}/>
        </BarChart>
    </div>;
};
export default RankingR;
