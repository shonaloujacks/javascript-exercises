const findTheOldest = function(people) {
    const peopleWithAges = people.map((person) => {
        if (person.yearOfDeath) {
        return { 
        ...person,
        age: person.yearOfDeath - person.yearOfBirth
        }
    }
        return {
            ...person,
            age: new Date().getFullYear() - person.yearOfBirth
        }

    });
    
    peopleWithAges.sort((a, b) => {
        if (a.age < b.age) {
            return 1;
        }
        if (a.age > b.age) {
            return -1;
        }
        return 0;
    }
    
    )

    return peopleWithAges[0]; 
};

// Do not edit below this line
module.exports = findTheOldest;


// people.yearOfDeath - people.yearOfBirth (iterative function that adds result into an array)

// Sort array in descending order then return the item at index 0 
