const TEMPLATE =
    `<div>Username :  {{vm.username}}</div>
  <div>Num Of Todo : {{vm.numOfTodos}}</div>`;

class StatusCtrl {
    constructor($ngRedux) {
        Object.assign(this, { $ngRedux });

        let self = this;
        let unsubscribe = $ngRedux.connect(
            state => ({
                todos: state.get('todos'),
                username: state.getIn(['uiState', 'username'])
            })
        )((selectedState, action) => {
            console.log(action);
            self.numOfTodos = selectedState.todos.size;
            self.username = selectedState.username;
        });


        this.$onDestroy = () => {
            unsubscribe();
        }

        this.addTodo(){}
    }
}

StatusCtrl.$inject = [
    '$ngRedux'
];

export default {
    template: TEMPLATE,
    controllerAs: 'vm',
    bindings: {},
    controller: StatusCtrl
};
