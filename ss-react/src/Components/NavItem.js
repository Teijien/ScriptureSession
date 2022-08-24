import './NavItem.css';
import logo from '../logo.svg';

function NavBar() {
    return (
        <nav className='NavBar'>
            <ul className='MenuItems'>
                <img src={logo} className='MenuBtn' alt='Back' />
                <h4 className='NavItem'>Viewing: Me</h4>
                <div className='NavItem'>
                    <h5 className='CodeTxt'>Code:</h5>
                    <h5 className='CodeTxt'>XXXX</h5>
                </div>
                <img src={logo} className='MenuBtn' alt='Back' />
            </ul>
        </nav>
    )
}

export default NavBar;