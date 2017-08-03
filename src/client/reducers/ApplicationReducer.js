import _ from 'lodash';

// Actions.
import { ApplicationActions } from '../actions/index';

// States.
import { ApplicationState as initialState } from '../states/index';

function ApplicationReducer(state = initialState, action) {
    let header, terminal;

    switch (action.type) {
        case ApplicationActions.CLOSE_MENU:
            header = _.clone(state.header);

            header.isMenuOpen = false;

            return _.assign({}, state, { header: header });

        case ApplicationActions.CLOSE_TERMINAL:
            terminal = _.clone(state.terminal);

            terminal.isOpen = false;

            return _.assign({}, state, { terminal: terminal });

        case ApplicationActions.OPEN_MENU:
            header = _.clone(state.header);

            header.isMenuOpen = true;

            return _.assign({}, state, { header: header });

        case ApplicationActions.OPEN_TERMINAL:
            terminal = _.clone(state.terminal);

            terminal.isOpen = true;

            return _.assign({}, state, { terminal: terminal });

        default:
            return state;
    }
}

export default ApplicationReducer;
