
class RunLengthEncoding {
  static encode(input: string) {
    let output = '';
    let count = 0
    let previous = null
    for (let i=0; i < input.length; ++i) {
      let current = input[i]
      if (previous && current != previous) { // new character, append to output
        if (count > 1) {
          output += count
        }
        output += previous
        count = 1 // reset
      } else {
        ++count
      }
      previous = current
    }
    if (previous) {
      if (count > 1) {
        output += count
      }
      output += previous
    }
    return output
  }

  static decode(input: string) {
    let output = '';
    let count = 0
    for (let i=0; i < input.length; ++i) {
      let current = input[i]
      if (!parseInt(current)) {
        if (count > 0) { // append this character 'count' times.
          output += current.repeat(count)
        } else {
          output += current
        }
        count = 0 // reset
      } else {
        if (count > 0) {
          count *= 10 // shift digits
        }
        count += parseInt(current)
      }

    }
    return output
  }
}

export default RunLengthEncoding