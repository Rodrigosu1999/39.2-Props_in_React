const FirstComponent = () => {
    return (
        <h1>My very first component</h1>
    );
}

const NamedComponent = ({name}) => {
    return (
        <p>My name is {name}</p>
    )
}

const App = () => {
    return (
        <div>
        <FirstComponent/>
        <NamedComponent name="Rodrigo"/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);
