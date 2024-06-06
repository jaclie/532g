import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function EfficiencyRanking(){
    const data = [
        { ranking: 1, score: 31.7, name: "Giannis Antetokounmpo", team:"./Images/Bucks.png" },
        { ranking: 2, score: 31.7, name: "Nikola Jokic", team:"./Images/Nuggets.png"},
        { ranking: 3, score: 31.0, name: "Luka Doncic", team:"./Images/Mavericks.png"},
        { ranking: 4, score: 27.4, name: "Jimmy Butler", team:"./Images/Heat.png"},
        { ranking: 5, score: 27.4, name: "Stephen Curry", team:"./Images/Warriors.png"},
        { ranking: 6, score: 27.1, name: "Ja Morant", team:"./Images/Grizzlies.png"},
        { ranking: 7, score: 27.0, name: "Brandon Ingram", team:"./Images/Pelicans.png"},
        { ranking: 8, score: 26.3, name: "Kevin Durant", team:"./Images/Nets.png"},
        { ranking: 9, score: 25.6, name: "Jayson Tatum", team:"./Images/Celtics.png"},
        { ranking: 10, score: 25.5, name: "Donovan Mitchell", team:"./Images/Jazz.png"},
        { ranking: 11, score: 25.2, name: "Anthony Edwards", team:"./Images/Timberwolves.png"},
        { ranking: 12, score: 23.6, name: "Joel Embiid", team:"./Images/76ers.png"},
        { ranking: 13, score: 23.3, name: "Devin Booker", team:"./Images/Suns.png"},
        { ranking: 14, score: 23.1, name: "Jaylen Brown", team:"./Images/Celtics.png"},
        { ranking: 15, score: 22.8, name: "Pascal Siakam", team:"./Images/Raptors.png"},
    ];
    return(
        <>
            <ResponsiveContainer width={1700} height={800}>
            <ScatterChart
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid />
                <XAxis type="number" dataKey="ranking" name="stature" unit="cm" />
                <YAxis type="number" dataKey="score" name="weight" unit="kg" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="A school" data={data} fill="#8884d8" />
            </ScatterChart>
            </ResponsiveContainer>
        </>
    )
}
export default EfficiencyRanking;