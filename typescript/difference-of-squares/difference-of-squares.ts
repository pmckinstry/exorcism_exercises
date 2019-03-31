class Squares {
  squareOfSum: number;
  sumOfSquares: number;
  difference: number;

  constructor(private val: number) {
    let range = Array.from(Array(this.val+1).keys());
    this.sumOfSquares = range.map(v => v*v).reduce((sum:number, current:number) => sum + current);
    this.squareOfSum = Math.pow(range.reduce((sum:number, current:number) => sum + current), 2);
    this.difference = Math.abs(this.sumOfSquares - this.squareOfSum);
  }
}
export default Squares;