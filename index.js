function dpClone(obj) {
    if(obj === null) return null;
    if(typeof obj !== "object") return obj;

    if(obj instanceof Date) {
        return new Date(obj);
    } 
    if(obj instanceof RegExp) {
        return new RegExp(obj);
    }
    if(obj instanceof Function) {
        return new Function(obj);
    }

    //克隆结果与之前保持相同的所属类
    let newObj = new obj.constructor
    for(let item in obj) {
        if(obj.hasOwnProperty(item)) {
            newObj[item] = dpClone(obj[item]);
        }
    }
    return newObj;
}

module.exports = dpClone;