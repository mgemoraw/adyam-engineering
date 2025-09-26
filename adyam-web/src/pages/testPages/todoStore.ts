let nextId = 0;
let todos = [{id:nextId, text: "Todo #1"}];
let listeners: (()=>void)[] = [];

export const todoStore = {
    getSnapshot() {
        return todos;
    },

    subscribe(listener: ()=> void) {
        listeners = [...listeners, listener];
        return () => {
            listeners = listeners.filter((l) => l !== listener);
        };
    },

    addTodo() {
        todos = [...todos, {id: nextId++, text: "Todo #" + nextId}];
        emitChange();
    },
};


function emitChange() {
    for (const listener of listeners) {
        listener();
    }
}