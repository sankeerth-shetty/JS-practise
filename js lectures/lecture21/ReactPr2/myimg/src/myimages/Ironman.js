import './hero.css';
import img3 from './img3.jpg';

function Ironman(){
    return(
       <div className='hero'>
        <img src={img3} alt='ironman' className='himg'></img>
       </div>  
    );
}

export default Ironman;