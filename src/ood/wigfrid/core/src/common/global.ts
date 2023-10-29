



/**
 * Allows callers to verify whether an object implements an interface.
 */
export interface IQueryInterface {
    /**
     * Returns true if the object implements a given interface.
     *
     * @param interfaceName Name of the interface to look for.
     */
    implementsInterface(interfaceName: string): boolean;
}
/**
 * Casts a value to a type if possible.
 *
 * @param value Value to cast.
 * @param type Type or interface name to cast to.
 * @return The value passed in if the cast was successful, null otherwise.
 */
export function tryCast(value: any, type: any): any {

    // null doesn't implement anything
    if (value == null) {
        return null;
    }

    // test for interface implementation (IQueryInterface)
    //if (isString(type)) {
        //return isFunction(value.implementsInterface) && value.implementsInterface(type) ? value : null;
    //}

    // regular type test
    return value instanceof type ? value : null;
}


