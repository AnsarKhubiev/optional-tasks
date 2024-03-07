import React, {ChangeEvent, useState} from 'react';

type FullInputType = {
    addMessage: (inputValue: string) => void
}

export const FullInput = ({addMessage}: FullInputType) => {
    let [title, setTitle] = useState("");

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const onClickButtonHandler = () => {
        addMessage(title);
        setTitle("")
    }

    return (
        <div>
            <input value={title}  onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
            <span> Инпут и кнопка одна компонента</span>
        </div>
    );
};