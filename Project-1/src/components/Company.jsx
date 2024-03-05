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
    
    if (!historyData || historyData.length === 0) {
        return <div style={{textAlign:"center", fontSize: "35px"}}>Please select a company.</div>;
    }
    
    return (
        <>
            
            <div className="home-page">Company</div>
            <div className="company-page">
                <div className='client-details'>
                    <p className='name'>Company Details</p>
                    <p>Symbol: {historyData.symbol}</p>
                    <p>Sector: </p>
                    <p>Sub Industry: </p>
                    <p>Location: </p>
                    <p>Exchange: </p>
                    <p>Website: </p>
                </div>
                <div className='charts'>
                    <p className='chart-name'>High / Low</p>
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
                <div className='client-details'>
                    <p className='name'>Financials</p>
                    <p>Symbol: </p>
                    <p>Sector: </p>
                    <p>Sub Industry: </p>
                    <p>Location: </p>
                    <p>Exchange: </p>
                    <p>Website: </p>
                </div>
                <div className='vol-charts'>
                    <p className='chart-name'>Volume</p>
                    <ResponsiveContainer>
                        <LineChart data={historyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="volume" stroke="blue"  name="volume"/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};

export default Company;
