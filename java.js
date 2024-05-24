//alert ('welcome to kenneth amoatey homepage')

//document.body.innerHTML='Welcome to kenneth amoatey homepage'

//alert('I\'m learning javascript')

//alert ('come on \n let go')

//alert(`backticks`)

// VAR VARIABLE
/*var name="kenneth amoatey"
console.log(name)

var age= 36
console.log(age)

var adult=true
console.log(adult)

// LET VARIABLE
let student="codetrain ghana"
console.log(student)

let gen=28
console.log(gen)

// CONST VARIABLE
const residence ="east legon"
console.log(residence)

const street = 13
console.log(13)*/

/*
// ARITHMETIC OPERATORS

// addition(+) is used to add two or more variable values.
let pens = 15
let books =25
console.log(pens+books)

// substraction(-) is used to substract two or more variable values.
let chairs = 15
let pupils = 20
console.log(chairs-pupils)

//Modulus (%) divides two or more values and gives you the reminder
let hens = 25
let consumers = 7
console.log(hens%consumers)

/*Pre and Post increment(++) Pre-increment adds (++)one to the value before running the code 
whilst Post-increment adds(++)one after running the code.*/
/*let fowls = 10
let eggs = 10
console.log(++eggs)
console.log(fowls++)
console.log(fowls)

//Pre and Post decrement
let boys = 10
let girls = 10
console. log(--boys)
console.log(girls--)
console.log(girls)*/

//COMPARISON OPERATORS
/* Equal to (==), and Not equal to (!=)sign watches if both values are the same
but ignores if both variable are the same.*/
/*let men = '15'
let women = 15
console.log(men == women)
console.log(women != men)

/* Identical (===) and Not Identical(!==) sign compares the both 
the variable and the value to see if they are the same or not */
/*let boys = '25'
let girls =25
console.log(boys === girls)
console.log(boys !== girls)

// Less than(<) and Greater than(>)
let teachers = 23
let students = 22
console.log(teachers<students)
console.log(teachers>students)

//Less than or equal to(<=)and Greater than or equal to(>=)
let teacher = '23'
let student = 23
console.log(teacher<=student)
console.log(teacher>=student)*/

/* Logical or boolean operators
// Logical AND (&&), Logical OR (||), Logical NOT (!)
let horses= 30
let saddles = 24
let riders = 24
let boots= 30
console.log(horses<=boots && saddles>=riders)
console.log(horses>saddles || riders>boots)
console.log(!boots>=saddles)


//STRING OPERATORS (+)
let firstname = "kenneth"
let middlename = "yaw"
let lastname = "amoatey"
console.log(firstname+middlename+lastname)
console.log(middlename+ "  "+ lastname+"  "+firstname)*/

//CONDITIONS AND LOOPS
//if else statement
 /*let alive= 'true'
if(alive == true){
    console.log('rabbit is alive')
}else{
    console.log('the rabbit is gone home')
}
//if else if statement
 let score =20
 if (score>=80){
    console.log("A")
 } else if(score>=70){
    console.log("B")
 } else if(score>=60){
    console.log("C")
 }else if(score>=50){
    console.log("D")
 } else if(score>=40){
    console.log("E")
 }else if (score<=39){
    console.log("fail")
 }
 //switch statement
 let boys=15
 let girls=20
 switch (boys+girls){
    case 20:
        console.log(20)
        break;
        case 35:
            console.log(35)
            break;
            default:
                console.log("no answer")
                break;
 }*/

 //LOOPS
 //for loop and while loop
 /*let num = 0
 for(let i=0; i<10;i++){
    num = i+1
    console.log(num)  
 }

 let number=0
 while(number<20){
    number=number+1
    console.log(number)
}/*
   
//New Array method
/*let students = new Array('kenneth',14,true)
console.log(students)
console.log(students[0])

//the square bracket
let pupils = ['kofi','ama','joe']
console.log(pupils)
console.log(pupils[1])*/

//FUNCTION
/*function hellostudent(name){
   console.log('hello'+" "+name)
}
hellostudent('kenneth')

function hellostudents(name,age, gen){
   console.log('hi'+ " "+name)
   console.log('I am'+ " "+age)
   console.log('I am in'+" "+ gen)
}
hellostudents('kenneth',36,'gen28')
hellostudents('Ama',18,'gen30')*/

//FUNCTION RETURN
/*function addTen(num){
   let ans=num+2;
   return ans;
}
console.log(addTen(10))

function addition(num1, num2,num3,num4){
   let ans=num1+num2+num3*num4;
   return ans;
}
console.log(addition(2,4,10,2))

function hellostudents(name,age,generation){
   console.log('hi, my name is'+" " +name)
   console.log('I am '+" "+ age)
   console.log('I am in '+" "+ generation)
}
hellostudents('kenneth',36,'gen28')
hellostudents('Ama',18,'gen29')
hellostudents('kojo',25,'gen30')*/

//RETURN FUNCTION
/*function addTwonumbers(num1,num2){
let ans=num1+num2
return ans
}
addTwonumbers(5,6)
console.log(addTwonumbers(5,6))

function multiplication(number1,number2,number3, number4, number5){
   let ans=number1*number2*number3*number4*number5;
   return ans
}
console.log(multiplication(2,3,4,5,6))*/

//PRE-BUILT FUNCTIONS
/*alert('are you leaving')

let age= prompt('how old are you')
console.log(age)

let close=confirm('do you want to close this page')
console.log(close)
document.write(close)*/

//ARROW FUNCTIONS
/*const addition=(num1,num2)=>{
   let total=num1+num2
   console.log(total)
}
addition(13,12)*/

//OBJECT AND CLASSES
//objects
/*let students = {
   name:'kenneth amoatey',
   age:20,
   gender:'male',
   gen:'gen28'
}
console.log(students)
console.log(students.age)
console.log(students.gen)
console.log(students.gender)

//SQUARE BRACKETS
console.log(students['age'])
console.log(students['name'])
console.log(students['gender'])*/

//CLASSES
/*class ProfileTemplate{
   constructor(name,email, password,address, age){
      this.name=name
      this.email=email
      this.password=password
      this.address=address
      this.age=age

   }
   Getbook(){
      return this.name+"   "+this.email+"   "+this.address
   }

}
const User1= new ProfileTemplate('kenneth','kenneth.amoatey@gmail.com','Bluebird','Abeka-junction',25)
console.log(User1.Getbook())

const User2= new ProfileTemplate('Ama','Ama.amoah@gmail.com','12345','Accra',18)
console.log(User2.Getbook())*/

//CLASS INHERITANCE
class Car{
   constructor(wheels, stear, seats, engine){
      this.wheels=wheels,
      this.stear=stear,
      this.seats=seats,
      this.engine=engine

   }
}

class Pickup extends Car{
  features(){
      return this.wheels +"  "+ 'wheels with a large bucket'
   }
}
const hilux = new Pickup('four','one','one','one')
console.log(hilux.features())