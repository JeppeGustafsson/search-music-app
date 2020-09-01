import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleOpen = () => {
        if (this.state.isOpen === false) {
            this.setState({ isOpen: true });
        } else {
            this.setState({ isOpen: false });
        }
    }

    render() {

        return (
            <header className={this.state.isOpen === true ? "header active" : "header"}>
                <nav className="nav-bar">
                    <img onClick={() => window.location.reload(true)} src="logo.svg" alt="spotify-logo"/>
                    <button onClick={this.handleOpen} className="burger-btn">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </button>
                </nav>
                <section className="menu-content">
                    <ul>
                        <li>Profile</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </section>
            </header>
        )
    }
}

export default Header;