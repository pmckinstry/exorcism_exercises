class HighScores(object):
    def __init__(self, scores):
        self._scores = scores

    @property
    def scores(self):
        return self._scores

    @scores.setter
    def scores(self, scores):
        self._scores = scores

    # return latest score by getting most recent score (last element)
    def latest(self):
        if len(self.scores) == 0:
            return None
        return self.scores[-1]

    # return personal best by sorting list & then returning the last element - the highest
    def personal_best(self):
        if len(self.scores)==0:
            return None
        return sorted(self.scores)[-1]

    # return personal top 3 by sorting list in reverse & then returning the first three elements.
    # note that python slices gracefully handle out of range conditions.
    def personal_top_three(self):
        return sorted(self.scores, reverse=True)[0:3]
