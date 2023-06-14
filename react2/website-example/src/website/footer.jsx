import './web.css';
// import twitter from './twitter.svg';

function Footer(){
    return(
        <div className='container row footer'>
            <p>©Copyright Year | Yourname</p>
            <div className='row social'>
                <p><a href='#' className='row'><i className="fa-brands fa-twitter fa-md"></i>&nbsp; Twitter</a></p>
                <p><a href='#' className='row'><i className="fa-brands fa-facebook-f fa-md"></i>&nbsp; Facebook</a></p>
                <p><a href='#' className='row'><i className="fa-brands fa-instagram fa-md"></i>&nbsp; Instagram</a></p>
            </div>
        </div>
    );
}

export default Footer;