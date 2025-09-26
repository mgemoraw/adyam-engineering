import React, { useSyncExternalStore } from 'react';
import { todoStore } from './todoStore';

// import {Button} from "@/features/shared/components/ui/button";


export default function TestPage() {
    const todos = useSyncExternalStore(todoStore.subscribe, todoStore.getSnapshot);


    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <button onClick={todoStore.addTodo}>Add</button>
        <ul>
            {todos.map((t, i) => (
                <li key={i}>{t.text}</li>
            ))}
        </ul>
        </div>
    );
}