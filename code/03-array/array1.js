// some, every, includes -> boolean

const items = [1, 2, 3, 4, 5, 6]

const isSomeFive = items.some((value, index, array) => {
    return value > 5
})
const isEveryFive = items.every((value, index, array) => {
    return value > 5
})
const isIncludeFive = items.includes(5)

console.log({ isSomeFive, isEveryFive, isIncludeFive })

const students = [
    { name: 'A', age: 15 },
    { name: 'B', age: 20 },
    { name: 'C', age: 17 },
]

const isSomeStudentAgeMoreThan18 = students.some((student) => {
    return student.age > 18
})

const isEveryStudentAgeMoreThan18 = students.every((student) => {
    return student.age > 18
})

console.log({ isSomeStudentAgeMoreThan18, isEveryStudentAgeMoreThan18 })