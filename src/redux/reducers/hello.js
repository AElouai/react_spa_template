import * as helloType from '../constants/hello.constants';

export const hello = (state = [], action) => {
    switch (action.type) {
        case helloType.HELLO:
            return {
                grating: 'hello world',
            };

        default:
            return state;
    }
};