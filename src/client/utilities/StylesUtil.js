import _ from 'lodash';

// Colours.
export const blackColour = '#000';
export const primary300Colour = '#9a6dea';
export const primary400Colour = '#8154d1';
export const primary500Colour = '#673ab7';
export const primary600Colour = '#4e219e';
export const primary700Colour = '#340784';
export const primary800Colour = '#1b006b';
export const secondary300Colour = '#61ffa4';
export const secondary400Colour = '#48e68b';
export const secondary500Colour = '#2ecc71';
export const secondary600Colour = '#15b358';
export const secondary700Colour = '#00993e';
export const secondary800Colour = '#008025';
export const whiteColour = '#fff';

/**
 * Creates an object with a reference to each module.
 *
 * NOTE: each module property is a shallow copy to the module; ergo, it is a reference.
 * @param args a list of arguments.
 * @return {Object} an object containing all the modules.
 */
export function combineStyles(...args) {
    if(args.length < 1) {
        return {};
    }

    // Filter only objects.
    return _.assign({}, ..._.filter(args, item => (_.isObject(item) && !_.isNull(item))));
}

/**
 * Default options for react-css-modules.
 * @type {{allowMultiple: boolean}}
 */
export const cssModulesOptions = { allowMultiple: true };
