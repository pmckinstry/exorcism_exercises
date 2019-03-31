def is_pangram(sentence):
    chars = {}
    for c in sentence:
      digit = c.lower()
      if digit.isalpha():
        chars[digit] = True
    return len(chars) == 26
