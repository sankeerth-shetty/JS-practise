import './web.css'
import img1 from './image.png'

function Body(){
    return(
        <div className='img-con'>
            <img src={img1} className='image'/>
        </div>
    );
}

export default Body;