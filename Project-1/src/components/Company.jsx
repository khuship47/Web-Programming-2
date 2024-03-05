import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

const Company = ({ historyData }) => {
    console.log("historyData:", historyData);
    if (!historyData || historyData.length === 0) {
        return <div>No data availablebkjbkaebgvalbranr apfjpeajgps jg gj sjgpojgperojgorejg[sprg[sjrgpjgpjsjgsperjpsjgpjgojr</div>;
    }
    
    return (
        <div className="company-page">
            <div className="home-page">Company</div>
            <div className="charts">
                {/* Low-Highs Chart */}
                <ResponsiveContainer>
                    <LineChart data={historyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="low" stroke="blue" name="Low" />
                        <Line type="monotone" dataKey="high" stroke="red" name="High" />
                    </LineChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
};

export default Company;
