function Newpost(props){
    return(
        <form>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={5} onChange={props.onBodyChange}>
                </textarea>
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" required onChange={props.onAuthorChange}/>
            </p>
        </form>
    )
}

export default Newpost;