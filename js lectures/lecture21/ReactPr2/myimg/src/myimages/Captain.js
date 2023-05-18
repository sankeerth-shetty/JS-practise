import './hero.css';
import img2 from './img2.jpg';

function Captain(){
    return(
       <div className='hero'>
        <img src={img2} alt='captain america' className='himg'></img>
       </div>  
    );
}

export default Captain;