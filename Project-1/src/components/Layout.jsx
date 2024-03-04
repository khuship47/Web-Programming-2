import { Outlet, Link } from "react-router-dom";

const Layout = props => {
    return (
        <>
            <div className="side-bar">
                <div className="link-box">
                    <Link className="links" to='/'>Home</Link>
                </div>
                <div className="link-box">
                    <Link className="links" to='/Client'>Client</Link>
                </div>
                <div className="link-box">
                    <Link className="links" to='/Company'>Company</Link>
                </div>

            </div>
            <Outlet/>
        </>
    )
}

export default Layout;