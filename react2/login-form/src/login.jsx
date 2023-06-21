import Lcss from './login.module.css';

function Form(props) {
    return (
        <>
            <body className={Lcss}>
                <div className="d-flex justify-content-center mt-5" >
                    <div className="card bg-body-secondary w-25">
                        <div className="card-body">
                            <h3 className="text-center">LOGIN HERE</h3>
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
                                &nbsp;&nbsp;&nbsp;
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#SignUpForm">
                                    Create Account
                                </button>
                            </div>
                            <div className="modal fade" id="SignUpForm" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{ backdropFilter: "blur(4px)" }}>
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">REGISTER HERE</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <label htmlFor="name" className="form-label fs-5">Name : </label>
                                            <input type="text" name="name" className="form-control" id="name" required />
                                            <br />
                                            <label htmlFor="email1" className="form-label fs-5">Email : </label>
                                            <input type="email" name="email1" className="form-control" id="email1" required />
                                            <br />
                                            <label htmlFor="email" className="form-label fs-5">Password : </label>
                                            <input type="password" name="password1" className="form-control" id="password1" required />
                                            <br />
                                            <span id='semail' hidden></span>
                                            <span id='spass' hidden></span>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">I have an account</button>
                                            <button class="btn btn-primary" type="submit" data-bs-dismiss="modal" id="submit1" onClick={props.submit1}>Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Form;