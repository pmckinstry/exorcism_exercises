import random
import string

class Robot(object):
    def __init__(self):
        self.reset()

    # return robot name.
    @property
    def name(self):
        return self._name

    # reset robot to factory settings
    def reset(self):
        random.seed()
        letters = random.sample(string.ascii_uppercase, 2)
        letters_flattened = ''.join([e for e in letters])
        num = random.randint(0,999)
        # format of name is AA000 where first 2 digits are uppercase alpha and the last 3 are digits.
        self._name = '{}{:03}'.format(letters_flattened, num)
