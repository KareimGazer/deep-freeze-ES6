
const deepFreeze = (Obj) => {
    Object.freeze(Obj);
    Object.getOwnPropertyNames(Obj).map((prop) => {
        if ((typeof Obj[prop] === "object" || typeof Obj[prop] === "function") && !Object.isFrozen(Obj[prop])) {
            deepFreeze(Obj[prop]);
        }
    })
    return Obj;
}

module.exports = deepFreeze