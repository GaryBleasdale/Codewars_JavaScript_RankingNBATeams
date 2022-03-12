function nbaCup(resultSheet, toFind) {
  let resultArr=[]
  let allTeamsArr=[]
  let uniqueArray;
  let arr = resultSheet.split(',')
  for (i=0;i<arr.length;i++){

        let testVarResults= arr[i].match(/(\d+)\.?/g)
        let testVarTeams=arr[i].match(/[^0-9]{1,}/gi)
        
        let testVarTeamsTrim1 = testVarTeams[0].trim()
        let testVarTeamsTrim2 = testVarTeams[1].trim() 
        if (testVarTeamsTrim2==="Philadelphia"){
          testVarTeamsTrim2 = "Philadelphia 76ers"
        } 
        allTeamsArr.push(testVarTeamsTrim1)
        allTeamsArr.push(testVarTeamsTrim2)
        if(/[\.]/.test(String(testVarResults[0]))){
          return `Error(float number):${arr[i]}`
        }
        if(/[\.]/.test(String(testVarResults[1]))){
          return `Error(float number):${arr[i]}`
        }
        uniqueArray = allTeamsArr.filter(function(item, pos) {
          return allTeamsArr.indexOf(item) == pos;
})
}







object={}
for (i=0;i<uniqueArray.length;i++){
  object[`${uniqueArray[i]}`]= {W:0, D:0,L:0, Scored:0, Conceded:0,Points:0}  
}


if (uniqueArray.includes(toFind)){



for (i=0;i<arr.length;i++){

  let testVarResults= arr[i].match(/(\d+)\.?/g)
  let testVarTeams=arr[i].match(/[^0-9]{1,}/gi)

  let testVarTeamsTrim1 = testVarTeams[0].trim()
  let testVarTeamsTrim2 = testVarTeams[1].trim()
  if (testVarTeamsTrim2==="Philadelphia"){
    testVarTeamsTrim2 = "Philadelphia 76ers"
  } 
  console.log(testVarResults[0])

if(/[\.]/.test(String(testVarResults[0]))){
  return `Error(float number):${arr[i]}`
}
if(/[\.]/.test(String(testVarResults[1]))){
  return `Error(float number):${arr[i]}`
}


  object[`${testVarTeamsTrim1}`].Scored +=parseInt(testVarResults[0])
  object[`${testVarTeamsTrim2}`].Scored +=parseInt(testVarResults[testVarResults.length-1])
  object[`${testVarTeamsTrim1}`].Conceded +=parseInt(testVarResults[testVarResults.length-1])
  object[`${testVarTeamsTrim2}`].Conceded +=parseInt(testVarResults[0])

  if(parseInt(testVarResults[0])>parseInt(testVarResults[1])){
    object[`${testVarTeamsTrim1}`].W +=1
    object[`${testVarTeamsTrim1}`].Points +=3
    object[`${testVarTeamsTrim2}`].L +=1
  } else if (parseInt(testVarResults[0])<parseInt(testVarResults[1])) {
    object[`${testVarTeamsTrim2}`].W +=1
    object[`${testVarTeamsTrim2}`].Points +=3
    object[`${testVarTeamsTrim1}`].L +=1
  } else {
    object[`${testVarTeamsTrim2}`].D +=1
    object[`${testVarTeamsTrim1}`].D +=1
    object[`${testVarTeamsTrim1}`].Points +=1
    object[`${testVarTeamsTrim2}`].Points +=1
  }
}
return `${toFind}:W=${object[`${toFind}`].W};D=${object[`${toFind}`].D};L=${object[`${toFind}`].L};Scored=${object[`${toFind}`].Scored};Conceded=${object[`${toFind}`].Conceded};Points=${object[`${toFind}`].Points}`

} else if (toFind==="") {
  return ""
} else {
  return `${toFind}:This team didn't play!`
}
}



var r = "Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101.12 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112,Los Angeles Clippers 100 Boston Celtics 120"

console.log((nbaCup(r, "Atlanta Hawks")));

