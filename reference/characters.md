# Seinfeld-Quiz-Characters
Jerry Seinfeld,[E,S,T,J],[1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1]
Elaine Benes,[E,S,T,P],[1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0]
George Costanza,[I,N,T,P],[0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0]
Cosmo Kramer,[E,N,T,P],[1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0]
Larry David,[I,N,F,J],[0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1]
Newman,ISFP,[0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0]
Morty Seinfeld,[I,S,T,P],[0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0]
Helen Seinfeld,[I,N,F,P],[0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0]
Frank Costanza,[E,N,F,J],[1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1]
Estelle Costanza,[E,S,F,J],[1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1]
Susan Ross,[I,S,F,J],[0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1]
Uncle Leo,[E,S,F,P],[1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0]
David Puddy,[I,S,T,J],[0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1]
Jackie Chiles,[E,N,F,P],[1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0]
George Steinbrenner,[E,N,T,J],[1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1]
Soup Nazi,[I,N,T,J],[0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1]

# LOGIC
const userType = [];
let marker1 = 0;
let marker2 = 0;
let marker3 = 0;
let marker4 = 0;

for (i=0;i<userInputArray.length;i++){
  let input = useInputArray[i];
  if (([0,4,8,12,16].indexOf(i)) > -1) {
    if (input===1){
      return marker1 += 1
    }
    else {
      return marker1 -= 1
    }
  }
  else if ([1,5,9,13,17].indexOf(i)) > -1) {
   if (input===1){
      return marker2 += 1
    }
    else {
      return marker2 -= 1
    }
  }
  else if ([2,6,10,14,18].indexOf(i)) > -1) {
   if (input===1){
      return marker3 += 1
    }
    else {
      return marker3 -= 1
    }
  }
  else {
       if (input===1){
      return marker4 += 1
    }
    else {
      return marker4 -= 1
    }
  }
}

# QUESTIONS
1. expend energy, enjoy groups; conserve energy, enjoy one-on-one
2. interpret literally; look for meaning and possibilities
3. logical, thinking, questioning; empathetic, feeling, accommodating
4. organized, orderly; flexible, adaptable
5. more outgoing, think out loud; more reserved, think to yourself
6. practical, realistic, experiential; imaginative, innovative, theoretical
7. candid, straight forward, frank; tactful, kind, encouraging
8. plan, schedule; unplanned, spontaneous
9. seek many tasks, public activities, interaction with others; seek private, solitary activities with quiet to concentrate
10. standard, usual, conventional; different, novel, unique
11. firm, tend to criticize, hold the line; gentle, tend to appreciate, conciliate
12. regulated, structured; easygoing, “live” and “let live”
13. external, communicative, express yourself; internal, reticent, keep to yourself
14. focus on here-and-now; look to the future, global perspective, “big picture”
15. tough-minded, just; tender-hearted, merciful
16. preparation, plan ahead; go with the flow, adapt as you go
17. active, initiate; reflective, deliberate
18. facts, things, “what is”; ideas, dreams, “what could be,” philosophical
19. matter of fact, issue-oriented; sensitive, people-oriented, compassionate
20. control, govern; latitude, freedom