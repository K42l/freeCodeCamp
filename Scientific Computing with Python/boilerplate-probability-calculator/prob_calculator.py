import copy
import random
# Consider using the modules imported above.

class Hat:
  def __init__(self, **dic):
    self.contents=[]
    for k, v in dic.items():
      for i in range(v):
        self.contents.append(k)
          
  def draw(self, NOB):
    if(NOB > len(self.contents)):
      return self.contents
    removedballs = []
    for i in range(NOB):
      removed = random.choice(self.contents)
      removedballs.append(removed)
      self.contents.pop(self.contents.index(removed))
    return removedballs


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
  count = 0
  for i in range(num_experiments):
    expectedcopy = copy.deepcopy(expected_balls)
    hatcopy = copy.deepcopy(hat)
    colors = hatcopy.draw(num_balls_drawn)
  
    for color in colors:
      if(color in expectedcopy):
        expectedcopy[color] -= 1
    
    if(all(x <= 0 for x in expectedcopy.values())):
      count += 1
  
  return count/num_experiments



