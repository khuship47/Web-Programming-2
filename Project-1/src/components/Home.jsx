const Home = ({handleClientSelection, clients}) => {
    return (
        <>
        <div className="home-page">Home</div>
            <div className='dropdown-menu'>
                <select
                    defaultValue=""
                    onChange={(e) => {
                        const selectedClientId = e.target.value;
                        const selectedClient = clients.find(client => client.id === parseInt(selectedClientId));
                        handleClientSelection(selectedClient);
                    }}
                >
                    <option value="" disabled>
                        Choose a Client...
                    </option>
                    {clients.map((client) => (
                        <option key={client.id} value={client.id}>
                            {`${client.firstname} ${client.lastname}`}
                        </option>
                    ))}
                </select>
            </div>

        </>
    );
};

export default Home;
