import { Outlet, Link } from "react-router-dom";

const Layout = props => {
    return (
        <>
            <div className="head-bar">
                <div>
                    <Link className="first" to='/'>Home</Link>
                </div>
                <div>
                    <Link className="first" to='/Client'>Client</Link>
                </div>
                <div>
                    <Link className="first" to='/Company'>Company</Link>
                </div>

            </div>
        </>
    )
}

export default Layout;