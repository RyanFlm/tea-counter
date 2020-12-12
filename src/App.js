import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {

    const initial = parseInt(localStorage.getItem('counter')) || 0;
    const [ count, setCount ] = useState(initial);

    useEffect(() => localStorage.setItem('counter', count.toString()));

    return (
        <div className={'container'}>
            <div className={'actionArea'}>
                <h1 className={'title'}>Tea cups drunk:</h1>
                <button className={'count'} type={'button'} onClick={() => setCount(0)}>
                    {count}
                </button>
                <button className={'countUp'} type={'button'} onClick={() => setCount(count + 1)}>
                    +
                </button>
            </div>
        </div>
    );
}

export default App;
