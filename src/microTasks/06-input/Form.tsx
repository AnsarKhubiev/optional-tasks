import React, {useState} from 'react';
import {FullInput} from "./FullInput";
import {Input} from "./Input";
import {Button} from "./Button";


export const Form = () => {

    // 1-ый вариант, когда инпут и кнопка - одна компонента
    const [messages, setMessages] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    const addMessage = (title: string) => {
        const newMessage = {message: title}
        setMessages([newMessage, ...messages])
    }

    // 2-ой вариант, когда инпут и кнопка - отдельные компоненты
    const [title, setTitle] = useState('')

    const onClickButtonHandler = ()=> {
        addMessage(title);
        setTitle('')
    }

    return (
        <div>
            <FullInput addMessage={addMessage}/>
            <Input setTitle={setTitle} title={title}/>
            <Button name="+" callBack={onClickButtonHandler} title={title} />

            {messages.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};