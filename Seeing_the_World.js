"use strict";
// Store the location is a array. Make sure the array is not in alphabetical order.
let places = ['Italy', 'Germany', 'Agra', 'Eifel Tower', 'Times Square'];
//Print your array in its orignal order.
console.log('Orignal ' + places);
//Print your array in alphabetical order without modifying the actual list.
console.log('Copy ' + [...places].sort());
//Show that your array is still in its orignal order by printing it.
console.log('Orignal ' + places);
//Print your array in reverse aphabetical order without changing the order of the orignal list.
console.log('Copy ' + [...places].sort().reverse());
//Show that your array is still in its orignal order by orinting it again.
console.log('Orignal ' + places);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log('Orignal ' + places.reverse());
//Reverse the order of your list agin. Print the list to show its back to its orignal order.
console.log('Orignal ' + places.reverse());
//Sort your array so its stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Orignal ' + places.sort());
//Sort to change your so its stored in reverse alphabetical order. Prnt the list to show that its order has changed.
console.log('Orignal ' + places.sort().reverse());
