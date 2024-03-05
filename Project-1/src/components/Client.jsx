
const Client = (props) => {
    let totalStocks = 0;
    for (let i = 0; i < props.portfolioData.length; i++) {
        totalStocks += props.portfolioData[i].amount;
    }

    let totalValue = 0;
    for (let i = 0; i < props.portfolioData.length; i++) {
        totalValue += props.portfolioData[i].value;
    }

    const totalItems = props.portfolioData.length;

    return (
        <>
            <div className="home-page"> Client Details </div>
            <div className='client-details'>
                <p className='name'>{props.currentClient.lastname}, {props.currentClient.firstname}</p>
                <p>Client ID: {props.currentClient.id}</p>
                <p>City: {props.currentClient.city}</p>
                <p>Country: {props.currentClient.country}</p>
                <p>Email: {props.currentClient.email}</p>
            </div>

            <div className='client-details'>
                <p className='name'>Portfolio Summary</p>
                <p>Total Number Item: {totalItems}</p>
                <p>Total Number Stocks: {totalStocks}</p>
                <p>Total Portfolio Value: {parseFloat(totalValue).toFixed(2)}</p>
            </div>


            <div className="portfolio-details">
                <table>
                <thead>
                    <tr>
                    <th>Symbol</th>
                    <th>Company</th>
                    <th>Amount</th>
                    <th>Close</th>
                    <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                {props.portfolioData.map(item => (
                            <tr key={item.id}>
                                <td>{item.symbol}</td>
                                <td>{item.name}</td>
                                <td>{item.amount}</td>
                                <td>{parseFloat(item.close).toFixed(2)}</td>
                                <td>{parseFloat(item.value).toFixed(2)}</td>
                            </tr>
                        ))}
                </tbody>
                </table>
            </div>
            
        </>
    );
};

export default Client;
