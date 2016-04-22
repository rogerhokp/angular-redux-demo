export default class TodosActionSrvc {
    addTodo(text) {
        const payload = { text };
        return {
            type: 'ADD_TODO',
            payload
        };
    }

    removeAllTodo() {
        return {
            type: 'REMOVE_ALL_TODO'
        };
    }
}

TodosActionSrvc.$inject = [];



// return {
//     type: 'ADD_TODO',
//     payload: new Promise((resolve) => {
//         setTimeout(() => resolve(payload), 2000);
//     })
// };
