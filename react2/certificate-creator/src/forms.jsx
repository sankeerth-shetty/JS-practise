function Forms(props){
    return(
        <form>
            <p>
                <label htmlFor="fname">First Name : </label>
                <input type="text" id="fname" required onChange={props.firstName}/>
            </p>
            <p>
                <label htmlFor="lname">Last Name : </label>
                <input type="text" id="lname" required onChange={props.lastName}/>
            </p>
            <p>
                <label htmlFor="cname">Course Name : </label>
                <input type="text" id="cname" required onChange={props.courseName}/>
            </p>
        </form>
    )
}

export default Forms;