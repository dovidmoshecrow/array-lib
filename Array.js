if (!Array.matrix) {
    Array.matrix = function (x, y, fill) {
        return new Array(x).fill(0).map(() => new Array(y).fill(0).map(() => fill));
    }
}
if (!Array.vector) {
    Array.vector = function (l, fill) {
        return new Array(l).fill(0).map(() => fill);
    }
}

if (!String.prototype.toArray) {
    String.prototype.toArray = function () {
        let str = this.valueOf();
        if (Array.isArray(str)) {
            return str;
        } else if (typeof str !== "string") {
            console.log(typeof str);
            return [];
        } else {
            str = this.replace(/\s/g, "");
            return str.split(",");
        }
    }
}
//return deep copy of array.
if (!Array.prototype.clone) {
    Array.prototype.clone = function () {
        let arr = this;
        return JSON.parse(JSON.stringify(arr));
    }
}

//return position of element ,if not found returns false.
if (!Array.prototype.pos) {
    Array.prototype.pos = function (e) {
        let arr = this;
        let pos = arr.indexOf(e);
        if (pos === -1) {
            return false;
        } else {
            return pos;
        }
    }
}
//prints array to console
if (!Array.prototype.print) {
    Array.prototype.print = function () {
        console.log(this);
    }
}

//adds multiple elements to array togther;
if (Array.prototype.add) {
    Array.prototype.add = function (arr) {
        arr.forEach(e => {
            this.push(e);
        });
    }
}
if (!Array.prototype.add_up) {
    Array.prototype.add_up = function () {
        let arr = this.filter(x => typeof x === "number");
        return arr.reduce((a, b) => a + b);
    }
}
if (!Array.prototype.max) {
    Array.prototype.max = function () {
        let arr = this.filter(x => typeof x === "number");
        return Math.max(...arr);
    }
}
if (!Array.prototype.max_index) {
    Array.prototype.max_index = function () {
        let arr = this.filter(x => typeof x === "number");
        return arr.indexOf(Math.max(...arr));
    }
}
if (!Array.prototype.min) {
    Array.prototype.min = function () {
        let arr = this.filter(x => typeof x === "number");
        return Math.min(...arr);
    }
}
if (!Array.prototype.min_index) {
    Array.prototype.min_index = function () {
        let arr = this.filter(x => typeof x === "number");
        return arr.indexOf(Math.min(...arr));
    }
}
if (!Array.prototype.sort_by) {
    Array.prototype.sort_by = function (type) {
        if (type === "length") {
            this.sort((a, b) => a.length + b.length);
        } else if (type === "value") {
            this.sort((a, b) => a + b);
        } else if ("a-b") {
            this.sort();
        }
    }
}
if (!Array.prototype.remove) {
    Array.prototype.remove = function (n) {
        this.splice(n, 1);
    }
}

if (!Array.prototype.remove_val) {
    Array.prototype.remove_val = function (val, all = false) {
        if (all) {
            for (let i = this.length - 1; i >= 0; i--) {
                if (this[i] === val) {
                    this.remove(i);
                }
            }
        } else {
            if (this.pos(val)) {
                this.remove(this.pos(val));
            }
        }
    }
}

if (!Array.prototype.count) {
    Array.prototype.count = function (val) {
        let count = 0;
        this.forEach(e => {
            if (e === val) {
                count++;
            }
        })
        return count;
    }
}
if (!Array.prototype.replace) {
    Array.prototype.replace = function (val, to) {
        this.forEach((e, i) => {
            if (e === val) {
                this[i] = to;
            }
        })
    }
}

