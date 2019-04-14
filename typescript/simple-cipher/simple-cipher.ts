const LOWER_A_CHARACTER_CODE = 'a'.charCodeAt(0)
const ALPHABET_LENGTH = 26
const DEFAULT_KEY_SIZE = 100

class SimpleCipher {

    readonly key: string

    private static generate_random_key() {
        let key = ''
        while (key.length < DEFAULT_KEY_SIZE) {
            const next = Math.floor(Math.random() * ALPHABET_LENGTH) + LOWER_A_CHARACTER_CODE
            key += String.fromCharCode(next)
        }
        return key
    }

    constructor(key: string = SimpleCipher.generate_random_key()) {
        if (!(/^[a-z]+$/.test(key))) {
            throw new Error('Bad key: ' + key)
        }
        this.key = key
    }

    encode = (input: string): string => this.transform(input, 1)
    decode = (input: string): string => this.transform(input, -1)

    private transform(message: string, direction: number) {
        let result = ''
        for (let i = 0; i < message.length; ++i) {
            const code = message.charCodeAt(i)
            const shift = this.key.charCodeAt(i % this.key.length) - LOWER_A_CHARACTER_CODE // 'a' shifts 0 digits
            const shifted_value = ((code - LOWER_A_CHARACTER_CODE + (direction * shift) + ALPHABET_LENGTH) % ALPHABET_LENGTH) + LOWER_A_CHARACTER_CODE // overflow z=>a
            result += String.fromCharCode(shifted_value)
        }
        return result
    }

}

export default SimpleCipher
