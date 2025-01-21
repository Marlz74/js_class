const requestURl='https://jsonplaceholder.typicode.com';


console.log('hello there');

const dataToSend={
    'id':1,
    'title':'new title',
    'body':'new data body',
    'userId':1
}

// fetch(`${requestURl}/posts/1`,{
    // 'method':'PUT',
    // "body":JSON.stringify(dataToSend),
    // headers:{
    //     'content-type':'application/json; charset=UTF-8'

    // }
// })

// .then((response)=>response.json())

// .then(data=>processData(data));

function processData(data){
    console.log('inside process data')
    console.log(data)
}

console.log('before async')

async function fetchData(url,method,body,callback){
    let options={
        'method':method,
        headers:{
            'content-type':'application/json; charset=UTF-8'
    
        }
    };
    if(method!='GET'){
        options.body=JSON.stringify(body);
    }
    let response = await fetch(`${requestURl+url}`,options);
    let data = await response.json();
    callback(data)

}

console.log('after asynce')


fetchData('/posts','GET',null,processData)


fetchData('/posts/1','PUT',dataToSend,processData)
 
