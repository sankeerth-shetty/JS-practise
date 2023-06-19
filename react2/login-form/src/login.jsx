import Lcss from './login.module.css';

function Form(props) {
    return (
        <>
            <body className={Lcss}>
                <div className="d-flex justify-content-center mt-5" >
                    <div className="card bg-body-secondary w-25">
                        <div className="card-body">
                            <h3 className="text-center">LOGIN</h3>
                            <br />
                            <label htmlFor="email" className="form-label fs-5">Email : </label>
                            <input type="email" name="email" className="form-control" id="email" onChange={props.email} required />
                            <br />
                            <label htmlFor="email" className="form-label fs-5">Password : </label>
                            <input type="password" name="password" className="form-control" id="password" onChange={props.password} required />
                            <br />
                            <span id="error"></span>
                            <br />
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary" type="submit" id="submit" onClick={props.submit}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Form;