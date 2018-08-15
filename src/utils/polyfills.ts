import { polyfill as es5Polyfill } from 'es6-promise';
import { shim as ObjectAssignPolyfill } from 'object.assign';

export function applyPolyfills() {
    ObjectAssignPolyfill();
    es5Polyfill();
    applyPolyfillForArrayFind();
}

// https://tc39.github.io/ecma262/#sec-array.prototype.find
function applyPolyfillForArrayFind() {
    if (!Array.prototype.find) {
        Object.defineProperty(Array.prototype, 'find', {
            // tslint:disable-next-line:typedef
            value: function(predicate) {
                // 1. Let O be ? ToObject(this value).
                // tslint:disable-next-line:no-invalid-this
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }

                // tslint:disable-next-line:no-invalid-this
                const o = Object(this);

                // 2. Let len be ? ToLength(? Get(O, "length")).
                // tslint:disable-next-line:no-bitwise
                const len = o.length >>> 0;

                // 3. If IsCallable(predicate) is false, throw a TypeError exception.
                if (typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                }

                // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
                const thisArg = arguments[1];

                // 5. Let k be 0.
                let k = 0;

                // 6. Repeat, while k &lt; len
                while (k < len) {
                    // a. Let Pk be ! ToString(k).
                    // b. Let kValue be ? Get(O, Pk).
                    // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                    // d. If testResult is true, return kValue.
                    const kValue = o[k];
                    if (predicate.call(thisArg, kValue, k, o)) {
                        return kValue;
                    }
                    // e. Increase k by 1.
                    k++;
                }

                // 7. Return undefined.
                return undefined;
            },
        });
    }
}
