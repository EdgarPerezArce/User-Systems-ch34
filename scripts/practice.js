// 1) create an array with the student's names
let studentName = ["edgar ", "bryan ", "gary ", "hethe ", "john ", "jose ", "kevin ", "scott ", "sivisko ", "will ",];
console.log(studentName);

function studentNameDisplay(){

for (let i=0; i < studentName.length; i++) {
   
    document.getElementById("sNames").innerHTML += studentName[i];
}

}
studentNameDisplay();

let users = [
    {
        name:"Devante",
        salary:"100,000"
    },
    {
        name:"Steve",
        salary:"100,000"
    },
    {
        name:"Naomi",
        salary:"200,000"
    },
    {
        name:"Chris",
        salary:"300,000"
    },

];

function displayUsers(){
    
    
    let row="";
   for(let i=0; i < users.length; i++){
    let user = users[i];
   row+=`<tr>
    <td>${user.name}</td>
    <td>${user.salary}</td>
   </tr>`;
    }
    document.displayUsers("job").innerHTML =  row
}  

