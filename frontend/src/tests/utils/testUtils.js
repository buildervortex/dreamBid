export default class Test {
    static assertEqual(value1, value2, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        if (value1 === value2) {
            printPass(`Test: ${testName}`, bodyColor)
            if (success) success(testName)
        }
        else {
            printFail(`Test: ${testName}. The asserEqual failed. The first value is ( ${value1} ) and the second value is ( ${value2} )`, bodyColor)
            if (throwError) throw Error(`Test: ${testName} Failed`);
            if (failed) failed(testName)
        }
    }

    static assertNotEqual(value1, value2, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        if (value1 !== value2) {
            printPass(`${testName}`, bodyColor)
            if (success) success(testName)
        }
        else {
            printFail(`Test: ${testName}. The assertNotEqual failed. The first value is ( ${value1} ) and the second value is ( ${value2} )`, bodyColor)
            if (throwError) throw Error(`Test: ${testName} Failed`);
            if (failed) failed(testName)
        }
    }

    static assertNull(value, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        if (value === null) {
            printPass(`Test: ${testName}`, bodyColor);
            if (success) success(testName)
        } else {
            printFail(`Test: ${testName}. The assertNull failed. Expected null but got ( ${value} )`, bodyColor);
            if (throwError) {
                throw Error(`Test: ${testName} failed. Expected null but got ( ${value} )`);
            }
            if (failed) failed(testName)
        }
    }

    static assertNotNull(value, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        if (value !== null) {
            printPass(`Test: ${testName}`, bodyColor);
            if (success) success(testName)
        } else {
            printFail(`Test: ${testName}. The assertNotNull failed. Expected not null but got null`, bodyColor);
            if (throwError) {
                throw Error(`Test: ${testName} failed. Expected a non-null value but got null`);
            }
            if (failed) failed(testName)
        }
    }

    static assertTrue(value, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        if (value === true) {
            printPass(`Test: ${testName}`, bodyColor);
            if (success) success(testName)
        } else {
            printFail(`Test: ${testName}. The assertTrue failed. Expected true but got ( ${value} )`, bodyColor);
            if (throwError) {
                throw Error(`Test: ${testName} failed. Expected true but got ( ${value} )`);
            }
            if (failed) failed(testName)
        }
    }

    static assertFalse(value, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        if (value === false) {
            printPass(`Test: ${testName}`, bodyColor);
            if (success) success(testName)
        } else {
            printFail(`Test: ${testName}. The assertFalse failed. Expected false but got ( ${value} )`, bodyColor);
            if (throwError) {
                throw Error(`Test: ${testName} failed. Expected false but got ( ${value} )`);
            }
            if (failed) failed(testName)
        }
    }

    static assertThrows(func, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        try {
            func();
            printFail(`Test: ${testName}. The assertThrows failed. Expected function to throw but it did not.`, bodyColor);
            if (throwError) {
                throw Error(`Test: ${testName} failed. Expected function to throw but it did not.`);
            }
            if (failed) failed(testName)
        } catch (e) {
            printPass(`Test: ${testName}`, bodyColor);
            if (success) success(testName)
        }
    }

    static assertHasProperty(obj, property, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        if (property in obj) {
            printPass(`Test: ${testName}`, bodyColor);
            if (success) success(testName)
        } else {
            printFail(`Test: ${testName}. The assertHasProperty failed. The property ( ${property} ) is not present in the object.`, bodyColor);
            if (throwError) {
                throw Error(`Test: ${testName} failed. Expected the object to have property ( ${property} ).`);
            }
            if (failed) failed(testName)
        }
    }

    static assertHasOwnProperty(obj, property, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        if (obj.hasOwnProperty(property)) {
            printPass(`Test: ${testName}`, bodyColor);
            if (success) success(testName)
        } else {
            printFail(`Test: ${testName}. The assertHasOwnProperty failed. The property ( ${property} ) is not an own property of the object.`, bodyColor);
            if (throwError) {
                throw Error(`Test: ${testName} failed. Expected the object to have its own property ( ${property} ).`);
            }
            if (failed) failed(testName)
        }
    }
    static assertArrayEqual(arr1, arr2, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        const arraysEqual = Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
        if (arraysEqual) {
            printPass(`Test: ${testName}`, bodyColor);
            if (success) success(testName)
        } else {
            printFail(`Test: ${testName}. The assertArrayEqual failed. The arrays are not the same.`, bodyColor);
            if (throwError) {
                throw Error(`Test: ${testName} failed. Arrays do not match.`);
            }
            if (failed) failed(testName)
        }
    }

    static assertArrayNotEqual(arr1, arr2, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        const arraysEqual = Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
        if (!arraysEqual) {
            printPass(`Test: ${testName}`, bodyColor);
            if (success) success(testName)
        } else {
            printFail(`Test: ${testName}. The assertArrayNotEqual failed. The arrays are the same.`, bodyColor);
            if (throwError) {
                throw Error(`Test: ${testName} failed. Arrays should not match.`);
            }
            if (failed) failed(testName)
        }
    }

    static assertDeepEqual(obj1, obj2, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        const deepEqual = JSON.stringify(obj1) === JSON.stringify(obj2);
        if (deepEqual) {
            printPass(`Test: ${testName}`, bodyColor);
            if (success) success(testName)
        } else {
            printFail(`Test: ${testName}. The assertDeepEqual failed. The objects are not deeply equal.`, bodyColor);
            if (throwError) {
                throw Error(`Test: ${testName} failed. Expected objects to be deeply equal.`);
            }
            if (failed) failed(testName)
        }
    }

    static assertDeepNotEqual(obj1, obj2, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        const deepEqual = JSON.stringify(obj1) === JSON.stringify(obj2);
        if (!deepEqual) {
            printPass(`Test: ${testName}`, bodyColor);
            if (success) success(testName)
        } else {
            printFail(`Test: ${testName}. The assertDeepNotEqual failed. The objects are deeply equal.`, bodyColor);
            if (throwError) {
                throw Error(`Test: ${testName} failed. Expected objects to be different.`);
            }
            if (failed) failed(testName)
        }
    }

    static assertInstanceOf(instance, constructor, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        if (instance instanceof constructor) {
            printPass(`Test: ${testName}`, bodyColor);
            if (success) success(testName)
        } else {
            printFail(`Test: ${testName}. The assertInstanceOf failed. Expected instance to be of type ( ${constructor.name} ).`, bodyColor);
            if (throwError) {
                throw Error(`Test: ${testName} failed. Expected instance of ( ${constructor.name} ).`);
            }
            if (failed) failed(testName)
        }
    }

    static assertType(value, expectedType, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        const actualType = typeof value;
        if (actualType === expectedType) {
            printPass(`Test: ${testName}`, bodyColor);
            if (success) success(testName)
        } else {
            printFail(`Test: ${testName}. The assertType failed. Expected type ( ${expectedType} ) but got ( ${actualType} ).`, bodyColor);
            if (throwError) {
                throw Error(`Test: ${testName} failed. Expected type ( ${expectedType} ) but got ( ${actualType} ).`);
            }
            if (failed) failed(testName)
        }
    }

    static assertLength(arrayOrString, expectedLength, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        const actualLength = arrayOrString.length;
        if (actualLength === expectedLength) {
            printPass(`Test: ${testName}`, bodyColor);
            if (success) success(testName)
        } else {
            printFail(`Test: ${testName}. The assertLength failed. Expected length ( ${expectedLength} ) but got ( ${actualLength} ).`, bodyColor);
            if (throwError) {
                throw Error(`Test: ${testName} failed. Expected length ( ${expectedLength} ) but got ( ${actualLength} ).`);
            }
            if (failed) failed(testName)
        }
    }

    static assertMatches(string, regex, testName = "", success = null, failed = null, bodyColor = "white", throwError = false) {
        if (regex.test(string)) {
            printPass(`Test: ${testName}`, bodyColor);
            if (success) success(testName)
        } else {
            printFail(`Test: ${testName}. The assertMatches failed. The string did not match the regex.`, bodyColor);
            if (throwError) {
                throw Error(`Test: ${testName} failed. String did not match the regex.`);
            }
            if (failed) failed(testName)
        }
    }

    static getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function printPass(message, textColor = "white") {
    console.log(`%c PASS %c %c ${message}`, 'color: white; background-color: green; font-weight: bold;', `color: inherit;`, `color: ${textColor};`);
}

function printFail(message, textColor = "white") {
    console.log(`%c FAIL %c %c ${message}`, 'color: white; background-color: red; font-weight: bold;', `color: inherit;`, `color: ${textColor};`);
}