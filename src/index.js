class SmartCalculator {
  constructor(initialValue) {
    this.count = "" + initialValue;
  }

  add(number) {
    this.count=this.count+"+"+number;
    this.i=eval(this.count);
    return this;
  }

  subtract(number) {
   this.count=this.count+"-"+number;
   this.i=eval(this.count);
   return this;
  }

  multiply(number) {
    this.count=this.count+"*"+number;
      this.i=eval(this.count);
    return this;
  }

  devide(number) {
    this.count=this.count+"/"+number;
    this.i=eval(this.count);
    return this;
  }

  pow(number) {
    this.count=this.count+"**"+number;
    this.i=eval(this.count);
    return this;
  }

    valueOf() { return this.i; }
}

module.exports = SmartCalculator;
