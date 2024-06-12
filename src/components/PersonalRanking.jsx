import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PersonalRanking = () => {
    const data = [
        { ranking: '1', score: 31.7, name: "Giannis Antetokounmpo", team:"./Images/Bucks.png" },
        { ranking: '2', score: 31.7, name: "Nikola Jokic", team:"./Images/Nuggets.png"},
        { ranking: '3', score: 31.0, name: "Luka Doncic", team:"./Images/Mavericks.png"},
        { ranking: '4', score: 27.4, name: "Jimmy Butler", team:"./Images/Heat.png"},
        { ranking: '5', score: 27.4, name: "Stephen Curry", team:"./Images/Warriors.png"},
        { ranking: '6', score: 27.1, name: "Ja Morant", team:"./Images/Grizzlies.png"},
        { ranking: '7', score: 27.0, name: "Brandon Ingram", team:"./Images/Pelicans.png"},
        { ranking: '8', score: 26.3, name: "Kevin Durant", team:"./Images/Nets.png"},
        { ranking: '9', score: 25.6, name: "Jayson Tatum", team:"./Images/Celtics.png"},
        { ranking: '10', score: 25.5, name: "Donovan Mitchell", team:"./Images/Jazz.png"},
        { ranking: '11', score: 25.2, name: "Anthony Edwards", team:"./Images/Timberwolves.png"},
        { ranking: '12', score: 23.6, name: "Joel Embiid", team:"./Images/76ers.png"},
        { ranking: '13', score: 23.3, name: "Devin Booker", team:"./Images/Suns.png"},
        { ranking: '14', score: 23.1, name: "Jaylen Brown", team:"./Images/Celtics.png"},
        { ranking: '15', score: 22.8, name: "Pascal Siakam", team:"./Images/Raptors.png"},
    ];
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 custom-tooltip">
                    <img src={payload[0].payload.team} height="70px" width="70px" className="text-gray-500 dark:text-gray-400 mb-3"></img>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{payload[0].payload.name}</h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">#Ranking: {payload[0].payload.ranking} score: {payload[0].payload.score}</p>
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
            <XAxis dataKey="name" tick={{fontSize: 12}}/>
            <YAxis/>
            <Tooltip content={<CustomTooltip/>}/>
            <Legend/>
            <Bar dataKey="score" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue"/>}/>
        </BarChart>
    </div>;
};
export default PersonalRanking;
