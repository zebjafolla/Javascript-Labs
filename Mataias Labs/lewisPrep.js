
/*         1. Lewis prep has 5 students: James, Jason, Samson, Cail, Roman
 2. Using if statements create a conditional that determines what grade each student has and log it to the console
 3.When logging results to console, log it by accessing an Array
 4. use 1 if statement for each student
     4a. james grade percentage is 73
     4b. cail grade percentage is 62
     4c. roman grade percentage is 49
     4d. jason grade percentage is 43
     4e. samson grade percentage is 97
  5. Grade Chart
     5a. Grade a >= 85% "great job" then student name, then grade
     5b. Grade b >= 79% "good job"
     5c. Grade c >= 70% "keep trying"
     5d. d >= 60% "bring this grade up"
     5e. f >= 55% "lets see what I can do to help you raise your grades" */


let names = ["James", "Cail", "Roman", "Jason", "Samson"];
let grade = [73, 62, 49, 43, 97]
let gradeChart = ["Great Job, Grade A", "Good Job Grade B", "Keep Trying Grade C", "Bring This Grade Up, Grade D", "Rethink Life? Grade F"];
let jamesGrade = grade[0];
if (jamesGrade >= 85){
    console.log(`${names[0]} ${gradeChart[0]}`);
}
else if (jamesGrade < 85 && jamesGrade >= 79){
    console.log(names[0] + " " + gradeChart[1]);
}
else if (jamesGrade < 79 && jamesGrade >= 70){
    console.log(names[0] + " " + gradeChart[2]);
}
else if (jamesGrade < 70 && jamesGrade >= 60){
    console.log(names[0] + " " + gradeChart[3]);
}
else
{
    console.log(names[0] + " " + gradeChart[4]);
}

let cailGrade = grade[1]
if (cailGrade >= 85){
    console.log(names[1] + " " + gradeChart[0]);
}
else if (cailGrade < 85 && cailGrade >= 79){
    console.log(names[1] + " " + gradeChart[1]);
}
else if (cailGrade < 79 && cailGrade >= 70){
    console.log(names[1] + " " + gradeChart[2]);
}
else if (cailGrade < 70 && cailGrade >= 60){
    console.log(names[1] + " " + gradeChart[3]);
}
else
{
    console.log(names[1] + " " + gradeChart[4]);
}
let romanGrade = grade[2]
if (cailGrade >= 85){
    console.lonames[2] + " " + g(names[2] + " " + gradeChart[0]);
}
else if (romanGrade < 85 && romanGrade >= 79){
    console.log(names[2] + " " + gradeChart[1]);
}
else if (romanGrade < 79 && romanGrade >= 70){
    console.log(names[2] + " " + gradeChart[2]);
}
else if (romanGrade < 70 && romanGrade >= 60){
    console.log(names[2] + " " + gradeChart[3]);
}
else
{
    console.log(names[2] + " " + gradeChart[4]);
    
}
let samsonGrade = grade[3]
if (samsonGrade >= 85){
    console.log(names[3] + " " + gradeChart[0]);
}
else if (samsonGrade < 85 && samsonGrade >= 79){
    console.log(names[3] + " " + gradeChart[1]);
}
else if (samsonGrade < 79 && samsonGrade >= 70){
    console.log(names[3] + " " + gradeChart[2]);
}
else if (samsonGrade < 70 && samsonGrade >= 60){
    console.log(names[3] + " " + gradeChart[3]);
}
else
{
    console.log(names[3] + " " + gradeChart[4]);
    
}
let jasonGrade = grade[4]
if (jasonGrade >= 85){
    console.log(names[4] + " " + gradeChart[0]);
}
else if (jasonGrade < 85 && jasonGrade >= 79){
    console.log(names[4] + " " + gradeChart[1]);
}
else if (jasonGrade < 79 && jasonGrade >= 70){
    console.log(names[4] + " " + gradeChart[2]);
}
else if (jasonGrade < 70 && jasonGrade >= 60){
    console.log(names[4] + " " + gradeChart[3]);
}
else if 
{
    console.log(names[4] + " " + gradeChart[4]);    
}




