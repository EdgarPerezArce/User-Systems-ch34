


function displayUsers(usersArray){
    let tr="";
    for(let i=0;i<usersArray.length;i++){
        
        let user =usersArray[i];
        tr=`<tr>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${user.phone}</td>
            <td>${user.payment}</td>
            <td>${user.color}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            </tr>
            `;
            //create the tmp
            $("#users-table").append(tr);
            //append() the tmo into the HTML table
        }
        
    }
    


function init(){
    console.log("listing users...")
    let users = readUsers();
    console.log(users);
    displayUsers(users);
}
window.onload=init;