const TEMPLATE =
    `
<table class="pure-table">
    <thead>
        <tr>
            <th>Item</th>
        </tr>
    </thead>

    <tbody>
        <tr ng-repeat="todo in vm.todos track by $index">
            <td>{{todo}}</td>
        </tr>
    </tbody>
</table>`

class Ctrl {
    constructor($ngRedux) {
        Object.assign(this, { $ngRedux });

        let unsubscribe = $ngRedux.connect(
            state => ({ todos: state.get('todos') })
        )(value => this.whenTodosUpdated(value));


        this.$onDestroy = () => {
            unsubscribe();
        }
    }

    whenTodosUpdated(value) {
        this.todos = value.todos.toJS();
    }
}

Ctrl.$inject = [
    '$ngRedux'
];

export default {
    template: TEMPLATE,
    controllerAs: 'vm',
    bindings: {},
    controller: Ctrl
};
