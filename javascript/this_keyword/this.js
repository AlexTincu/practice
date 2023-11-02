// "use strict";

/*
  This Keyword
  In JavaScript, the this keyword is a little different compared to other languages. 
  It refers to an object, but it depends on how or where it is being invoked. 
  It also has some differences between strict mode and non-strict mode.

  In an object method, this refers to the object
  Alone, this refers to the global object
  In a function, this refers to the global object
  In a function, in strict mode, this is undefined
  In an event, this refers to the element that received the event
  Methods like call(), apply(), and bind() can refer this to any object
*/

// "this" in an object is object itself
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

/* 
In HTML event handlers, this refers to the HTML element that received the event

<button onclick="this.style.display='none'">
  Click to Remove Me!
</button> 
*/

// This in a function:  global object or undefined when strict mode
function myFunction() {
  return this;
}
console.log(myFunction());

// Alone => empty object in node
// Alone => in a browser window the global object is the window object.
console.log(this);
