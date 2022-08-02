function userName(){
    var name=prompt("Enter your Name ")
    return name
}
function userGender(){
    var gender=prompt("Enter your gender (male or female)")
    while (gender !='female' && gender !='male'){
        gender= prompt("please choose one of this just (male or female)")
        if (gender=='female' ||gender=='male'){
            break
        }
    }
    return gender
}
function userAge(){
    var age=prompt("Enter your age")
    if (age <=0){
        alert("this is un correct value")
    }
    return age
}
function skipMessage(){
    var skip=confirm("are you want to skip the welcoming message")
    if (skip===false){
        if (gender=='female'){
            alert("welcome Ms."+uName)
        }
        else{
            alert("welcome Mr."+uName)
        }
    }

}
function yNquestion(){
    var arabian=prompt("are you arabian ?")
    var jordanian=prompt("are you jordanian ?")
    var itRole=prompt("are you from IT background ?")
    if (arabian == null || arabian.length === 0){
        arabian='invalid'
    }
    if (jordanian == null || jordanian.length === 0){
        jordanian='invalid'
    }
    if (itRole == null || itRole.length === 0){
        itRole='invalid'
    }
    arr=[arabian,jordanian,itRole]
    for (var i=0;i<3;i++){
        console.log(arr[i])
    }



}
uName=userName()
gender=userGender()
age=userAge()
skip=skipMessage()
yNquestion()