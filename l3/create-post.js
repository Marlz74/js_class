const requestURl='https://jsonplaceholder.typicode.com',
    nextBtn = document.querySelector('#next'),
    form = document.querySelector('form'),
    displayPage = document.querySelector('#currentPage'),
    prevBtn = document.querySelector('#prev');


var totalPages = 1,
totalPostPerPage=10,
currentPage=10;


// CREATE POST
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log('clicked')
//     const xhr = new XMLHttpRequest();   
//     xhr.onload = function() {  
//         let response=JSON.parse(xhr.response);
//         console.log(response)

//         if(response.id){alert('Post created successfully')}else{
//             alert('An unexpected error occured')
//         }

//     }
//     xhr.open('POST', `${requestURl}/posts`, true);    
//     // xhr.open('GET', 'sample_text.txt', true);
//     xhr.send(form);
// })

// UPDATE POST
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log('clicked')
//     const xhr = new XMLHttpRequest();   
//     xhr.onload = function() {  
//         let response=JSON.parse(xhr.response);
//         console.log(response)
//         // getPost(1);
      

//     }
//     xhr.open('PUT', `${requestURl}/posts/5`, true);    
//     // xhr.open('GET', 'sample_text.txt', true);
//     xhr.send(form);
// })

// PATCH, PARTIAL UPDATE
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('clicked')
    const xhr = new XMLHttpRequest();   
    xhr.onload = function() {  
        let response=JSON.parse(xhr.response);
        console.log(response)
        // getPost(1);
      

    }
    xhr.open('PUT', `${requestURl}/posts/5`, true);    
    // xhr.open('GET', 'sample_text.txt', true);
    xhr.send(form);
})


// getPosts(currentPage);

getPost(5);

function getPost(id){
    
    const xhr = new XMLHttpRequest();   
    xhr.onload = function() {  
        let data=JSON.parse(xhr.response);
        console.log(data)

        document.querySelector('.title').value=data.title;
        document.querySelector('.body').value=data.body;
        document.querySelector('.userId').value=data.userId;
        


    }
    xhr.open('GET', `${requestURl}/posts/${id}`, true);    
    // xhr.open('GET', 'sample_text.txt', true);
    xhr.send();
}



function getPosts(page){
    let displayData='';
    const xhr = new XMLHttpRequest();   
    xhr.onload = function() {  
        let data=JSON.parse(xhr.response);
        console.log(data)
        totalPages=Math.ceil(data.length/totalPostPerPage);
        let startOffset = (page-1)*totalPostPerPage;
        let endOffsest = page*totalPostPerPage;
        data= data.slice(startOffset,endOffsest);
        data.forEach(d => {
            displayData+=`
            <div class="card p-4 shadow-lg p-4 m-4 rounded userid "  data-userid="${d.userId}" data-id="${d.id}" >
                    <h2 class="mb-2 text-2xl font-bold text-center " >${d.title}</h2>
                    <p>${d.body}</p> 
                </div>
            
            `;
        });

        document.querySelector('.users').innerHTML=displayData;
        


    }
    xhr.open('GET', `${requestURl}/posts`, true);    
    // xhr.open('GET', 'sample_text.txt', true);
    xhr.send();
}


nextBtn.addEventListener('click', nextFunction)





prevBtn.addEventListener('click', ()=>{
    if(currentPage <= 1 ){
        alert('This is the first page');
    }else{
        // currentPage+=1;
        currentPage--;
        // currentPage= currentPage+1;
        getPosts(currentPage);
        displayPage.innerHTML=currentPage;

    }
})

function nextFunction(){
    console.log(currentPage)
    if(currentPage>= totalPages){
        alert('This is the last page');
    }else{
        // currentPage+=1;
        currentPage++;
        // currentPage= currentPage+1;
        getPosts(currentPage);
        displayPage.innerHTML=currentPage;

    }
}


