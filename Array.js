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
if(!Array.range){
    Array.range = function(start = 0,stop,step = 1){
        let arr = []
       if(start == 0 && (!stop || stop === 0 )|| start == stop){
           return arr;
       }else if(!stop){
         for (let i = 0; i < start; i++) {
           arr.push(i);
         }
       }else if(start > stop && step < 0){
          for(let i = start;i > stop;i+= step ){
              arr.push(i);
          }
       }else if(start < stop && step > 0){
        for(let i = start;i < stop;i+= step ){
            arr.push(i);
        }
       }
       return arr;
    }
};

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
if (!Array.prototype.clone) {
    Array.prototype.clone = function () {
        return JSON.parse(JSON.stringify(this));
    }
}

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

if (!Array.prototype.print) {
    Array.prototype.print = function () {
        console.log(this);
        return this;
    }
}

if (!String.prototype.print) {
    String.prototype.print = function () {
        console.log(this.valueOf());
        return this.valueOf();
    }
}
if (!Boolean.prototype.print) {
    Boolean.prototype.print = function () {
        console.log(this.valueOf());
        return this.valueOf();
    }
}
if (!Number.prototype.print) {
    Number.prototype.print = function () {
        console.log(this.valueOf());
        return this.valueOf();
    }
}

if (!Object.prototype.print) {
    Object.prototype.print = function () {
        console.log(this.valueOf());
        return this.valueOf();
    }
}

//adds multiple elements to array togther;
if (Array.prototype.add) {
    Array.prototype.add = function (arr) {
        arr.forEach(e => {
            this.push(e);
        });
        return this;
    }
}

if (!Array.prototype.addUp) {
    Array.prototype.add_up = function () {
        let arr = this.filter(x => typeof x === "number");
        if (arr.length === 0) {
            console.error("no numbers in array");
        }
        return arr.reduce((a, b) => a + b);
    }
}
if (!Array.prototype.max) {
    Array.prototype.max = function () {
        let arr = this.filter(x => typeof x === "number");
        if (arr.length === 0) {
            console.error("no numbers in array");
        }
        return Math.max(...arr);
    }
}
if (!Array.prototype.maxIndex) {
    Array.prototype.max_index = function () {
        let arr = this.filter(x => typeof x === "number");
        if (arr.length === 0) {
            console.error("no numbers in array");
        }
        return arr.indexOf(Math.max(...arr));
    }
}
if (!Array.prototype.min) {
    Array.prototype.min = function () {
        let arr = this.filter(x => typeof x === "number");
        if (arr.length === 0) {
            console.error("no numbers in array");
        }
        return Math.min(...arr);
    }
}
if (!Array.prototype.minIndex) {
    Array.prototype.min_index = function () {
        let arr = this.filter(x => typeof x === "number");
        if (arr.length === 0) {
            console.error("no numbers in array");
        }
        return arr.indexOf(Math.min(...arr));
    }
}
if (!Array.prototype.sortBy) {
    Array.prototype.sort_by = function (type) {
        if (type === "length") {
            this.sort((a, b) => a.length > b.length);
        } else if (type === "value") {
            this.sort((a, b) => a > b);
        } else if ("a-b") {
            this.sort();
        }
        return this;
    }
}
if (!Array.prototype.remove) {
    Array.prototype.remove = function (n) {
        this.splice(n, 1);
        return this;
    }
}

if (!Array.prototype.removeVal) {
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
        return this;
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
        return this;
    }
}

if (!Array.prototype.avrage) {
    Array.prototype.avrage = function () {
        let arr = this.filter(x => typeof x === "number");
        if (arr.length === 0) return 0;
        return arr.add_up() / arr.length;
    }
}



if (!Array.prototype.multiplyMatrices) {
    Array.prototype.multiplyMatrices = function(B) {
            A = this;
        let result = new Array(A.length).fill(0).map(row => new Array(B[0].length).fill(0));
    
        return result.map((row, i) => {
            return row.map((val, j) => {
                return A[i].reduce((sum, elm, k) => sum + (elm * B[k][j]), 0);
            })
        })
    }
}

if (!Array.prototype.isMatrix) {
    Array.prototype.isMatrix = function () {
        let check = JSON.stringify(this);
        let slice = check.slice(1, check.length - 1);
        let count = 0;
        let is2d = true;
        [...slice].forEach((e, i) => {
            if (e === "[") {
                count++;
            }
            if (e === "]") {
                count = 0;
            }
            if (count === 2) {
                is2d = false;
            }
        })
        if (is2d) {
            let j = this[0].length
            for (let i = 0; i < this.length; i++) {
                if (this[i].length !== j) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}

if (!Array.prototype.getAllPos) {
    Array.prototype.getAllPos = function (val) {
        let positions = [];
        this.valueOf().forEach((e, i) => {
            if (e === val) {
                positions.push(i);
            }
        })
        return positions;
    }
}
if(!Array.prototype.shuffle){
Array.prototype.shuffle = function() {
    var i = this.length, j, temp;
    if ( i == 0 ) return this;
    while ( --i ) {
       j = Math.floor( Math.random() * ( i + 1 ) );
       temp = this[i];
       this[i] = this[j];
       this[j] = temp;
    }
    return this;
  };
};
if(!Array.prototype.without){
 Array.prototype.without = function(val){
     let args = [];
     let arr = [];
     for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
     }
     this.forEach(e => {
         if(args.indexOf(e) === -1){
             arr.push(e);
         }
     })
     return arr;
}
};


