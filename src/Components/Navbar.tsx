import React from 'react'
import {NavLink} from 'react-router-dom'
interface IProps{

}
interface IState{

}

class Navbar extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {

        }
    }

    render() : React.ReactNode{
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                    <div className="container">
                        <a href="/" className="navbar-brand font-weight-bold"><i className="fa fa-route mx-2"></i>React Router DOM</a>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ml-auto" id="nav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to={'/'}  className="nav-link px-3">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'/contact-list'} activeClassName="active-page" className="nav-link px-3">Our Contacts</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }

}
export default Navbar;