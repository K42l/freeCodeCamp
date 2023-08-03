def add_time(start, duration, day=None):

 weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",]

 start = start.split(" ")
 time = start[0]
 sign = start[1]
  
 inicialsign = sign
 signcount = 0
 dayslater = 0

 time = time.split(":")
 hour = time[0]
 minutes = time[1]
 
 duration = duration.split(":")
 sumhour = duration[0]
 summinute = duration[1]


 hournew = int(hour) + int(sumhour)
 minutesnew = int(minutes) + int(summinute)

 if minutesnew >= 60:
   hournew = hournew + 1
   minutesnew = minutesnew - 60
 defaulthour = hournew

 
 while defaulthour > 12:
   defaulthour = defaulthour - 12
  
 while hournew > 11:
   hournew = hournew - 12
   if sign == "AM":
     sign = "PM"
   else:
     sign = "AM"
   
   signcount = signcount + 1

 if signcount % 2 != 0:
   if inicialsign == "PM":
     signcount = signcount + 1
   else:
     signcount = signcount - 1

 dayslater = signcount/2

 new_time = f"{defaulthour}:{str(minutesnew).zfill(2)} {sign}"

 if day:
   dayindex = weekdays.index(day.capitalize())
   newdayindex = int((dayindex + dayslater) % 7)
   new_time = new_time + f", {weekdays[newdayindex]}" 

 if dayslater == 1:
    new_time = new_time + " (next day)"
 elif  dayslater > 1:
    new_time = new_time + f" ({int(dayslater)} days later)"

  
 return new_time