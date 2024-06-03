import React, { useEffect, useState, useRef } from 'react'
import * as echarts from 'echarts'
import usaJson from './USA.json'
import * as d3 from 'd3'
const Ranking = () => {
    const [mapData, setMapData] = useState([])
    const [barData, setBarData] = useState([])
    const [markPointData, setMarkPointData] = useState([])
    const chartDomRef = useRef(null)
    const myChartRef = useRef(null)
    const teamData = {
        'California': [
            {name: 'Los Angeles Lakers', wins: 42, icon: 'Images/Lakers.png'},
            {name: 'Golden State Warriors', wins: 39, icon: 'Images/Warriors.png'},
            {name: 'Los Angeles Clippers', wins: 47, icon: 'Images/Clippers.png'},
            {name: 'Sacramento Kings', wins: 31, icon: 'Images/Kings.png'}
        ],
        'Texas': [
            {name: 'Houston Rockets', wins: 17, icon: 'Images/Rockets.png'},
            {name: 'Dallas Mavericks', wins: 42, icon: 'Images/Mavericks.png'},
            {name: 'San Antonio Spurs', wins: 33, icon: 'Images/Spurs.png'}
        ],
        'New York': [
            {name: 'New York Knicks', wins: 41, icon: 'Images/Knicks.png'},
            {name: 'Brooklyn Nets', wins: 48, icon: 'Images/Nets.png'}
        ],
        'Florida': [
            {name: 'Miami Heat', wins: 40, icon: 'Images/Heat.png'},
            {name: 'Orlando Magic', wins: 21, icon: 'Images/Magic.png'}
        ],
        'Pennsylvania': [
            {name: 'Philadelphia 76ers', wins: 49, icon: 'Images/76ers.png'}
        ],
        'Illinois': [
            {name: 'Chicago Bulls', wins: 31, icon: 'Images/Bulls.png'}
        ],
        'Ohio': [
            {name: 'Cleveland Cavaliers', wins: 22, icon: 'Images/Cavaliers.png'}
        ],
        'Michigan': [
            {name: 'Detroit Pistons', wins: 20, icon: 'Images/Pistons.png'}
        ],
        'Georgia': [
            {name: 'Atlanta Hawks', wins: 41, icon: 'Images/Hawks.png'}
        ],
        'Massachusetts': [
            {name: 'Boston Celtics', wins: 36, icon: 'Images/Celtics.png'}
        ],
        'Indiana': [
            {name: 'Indiana Pacers', wins: 34, icon: 'Images/Pacers.png'}
        ],
        'Wisconsin': [
            {name: 'Milwaukee Bucks', wins: 46, icon: 'Images/Bucks.png'}
        ],
        'Colorado': [
            {name: 'Denver Nuggets', wins: 47, icon: 'Images/Nuggets.png'}
        ],
        'Minnesota': [
            {name: 'Minnesota Timberwolves', wins: 23, icon: 'Images/Timberwolves.png'}
        ],
        'Oklahoma': [
            {name: 'Oklahoma City Thunder', wins: 22, icon: 'Images/Thunder.png'}
        ],
        'Oregon': [
            {name: 'Portland Trail Blazers', wins: 42, icon: 'Images/Blazers.png'}
        ],
        'Utah': [
            {name: 'Utah Jazz', wins: 52, icon: 'Images/Jazz.png'}
        ],
        'Louisiana': [
            {name: 'New Orleans Pelicans', wins: 31, icon: 'Images/Pelicans.png'}
        ],
        'Arizona': [
            {name: 'Phoenix Suns', wins: 51, icon: 'Images/Suns.png'}
        ],
        'North Carolina': [
            {name: 'Charlotte Hornets', wins: 33, icon: 'Images/Hornets.png'}
        ],
        'Tennessee': [
            {name: 'Memphis Grizzlies', wins: 38, icon: 'Images/Grizzlies.png'}
        ],
        'District of Columbia': [
            {name: 'Washington Wizards', wins: 34, icon: 'Images/Wizards.png'}
        ],
        'Canada': [
            {name: 'Toronto Raptors', wins: 27, icon: 'Images/Raptors.png'}
        ]
    };
    useEffect(() => {
        const generateData = () => {
            const mapData = []
            const barData = []
            for (const state in teamData) {
                if (teamData.hasOwnProperty(state)) {
                    const totalWins = teamData[state].reduce(
                        (sum, team) => sum + team.wins,
                        0
                    )
                    mapData.push({ name: state, value: totalWins })
                    teamData[state].forEach((team) => {
                        barData.push({
                            name: team.name,
                            value: team.wins,
                            icon: team.icon,
                        })
                    })
                }
            }
            barData.sort((a, b) => b.value - a.value)
            setMapData(mapData)
            setBarData(barData)
        }
        generateData()
    }, [])
    const getTooltipContent = (params) => {
        const state = params.name
        if (teamData[state]) {
            let content = '<div>'
            teamData[state].forEach(function (team) {
                content +=
                    '<div><img src="' +
                    team.icon +
                    '" style="width:30px;height:30px;vertical-align:middle;margin-right:5px;" alt=""/>' +
                    team.name +
                    ' (' +
                    team.wins +
                    ' wins)</div>'
            })
            content += '</div>'
            return content
        }
        return state
    }
    useEffect(() =>{
        const generateMarkPointData = () => {
            const colorScale = d3
                .scaleSequential(d3.interpolateRdYlBu)
                .domain([60, 10])
            const newMarkPointData = []
            for (const state in teamData) {
                if (teamData.hasOwnProperty(state)) {
                    teamData[state].forEach((team) => {
                        newMarkPointData.push({
                            name: team.name,
                            coord: [],
                            value: team.wins,
                            icon: team.icon,
                            itemStyle: {
                                color: colorScale(team.wins),
                            },
                            label: {
                                formatter: team.wins,
                                position: 'right',
                                color: '#000000',
                            },
                        })
                    })
                }
            }
            // Add the mark point for Toronto Raptors
            newMarkPointData.push({
                name: 'Toronto Raptors',
                coord: [-79.3832, 43.6532],
                value: teamData['Canada'][0].wins,
                icon: 'Images/Raptors.png',
                itemStyle: {
                    color: colorScale(teamData['Canada'][0].wins),
                },
                label: {
                    formatter: teamData['Canada'][0].wins,
                    position: 'right',
                    color: '#000000',
                },
            })
            setMarkPointData(newMarkPointData)
        }
        generateMarkPointData()
    },[])
    useEffect(() =>{
        const chartDom = chartDomRef.current
        const myChart = echarts.init(chartDom)
        myChartRef.current = myChart
        echarts.registerMap('USA', usaJson, {})
        const mapOption = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    return getTooltipContent(params);
                }
            },
            visualMap: {
                left: 'right',
                min: 10,
                max: 60,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffeda0', '#fd8d3c', '#e31a1c', '#bd0026', '#800026']
                },
                text: ['High', 'Low'],
                calculable: true
            },
            series: [
                {
                    id: 'NBA teams',
                    type: 'map',
                    roam: true,
                    map: 'USA',
                    animationDurationUpdate: 1000,
                    universalTransition: true,
                    data: mapData,
                    markPoint: {
                        symbol: 'circle',
                        symbolSize: 20,
                        data: markPointData,
                        tooltip: {
                            formatter: function (params) {
                                const team = markPointData.find(t => t.name === params.name) || {};
                                return '<div><img src="' + team.icon + '" style="width:30px;height:30px;vertical-align:middle;margin-right:5px;" alt="' + params.name + '"/> ' + params.name + ' (' + team.value + ' wins)</div>';
                            }
                        }
                    }
                }
            ]
        };
        const barOption = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    return params.name + ' (' + params.value + ' wins)';
                }
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    rotate: 30
                },
                data: barData.map(item => item.name)  // y轴显示球队名称
            },
            animationDurationUpdate: 1000,
            series: {
                type: 'bar',
                id: 'NBA teams',
                data: barData.map(item => ({
                    name: item.name,
                    value: item.value
                })),
                universalTransition: true
            }
        };
        myChart.setOption(mapOption)
        const handleDoubleClick = () => {
            if (myChartRef.current) {
                myChartRef.current.setOption(
                    myChartRef.current.getOption().xAxis ? mapOption : barOption,
                    true
                )
            }
        }
        chartDom.addEventListener('dblclick', handleDoubleClick)
        return () => {
            chartDom.removeEventListener('dblclick', handleDoubleClick)
            myChart.dispose()
        }

    },[])
    return <div ref={chartDomRef} style={{ width: '100%', height: '80vh' }}></div>
}
export default Ranking;