import React from 'react';
import {FilterType} from "./Filter";


type MoneyType = {
    banknots: string,
    value: number,
    number: string
}

type NewComponentPropsType = {
    currentMoney: MoneyType[],
    callBack: (nameButton: FilterType) => void
}

export const NewComponent = ({currentMoney, callBack}: NewComponentPropsType) => {
    return (
        <div className="App">
            <ul>
                {currentMoney.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknots}</span>
                            <span>{item.value}</span>
                            <span>{item.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => callBack('all')}>All</button>
                <button onClick={() => callBack("ruble")}>Rubls</button>
                <button onClick={() => callBack("dollar")}>Dollars</button>
            </div>
        </div>
    );
};