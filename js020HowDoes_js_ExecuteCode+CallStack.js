//js is single threded

//How call stack execute

/*execution context*/
//koi bhi js file javascript run ya execute kese kregi
//it run it in 2 phases
//code file to js-firstly always a global execution context is always made,which is referred to variable "this"
//browser and node has diff global execution context
//in brower this has value window object

//it executes in single thread
//it has global execution context and functinal executio0n context
//usually there are only 2 but in some there is a 3 - eval execution context

/********************************************************** */
//1st phase -memory creation phase/memory phase
//only allocate the mem to variable declared
//FROM CODE
//first-global execution -  this
//second-mem creation phase
//line1 - val1-->undefined
//line2 - val2-->undefined
//line3 - addNum-->defination of function ,whole block ofg code in{}
//line7 - result1-->undefined
//line8 - result2-->undefined

/********************************************************** */
//2nd phase - execution phase
//mathematical  + - * /

//line1 - val1<--10
//line2 - val2<--5
//no work in line 3 to line 6
//line7 - it goes to addNum,it creates an different execution context
//a new variable environment +execution thread in created in each function

//now mem phase and execution phase will execute now for addNum each time function is used

/********************************************************************** */
/*********************callstack**************************** */

//in inspect
//go to source after arrows
//you can make snippet on it

//you have to save it in it before running it imp
