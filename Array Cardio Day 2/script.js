  // ## Array Cardio Day 2

  const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];



  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const isAdult = people.some(person => {
      const currYear = new Date().getFullYear();
      return ((currYear - person.year) >= 19);
  })

  console.log({isAdult})
  // Array.prototype.every() // is everyone 19 or older?

  const isEveryoneAdult = people.every(person => {
    const currYear = new Date().getFullYear();
    return ((currYear - person.year) >= 19)
  })
  console.log({isEveryoneAdult})





  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423

  const isThere = comments.find(comment => comment.id == 823423);

  console.log(isThere)
  // Array.prototype.findIndex()
  // Find the comment with this ID
  const isIndex = comments.findIndex(comment => comment.id == 823423);
  console.log(isIndex)

  // delete the comment with the ID of 823423
// const deleteComment = [...comments.splice(isIndex, 1)]
// console.table(filterCommet)

const newComments = [
    ...comments.slice(0, isIndex),
    ...comments.slice(isIndex + 1)
]

console.table(newComments)