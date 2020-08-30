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
            <div className={this.state.isOpen === true ? "header active" : "header"}>
                <div className="nav-bar">
                    <img src="logo.svg" alt="spotify-logo"/>
                    <div onClick={this.handleOpen} className="burger-btn">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="menu-content">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;