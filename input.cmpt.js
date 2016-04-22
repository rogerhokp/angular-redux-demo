const TEMPLATE =
    `<div>
  <input type="text" ng-model="vm.text" />
  <button type="button" ng-click="vm.add()" class="pure-button pure-button-primary">Add</button>
  <button type="button" ng-click="vm.removeAllTodo()" class="pure-button pure-button-primary">Remove All</button>
</div>`;

class InputCtrl {
    constructor($ngRedux, todoAction) {
        Object.assign(this, { $ngRedux, todoAction });
    }

    add() {
        this.$ngRedux.dispatch(
            this.todoAction.addTodo(
                this.text
            )
        );
    }

    removeAllTodo() {
        this.$ngRedux.dispatch(
            this.todoAction.removeAllTodo()
        );
    }
}

InputCtrl.$inject = [
    '$ngRedux', 'todoAction'
];

export default {
    template: TEMPLATE,
    controllerAs: 'vm',
    bindings: {},
    controller: InputCtrl
};
