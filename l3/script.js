const requestURl='https://jsonplaceholder.typicode.com',
    nextBtn = document.querySelector('#next'),
    displayPage = document.querySelector('#currentPage'),
    prevBtn = document.querySelector('#prev');


var totalPages = 1,
totalPostPerPage=10,
currentPage=1;




getPosts(currentPage);

// getPost(1);


function getPost(id){
    let displayData='';
    const xhr = new XMLHttpRequest();   
    xhr.onload = function() {  
        let data=JSON.parse(xhr.response);
        console.log(data)
            displayData+=`
            <div class="card p-4 shadow-lg p-4 m-4 rounded userid "  data-userid="${data.userId}" data-id="${data.id}" >
                    <h2 class="mb-2 text-2xl font-bold text-center " >${data.title}</h2>
                    <p>${data.body}</p> 
                </div>
            
            `;

        document.querySelector('.users').innerHTML=displayData;
        


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


// prevBtn.addEventListener('click', prevFunction)


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


// function prevFunction(){
    
//     if(currentPage <= 1 ){
//         alert('This is the first page');
//     }else{
//         // currentPage+=1;
//         currentPage--;
//         // currentPage= currentPage+1;
//         getPosts(currentPage);
//         displayPage.innerHTML=currentPage;

//     }
// }

// let form = document.querySelector('form');

// let formData = new FormData(form);

// formData.append('username','sd');


// const xhr = new XMLHttpRequest();   
// xhr.onload = function() {  
//     let data=JSON.parse(xhr.response) ;
//     console.log(data)
    


//  }
// xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);    
// // xhr.open('GET', 'sample_text.txt', true);
// xhr.send(form);


