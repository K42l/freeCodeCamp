def arithmetic_arranger(problems, Argument = False):
  
  op1 = list()
  op2 = list ()
  resl = list()
  operator = list()
  prob1 = str()
  prob2 = str()
  line = str()
  result = str()

  if len(problems) > 5:
    return ("Error: Too many problems.")

  for i in problems:

    splitproblems = i.split(" ")
    if len(splitproblems[0]) > 4 or len(splitproblems[2]) > 4:
      return ("Error: Numbers cannot be more than four digits.")
    if splitproblems[1] != "+" and splitproblems[1] != "-":
      return ("Error: Operator must be '+' or '-'.")
    if (splitproblems[0].isdigit() == False) or (splitproblems[2].isdigit() == False):
      return "Error: Numbers must only contain digits."
    
    op1.append(splitproblems[0])
    op2.append(splitproblems[2])
    operator.append(splitproblems[1])

  count = 0
  while count < len(problems):
    longest = max(len(op1[count]), len(op2[count]))

    x = int(op1[count])
    y = int(op2[count])   

    if operator[count] == "+":
      resl.append(str(x + y))
    elif operator[count] == "-":
      resl.append(str(x - y))

    for i in range((longest + 2) - len(op1[count])):
      op1[count] = " " + op1[count]
    prob1 = prob1 + op1[count] + "    "    

    for i in range((longest + 1) - len(op2[count])):
      op2[count] = " " + op2[count]
    prob2 = prob2 + operator[count] + op2[count] + "    "

    for i in range(longest + 2):
      line =line + "-"
    line = line + "    "
    
    for i in range((longest + 2) - len(resl[count])):
      resl[count] = " " + resl[count]
    result = result + resl[count] + "    "
  
    count = count + 1

  prob1 = prob1.rstrip()
  prob2 = prob2.rstrip()
  line = line.rstrip()
  result = result.rstrip()

  if Argument == False:
    arranged_problems = prob1 + "\n" + prob2 + "\n" + line
  elif Argument == True:
    arranged_problems = prob1 + "\n" + prob2 + "\n" + line + "\n" + result

  return arranged_problems

