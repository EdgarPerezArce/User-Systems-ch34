// 1) create an array with the student's names
let studentName = ["Edgar ", "Bryan ", "Gary ", "Hethe ", "John ", "Jose ", "Kevin ", "Scott ", "Sivisko ", "Will ",];
console.log(studentName);

function studentNameDisplay(){

for (let i=0; i < studentName.length; i++) {
   
    document.getElementById("sNames").innerHTML += studentName[i];
}
 
}
studentNameDisplay();

let users = [
    {name:"Edgar", salary:"100,000"},
    {name:"Bryan", salary:"100,000"},
    {name:"Gary", salary:"200,000"},
    {name:"Hethe", salary:"300,000"}

]
console.log(users);
function displayUsers(){

    let row="";

    for(let i=0;i<users.length;i++){
        let user=users[i]
        
        {
        row+=`<tr>
            <td>${user.name}</td>
            <td>${user.salary}</td>
            </tr>
            `
        }
        
    }
    document.getElementById("userspay").innerHTML = row;
}  

displayUsers();

