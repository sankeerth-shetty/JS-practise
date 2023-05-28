import './Jokes.css';

function Jokes(){
    const myJokes = [
        "I asked my North Korean friend how it was there, he said he couldn't complain",
        "It's not fall that kills you, it's the sudden stop at the end",
        "Peter pan is a terrible boxer, whenever he throws a punch, it Neverlands",
        "Dogs can't operate mri machines. But catscan",
        "What has four wheels and flies?, A garbage truck",
        "How do celebrities keep cool?, They have many fans",
        "How do you get a squirrel to like you?, Act like a nut",
        "The best way to remember your wife's birthday is to forget it once."
    ];

    return(
        <div className="text">
            <h3>My Jokes</h3>
            <h3>{myJokes}</h3>
        </div>
    );
}

export default Jokes;