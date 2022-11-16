const Person = ({name, age, hobbies}) => {
    let voteMessage;
    if (age >= 18) {
        voteMessage = "Please go vote!";
    } else {
        voteMessage = "You must be 18."
    } 

    let displayName;
    if (name.length > 8) {
        displayName = name.slice(0,7) + "...";
    } else {
        displayName = name;
    }

    return (
        <div class="person">
            <h2>{displayName}</h2>
            <p>Learn some information about this user</p>
            <h2>This user's age is {age}</h2>
            <h3>{voteMessage}</h3>
            <ul>{hobbies.map(hobby => <li>{hobby}</li>)}</ul>
        </div>
    );
}

const App = () => {
    return (
        <div>
        <Person name="Rodrigo" age={24} hobbies={["Videogames", "Hiking", "Cooking"]}/>
        <Person name="Amanda" age={12} hobbies={["Basketball", "Volleyball"]}/>
        <Person name="Cuauhtemoc" age={18} hobbies={["Ball game", "Winning wars"]}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);