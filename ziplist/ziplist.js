const charList = ["a", "b", "c"];
const numList = [1, 2, 3];


function zipList(list1, list2) {
  let combinedList= [];

  let i= 0;
  for(item1 of list1) {
    combinedList.push(item1);

    combinedList.push(list2[i]);
    i++;
  }

  return combinedList;
}

console.log( zipList(charList, numList) );

function zipListTheSimpleWay(list1, list2) {
  return _.flatten( _.zip(list1, list2) );
}

console.log( zipListTheSimpleWay(charList, numList) );

