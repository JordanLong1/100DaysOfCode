import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Random Nba Players</h1>
<div>
  
</div>
`;

const getStats = async () => {

  const resp = await fetch(' https://www.balldontlie.io/api/v1/players') 
  const data = await resp.json()
  displayStats(data.data)
 
}


const displayStats = (data) => {

  let list
  
  data.map(player => {
    
    let names = player.first_name + ' ' + player.last_name; 
  
    return list += names
  })



  let ele = document.getElementById('app')

  ele.append(list)

}

getStats(); 