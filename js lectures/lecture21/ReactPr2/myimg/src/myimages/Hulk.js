import './hero.css';
import img1 from './img1.jpg';

function Hulk(){
    return(
       <div className='hero'>
        <img src={img1} alt='hulk' className='himg'></img>
       </div>  
    );
}

export default Hulk;