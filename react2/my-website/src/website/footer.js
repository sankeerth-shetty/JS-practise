import './web.css';
// import twitter from './twitter.svg';

function Footer(){
    return(
        <div className='container row footer'>
            <p>©Copyright Year | Yourname</p>
            <div className='row social'>
                <p><a href='#'>Twitter</a></p>
                <p><a href='#'>Facebook</a></p>
                <p><a href='#'>Instagram</a></p>
            </div>
        </div>
    );
}

export default Footer;