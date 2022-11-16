const Tweet = ({username, name, date, message}) => {
    return (
        <div class="tweet">
            <h2>{username}</h2>
            <p>Writen by {name} on {date}</p>
            <p>{message}</p>
        </div>
    );
}

const App = () => {
    return (
        <div>
        <Tweet username="Yiyosu" name="Rodrigo" date="November 16th" message="Example of a tweet using React"/>
        <Tweet username="ErikaGuapa" name="Erika" date="November 16th" message="Hello World"/>
        <Tweet username="Yiyosu" name="Rodrigo" date="November 16th" message="I don't really use Twitter"/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);