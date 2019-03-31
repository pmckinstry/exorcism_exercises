class Words {
  count(sentence: string) {
    let result = new Map<string,number>();
    let words:string[] = sentence.trim().toLowerCase().split(/[\s]+/)
    for (let word of words) {
      result.set(word, (result.get(word)||0)+1)
    }
    return result
  }
}
export default Words;
