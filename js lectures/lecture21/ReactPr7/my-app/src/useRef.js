import { useRef } from "react";
function Post(){
    const countRef = useRef(0);

    const handleData = () => {
        countRef.current++;
        console.log(`You clicked ${countRef.current} times`);
    };

    console.log("You rendered me!!");
    return(
        <button onClick={handleData}>Click Me</button>
    );
}

export default Post;