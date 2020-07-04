import React from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import SettingsForCounter from "./Components/SettingsForCounter/SettingsForCounter";

function App() {

    return (
        <div className="App">
            <SettingsForCounter/>
            <Counter/>
        </div>
    );
}

export default App;
