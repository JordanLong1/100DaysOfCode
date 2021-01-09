
const nbaPlayers = [
    {
      name: 'DeAaron Fox', 
      number: 5, 
      team: 'Sacramento Kings', 
      style: 'Slasher, very fast'
    }, 
    {
      name: 'Damian Lillard', 
      number: 0, 
      team: 'Portland Trailblazers', 
      style: 'Can do it all, All-Star'
    }, 
  
    {
      name: 'John Wall', 
      number: 11, 
      team: 'Houston Rockets', 
      style: 'Slasher, very fast'
    }, 
    {
      name: 'Jamal Murray', 
      number: 23, 
      team: 'Denver Nuggets', 
      style: 'Shooter'
    },
    {
      name: 'Kevin Durant', 
      number: 35, 
      team: 'New Jersey Nets', 
      style: 'Can do it all, All-Star'
    }, 
    {
      name: 'Jimmy Butler', 
      number: 23, 
      team: 'Miami Heat', 
      style: 'Can do it all, All-Star'
    }, 
    {
      name: 'Tyrese Haliburton', 
      number: 0, 
      team: 'Sacramento Kings', 
      style: 'Rookie, can do it all. Lengthy on defense and distributes niceky.'
    }
  ]
  
  // find - returns the value of the first element that satisfies.
  function findSomething() {
    nbaPlayers.find(player => player.name === 'Kevin Durant'); 
  
    // output ->   { name: 'Kevin Durant',number: 35, team: 'New Jersey Nets', style: 'Can do it all, All-Star' }, 
  }
  findSomething();
  // some - tests whether at least one element in the array passes the test implemented. 
  function findSome() {
    // lets see if we can find if some are slashers and fast!
    nbaPlayers.some(player => player.style === 'Slasher, very fast');
  // output -> true, because there are one or more players in our list that are slashers.
  };
  findSome();
  // every - tests whether all the elements pass the test, returns a boolean. 
  function checkEveryElement() {
    nbaPlayers.every(player => player.team !== 'Los Angeles Lakers'); 
    // output -> true, because none of the players in the array play for the lakers.
  }
  checkEveryElement(); 
  // includes -> determines whether an array method includes a certain value.
  function checkIncludes() {
    nbaPlayers.includes(player => player.team === 'Sacramento Kings'); 
    // output -> will return true because there is at leasy one player in the list on the Kings.
  }
  checkIncludes(); 
  // map - creates a new array populated with the results of calling a provided function on every element in the calling array.
  function mapSomePlayers() {
    let test = nbaPlayers.map(player => player.number * 2); 
    // output -> [10, 0, 22, 46, 70, 46, 0]. took all of the jersey numbers, multiplied by 2 and returned them in a NEW array :)
  }
  mapSomePlayers();
  // filter -> creates a new array with all elements that pass the test implemented by the provided function.
  function filterByNum() {
    nbaPlayers.filter(player => player.number === 23); 
    // output -> will return {name: 'Jimmy Butler', number: 23, team: 'Miami Heat', style: 'Can do it all, All-Star'} 
    // and ->  {name: 'Jamal Murray', number: 23, team: 'Denver Nuggets', style: 'Shooter'},
    // in a new array
  }
  filterByNum()

  const merge = () => {

    //The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
    let nbaTeams = ['Sacramento Kings', 'Washington Wizards', 'Chicago Bulls', 'Houston Rockets', 'Phoenix Suns']
    let nbaTeamsCities = ['Sacramento', 'Washington', 'Chicago', 'Houston', 'Phoenix']

    const teamsAndCties = nbaTeams.concat(nbaTeamsCities); 

    return teamsAndCties;
    //output -> [Sacramento Kings, Washington Wizards, Chicago Bulls, Houston Rockets, Phoenix Suns, Sacramento, Washington, Chicago, Houston, Phoenix]

  }

  const each = () => {
    //The forEach() method executes a provided function once for each array element.
    const listOfPlayersByName = nbaPlayers.forEach(player => player.name);

    return listOfPlayersByName
    // output -> list of nba players from the array of objects by name. *** DOESNT RETURN A NEW ARRAY
  }

  const popOff = () => {
    //The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
    return nbaPlayers.pop(); 
    // will remove Tyrese Haliburton object from the array of objects and return that object. 
    /*
{
  name: 'Tyrese Haliburton',
  number: 0,
  team: 'Sacramento Kings',
  style: 'Rookie, can do it all. Lengthy on defense and distributes niceky.'
}
    */

  }