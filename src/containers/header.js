import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                Demo site
                            </a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}