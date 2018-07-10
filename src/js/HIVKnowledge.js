/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import initialReformat,
    { sortDataByYear, arrangeData } from './format_data.js';
import { LineChart, Line, XAxis,
    YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer } from 'recharts';

class HIVKnowledge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            quote: ''
        };
    }

    componentDidMount() {
        //var data = require('../data/data.json');
        //data = initialReformat(data);
        var data = require('../data/data_final.json');
        this.setState({ data });
    }

    render() {
        /*let sortByYear = [], finalData = [], i = 0;
        if (this.state.data.length > 0) {
            sortByYear = sortDataByYear(this.state.data);
            finalData = arrangeData(sortByYear);
        }*/

        let finalData = [];

        if (this.state.data.length > 0) {
            finalData = this.state.data;
        }

        
        var countries = {}
        var lines = []

        if (finalData.length > 0) {
            for(const i in finalData) {
                for(const e in finalData[i]) {
                    countries[e] = 0;
                }
            }

            for(const country in countries) {
                if (country !== 'year') {
                    lines.push(<Line connectNulls={true} type="monotone" dataKey={country} />)
                }
            }
        }
        
        return (
            <div className="chart bar HIV">
                <h6>Knowlege about sexual transmission of AIDS (Average Both Sexes)</h6>
                <ResponsiveContainer width='80%' height={500}>
                    <LineChart cx="50%" cy="50%" outerRadius="80%" data={finalData}>
                    <XAxis dataKey="year" />
                    <YAxis domain={[0,100]}/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    {lines}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default HIVKnowledge;