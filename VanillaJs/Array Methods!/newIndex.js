const friends = [
    {name: 'Austin', age: 27, company: 'Cal Water'}, 
    {name: 'Ethan', age: 29, company: 'Cal Water'},
    {name: 'John', age: 28, company: 'Northstate pumping and drilling'},
    {name: 'Conor', age: 25, company: 'Enloe'}
]; 


const filterByCompany = () => {
    return friends.filter(friend => friend.company === 'Cal Water');
}; 

const findByName = () => {
    return friends.find(friend => friend.name === 'Conor');
}; 

const sortByYoungest = () => {
    return friends.sort((a, b)=> a.age - b.age);
}

const sortByOldest = () => {
    return friends.sort((a, b) => b.age - a.age);
}