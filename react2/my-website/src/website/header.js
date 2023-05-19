import './web.css'

function Header(){
    return(
        <div>
            <header className='container header'>
                <nav className='row'>
                    <div className='logo'>
                        <a href='#' className='nba'>YOURLOGO</a>
                    </div>
                    <div className='row navb'>
                        <a href='#' className='nba'>Services</a>
                        <a href='#' className='nba'>Products</a>
                        <a href='#' className='nba'>About Us</a>
                        <a href='#' className='nba'>Contact</a>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;