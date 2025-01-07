const testElement = document.querySelector('.test'),
    showModal = document.querySelector('#show-modal'),
    modalWrapper = document.querySelector('.modal-wrapper'),
    closeModal = document.querySelector('#close-modal');    

var userids=[];


testElement.style.color = 'red';    
testElement.style.backgroundColor = 'black';

// testElement.innerHTML = '<span style="color:blue;" >Hello World</span>';  

// testElement.innerText = '<span style="color:blue;" >Hello World</span>';  

// testElement.textContent = '<span style="color:blue;" >Hello World</span>';  

// creating a new element

let span = document.createElement('span');

span.classList.add('text-green-500', 'font-bold');

span.textContent = 'New span Element';

let span2 = document.createElement('span');

span2.classList.add('text-green-500', 'font-bold');

span2.textContent = 'New span Element 2';

let span3 = document.createElement('span');

span3.classList.add('text-white-500', 'font-bold');

span3.textContent = 'New span Element 3';

testElement.append(span,span2,'text');

// testElement.insertBefore(span3, span2);
testElement.insertBefore(span3, testElement.firstChild);
// testElement.appendChild(span2);


console.dir(testElement)

// testElement.remove();

// testElement.childNodes[0].remove();

// classlist manipulation

testElement.classList.add('text-yellow-500', 'font-bold', 'dkdkd', 'dddd'); 

testElement.classList.remove('text-yellow-500', 'font-bold', 'dkdkd', 'dddd');

testElement.classList.toggle('text-yellow-500', 'font-bold', 'dkdkd', 'dddd');

// SIMPLE POP UP MODAL USING JAVASCRIPT

showModal.addEventListener('click', () => { 
    // modalWrapper.classList.remove('hide-overlay');
    loadUsers();
},false)


closeModal.addEventListener('click', () => { 
    modalWrapper.classList.add('hide-overlay');
},false)


// AJAX 


// BASIC REQUEST USING AJAX
loadPartialUsers()
function loadPartialUsers() {
    const xhr = new XMLHttpRequest();   
    xhr.onload = function() {  
        console.log('--------------------------------------------')
        console.log(xhr.status) // if status is 200, it means the request is successful 
        console.log(xhr.readyState) // if ready state is 4, it means the response is ready
        let users=JSON.parse(xhr.response) ;
        users= users.slice(0,5);
        let usersDataString='';
        users.forEach(user => {
            usersDataString +=`
                    <div class="card p-4 shadow-lg p-4 m-4 rounded userid"  data-userid="${user.id}" >
                        <h2 class="mb-2 text-2xl font-bold text-center " >${user.username}</h2>
                        <p>${user.phone}</p> 
                        <p><a href="https://${user.website}">${user.website}</a></p>
                    </div>
            
            `
        });
    
        document.querySelector('.users').innerHTML = usersDataString;

        userids = document.querySelectorAll('.userid');

        getSingleUser();
    
    
     }
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);    
    // xhr.open('GET', 'sample_text.txt', true);
    xhr.send();
    
}

function getSingleUser(id){
console.log(userids)
    userids.forEach(id=>{
        id.addEventListener('click',()=>{
            console.dir(id)
            let userid = id.dataset.userid;
            
            const xhr = new XMLHttpRequest();   
            xhr.onload = function() {  
                let users=JSON.parse(xhr.response) ;
                let user = users.find(user => user.id == userid);   
                console.log(user)
                
                
                   let usersDataString =`
                            <div class="card p-4 shadow-lg p-4 m-4 rounded "  data-userid="${user.id}" >
                                <h2 class="mb-2 text-2xl font-bold text-center " >${user.username}</h2>
                                <p>${user.phone}</p> 
                                <p><a href="https://${user.website}">${user.website}</a></p>
                            </div>
                    
                    `
                ;
            
                document.querySelector('.users').innerHTML = usersDataString;
            
            
             }
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);    
            // xhr.open('GET', 'sample_text.txt', true);
            xhr.send();
        },false)
    })

}


function loadUsers() {
    const xhr = new XMLHttpRequest();   
    xhr.onload = function() {  
        console.log('--------------------------------------------')
        console.log(xhr.status) // if status is 200, it means the request is successful 
        console.log(xhr.readyState) // if ready state is 4, it means the response is ready
        let users=JSON.parse(xhr.response) ;
        console.log(users)
        let usersDataString='';
        users.forEach(user => {
            usersDataString +=`
                    <div class="card p-4 shadow-lg p-4 m-4 rounded userid"  data-userid="${user.id}" >
                        <h2 class="mb-2 text-2xl font-bold text-center " >${user.username}</h2>
                        <p>${user.phone}</p> 
                        <p><a href="https://${user.website}">${user.website}</a></p>
                    </div>
            
            `
        });
    
        document.querySelector('.users').innerHTML = usersDataString;
    
    
     }
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);    
    // xhr.open('GET', 'sample_text.txt', true);
    xhr.send();
    
}



// SEND DATA TO THE API USING AJAX

function sendData() {
    const xhr = new XMLHttpRequest();   
    xhr.onload = function() {  
        console.log('--------------------------------------------')
        console.log(xhr.status) // if status is 200, it means the request is successful 
        console.log(xhr.readyState) // if ready state is 4, it means the response is ready
        let users=JSON.parse(xhr.response) ;
        console.log(users)
        let usersDataString='';
        users.forEach(user => {
            usersDataString +=`
                    <div class="card p-4 shadow-lg p-4 m-4 rounded "  data-userid="${user.id}" >
                        <h2 class="mb-2 text-2xl font-bold text-center " >${user.username}</h2>
                        <p>${user.phone}</p> 
                        <p><a href="https://${user.website}">${user.website}</a></p>
                    </div>
            
            `
        });
    
        document.querySelector('.users').innerHTML = usersDataString;
    
    
     }
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);    
    // xhr.open('GET', 'sample_text.txt', true);
    xhr.send();
    
}