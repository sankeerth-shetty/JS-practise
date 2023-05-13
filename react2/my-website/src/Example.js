import './Example.css';

function Website() {
    let nm = 'Sankeerth';
    return(
        <div className='App'>
            <h2>This is My Website</h2>
            <div className='App-header'>
                <p>Hello World My Name Is {nm}</p>
            </div>
            <Movies />
        </div>
        
    );
}

function Movies(){
    return(
        <div className='App Footer-color'>
            <h3>This is footer</h3>
        </div>
    )
}

export default Website;