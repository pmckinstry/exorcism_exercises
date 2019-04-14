class SimpleCipher {
    key: string

    static generate_random_key() {
        let key = ''
        while (key.length < 100) {
            const next = Math.floor(Math.random() * 26) + 97
            key += String.fromCharCode(next)
        }
        return key
    }

    constructor(key: string = SimpleCipher.generate_random_key()) {
        if (!key || key.toLowerCase() !== key || (/\d/.test(key))) {
            throw new Error('Bad key')
        }
        this.key = key
    }

    encode(message: string) {
        let result = ''
        for (let i = 0; i < message.length; ++i) {
            const code = message.charCodeAt(i)
            const shift = this.key.charCodeAt(i % this.key.length) - 97 // 'a' shifts 0 digits
            const shifted_value = ((code - 97 + shift) % 26) + 97 // overflow z=>a
            result += String.fromCharCode(shifted_value)
        }
        return result
    }

    decode(message: string) {
        let result = ''
        for (let i = 0; i < message.length; ++i) {
            const code = message.charCodeAt(i)
            const shift = this.key.charCodeAt(i % this.key.length) - 97 // 'a' shifts 0 digits
            let shifted_value = ((code - 97 - shift) % 26) + 97 // overflow z=>a
            if (shifted_value < 97) { shifted_value += 26 }
            result += String.fromCharCode(shifted_value)
        }
        return result
    }
}

export default SimpleCipher
