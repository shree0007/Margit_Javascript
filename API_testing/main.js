console.log('Hello')

// fetch('https://jsonplaceholder.typicode.com/todos/')
//       .then(response => response.json())
//       .then(json => console.log(json))
//     //all todos

//       fetch('https://jsonplaceholder.typicode.com/users/')
//       .then(response => response.json())
//       .then(json => console.log(json))
//all users



//        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))  
//       //user id = 1 of todos


//  fetch('https://jsonplaceholder.typicode.com/posts/2')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       //comments of posts with id 2

//       fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       // comments of posts with id 2.
    



     
       fetch('https://jsonplaceholder.typicode.com/users/')
       .then(response => response.json())
       .then(json => {dataList(json);
       })

       const dataList = (data)=> {
        document.querySelector('.data').innerHTML=
        data.map(item=>{return `<li>${item.name}</li>`}).join('')
        
        document.querySelector('.phone').innerHTML=
        data.map(item=>{return `<li>${item.phone}</li>`}).join('')

        
       }

       









    //    function user (data){
    //   data.forEach(element => {
    //         console.log(element.name)
    //         const list=document.createElement('li')
    //         list.textContent=element.name
    //         namelist.appendChild(list)
    //     });

    //    }

