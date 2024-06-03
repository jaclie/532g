import React from 'react';
import { Line } from '@ant-design/charts';

const PersonalRanking: React.FC = () => {
    const data = [
        { ranking: '1', score: 31.7, name: "Giannis Antetokounmpo" },
        { ranking: '2', score: 31.0 },
        { ranking: '3', score: 29.7 },
        { ranking: '4', score: 27.4 },
        { ranking: '5', score: 27.4 },
        { ranking: '6', score: 27.1 },
        { ranking: '7', score: 27.0 },
        { ranking: '8', score: 26.3 },
        { ranking: '9', score: 25.6 },
        { ranking: '10', score: 25.5 },
    ];

    const config = {
        data,
        title: {
            visible: true,
            text: 'Personal Ranking',
        },
        xField: 'ranking',
        yField: 'score',
        point: {
            visible: true,
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#2593fc',
                lineWidth: 2,
            },
        },
    };
    return <>
        <h1 className="text-lg">Personal Ranking</h1>
        <Line {...config} />
    </>;
};
export default PersonalRanking;
