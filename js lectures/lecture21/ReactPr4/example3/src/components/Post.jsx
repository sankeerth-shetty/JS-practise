function Post(props){
    return(
        <div className="text">
            <p className="fs">{props.author}</p>
            <p className="fs">{props.body}</p>
        </div>
    )
}

export default Post;