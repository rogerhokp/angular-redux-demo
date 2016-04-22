import angular from 'angular';
import ngRedux from 'ng-redux';

import { combineReducers } from 'redux-immutable'; //redux-immutable for ImmutableJS
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';

//reducers
import todosReducer from './todos.reducer.js';
import uiStateReducer from './ui-state.reducer.js';

//component
import todoInput from './input.cmpt.js';
import todoList from './todo-list.cmpt.js';
import status from './status.cmpt.js';
import todoAction from './todos.action.js';
import uiStateAction from './ui-state.action.js';

angular.module('angular-redux-demo', [ngRedux])
    .config(($ngReduxProvider) => {
        //Combine reducer
        const rootReducer = combineReducers({
            todos: todosReducer,
            uiState: uiStateReducer
        });

        //Logging middlewares
        const loggerMiddleware = createLogger({
            duration: true,
            collapsed: true,
            stateTransformer: state => {
                return state.toJSON();
            }
        });

        //Other middlewares
        const middlewares = [
            promiseMiddleware,
            loggerMiddleware
        ];

        //Create Store
        $ngReduxProvider.createStoreWith(
            rootReducer, middlewares, []
        );

    })
    .service('todoAction', todoAction)
    .service('uiStateAction', uiStateAction)
    .component('status', status)
    .component('todoList', todoList)
    .component('todoInput', todoInput);

angular.bootstrap(document, ['angular-redux-demo']);
