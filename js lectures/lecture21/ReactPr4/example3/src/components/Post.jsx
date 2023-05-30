// function Post(props){
//     return(
//         <div className="text">
//             <p className="fs">{props.author}</p>
//             <p className="fs">{props.body}</p>
//         </div>
//     )
// }

// export default Post;

// function Post(props){
//     return(
//         <div className="text" style={{backgroundColor: "cyan"}}>
//             <h3 className="fs">{props.author}</h3>
//             <h2 className="fs">{props.body}</h2>
//         </div>
//     )
// }

// export default Post;

import postCss from './Post.module.css';
function Post(props){
    return(
        <div className={postCss.post}>
            <p className={postCss.author}>{props.author}</p>
            <p className={postCss.text}>{props.body}</p>
        </div>
    )
} 

export default Post;