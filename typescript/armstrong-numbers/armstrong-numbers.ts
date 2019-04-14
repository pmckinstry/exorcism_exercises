class ArmstrongNumbers {

  static isArmstrongNumber(value: number) {
    const digits = ArmstrongNumbers.toDigits(value)
    let armstrong_value = 0
    for (const digit of digits) {
      armstrong_value += Math.pow(digit, digits.length)
    }
    return armstrong_value === value
  }
  static toDigits(value: number): number[] {
    let digits: number[] = []
    let idx = 0
    while (value > 0) {
      digits[idx++] = value % 10 // grab next digit
      value = ((value / 10) | 0) // trim a digit
    }
    return digits = digits.reverse()
  }
}
export default ArmstrongNumbers