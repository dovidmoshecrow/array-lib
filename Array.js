
Array.matrix = function(x,y,fill){
    return new Array(x).fill(0).map(() => new Array(y).fill(0).map(() => fill));
}

Array.vector = function(l,fill){
    return new Array(l).fill(0).map(()=> fill);
}
//return deep copy of array.
Array.prototype.clone = function () {
    let arr = this;
    return JSON.parse(JSON.stringify(arr));
}

//return position of element ,if not found returns false.
Array.prototype.pos = function (e) {
    let arr = this;
    let pos = arr.indexOf(e);
    if (pos === -1) {
        return false;
    } else {
        return pos;
    }
}
//prints array to console
Array.prototype.print = function () {
    console.log(this);
}

//adds multiple elements to array togther;
Array.prototype.add = function (arr) {
    arr.forEach(e => {
        this.push(e);
    });
}

Array.prototype.add_up = function () {
    let arr = this.filter(x => typeof x === "number" );
    return arr.reduce((a, b) => a + b);
}

Array.prototype.max = function () {
    let arr = this.filter(x => typeof x === "number" );
    return Math.max(...arr);
}

Array.prototype.max_index = function () {
    let arr = this.filter(x => typeof x === "number" );
    return arr.indexOf(Math.max(...arr));
}

Array.prototype.min = function () {
    let arr = this.filter(x => typeof x === "number" );
    return Math.min(...arr);
}

Array.prototype.min_index = function () {
    let arr = this.filter(x => typeof x === "number" );
    return arr.indexOf(Math.min(...arr));
}

Array.prototype.sort_by = function (type) {
    if (type === "length") {
        this.sort((a, b) => a.length + b.length);
    } else if (type === "value") {
        this.sort((a, b) => a + b);
    } else if ("a-b") {
        this.sort();
    }
}

Array.prototype.remove = function (n) {
    this.splice(n, 1);
}

Array.prototype.remove_val = function(val,all = false){
    if(all){
      for (let i = this.length -1; i >= 0; i--) {
        if(this[i] === val){
            this.remove(i);
        }
      }
    }else{
     if (this.pos(val)){
        this.remove(this.pos(val));
     }
    }
}


Array.prototype.count = function(val){
  let count = 0;
  this.forEach(e => {
      if (e === val){
        count++;
      }
  })
  return count;
}

Array.prototype.replace = function(val ,to) {
  this.forEach((e,i) => {
      if( e === val) {
          this[i] = to;
      }
  })
}



