export default class UiStateActionSrvc {
    setUsername(userName) {
        return {
            type: 'SET_USERNAME',
            payload: {
                userName
            }
        };
    }

}

UiStateActionSrvc.$inject = [];
