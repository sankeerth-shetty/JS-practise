import { useState } from "react";
import Newpost from "./NewPost";
import Post from "./Post";

function PostList(){
    const [enteredBody, setEnteredBody] = useState(' ');
    const [enteredAuthor, setEnteredAuthor] = useState(' ');

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }

    return(
        <>
        <Newpost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
        <ul>
            <Post author={enteredAuthor} body={enteredBody}/>
            <Post author="Shetty" body="Welcome"></Post>
        </ul>
        </>
    )
}

export default PostList;