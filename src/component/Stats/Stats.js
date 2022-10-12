import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Stats.css'

const Stats = () => {
    const dataLoad = useLoaderData();
    const data = dataLoad.data;


    return (
        <div>
            <h2 className='text-center my-5'>This Recharts has total of {data.length} Quiz Question Analysis. </h2>
            <div className='my-5'>
                <ResponsiveContainer width='100%' height={400}>
                    <LineChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                        <Line

                            type="monotone"
                            dataKey="total"
                            stroke="#8884d8"
                        // activeDot={{ r: 8 }}
                        >

                        </Line>

                    </LineChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
};

export default Stats;