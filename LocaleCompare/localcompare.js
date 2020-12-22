/* 
The localeCompare() method returns a number indicating whether a reference string comes before, or after, 
or is the same as the given string in sort order.

The sort() method sorts the elements of an array in place and returns the sorted array.
 The default sort order is ascending, built upon converting the elements into strings, 
 then comparing their sequences of UTF-16 code units values.

    Say we have an array of objects, for my example I'll do 8 NFL teams. We will use .sort() to sort them by # of championships
    from most, to least. Then using the localecompare method, we will sort the teams with 0 championships to appear in alphabetical order
*/ 
const nflTeams = [
    {name: 'Las Vegas Raiders', superBowlWins: 3 }, 
    {name: 'Denver Broncos', superBowlWins: 3 }, 
    {name: 'Pittsburgh Steelers', superBowlWins: 6 }, 
    {name: 'Minnesota Vikings', superBowlWins: 0 }, 
    {name: 'Atlanta Falcons', superBowlWins: 0 }, 
    {name: 'Los Angeles Chargers', superBowlWins: 0 }, 
    {name: 'Indianapolis Colts', superBowlWins: 2 }, 
    {name: 'Seattle Seahawks', superBowlWins: 1 }, 
    {name: 'San Francisco 49ers', superBowlWins: 5 }
]

    const mostSuperBowlWins = nflTeams.sort((teamA, teamB) => {
        return teamB.superBowlWins - teamA.superBowlWins || teamA.name.localeCompare(teamB.name)
    })

    console.log(mostSuperBowlWins)