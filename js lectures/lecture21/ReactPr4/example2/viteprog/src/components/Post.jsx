function Post(){
    const names = ['Shaktimaan','Gangadhar'];
    const chooseNames = Math.random() > 0.5 ? names[0] : names[1];
        return(
            <div className="text">
                <p>{chooseNames}</p>
                <p>Welcome to React</p>
            </div>
        ); 
}
export default Post;