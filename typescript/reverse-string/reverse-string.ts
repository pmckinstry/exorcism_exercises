class ReverseString {
    static reverse(str: string): string {
        // 1. using built in functions
        // return str.split("").reverse().join("");
        // 2. using recursion
        return (str === "") ? "" : ReverseString.reverse(str.substr(1)) + str.charAt(0)
    }
}

export default ReverseString
