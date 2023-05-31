import Post from './Post';
import postCss from './PostList.module.css';

function PostList(){
    return(
        <ul className={postCss.posts}>
            <Post author="Shanky Shetty" body="Front End Developer" />
            <Post author="Uday Shetty" body="Best Comedian" />
        </ul>
    )
}

export default PostList;