document.addEventListener('DOMContentLoaded', () => {
    'use strict';


    const API_KEY = 'trnsl.1.1.20200506T175640Z.12f379ed2868f855.6c89881b97d06d238ff54514c48848e04e46a71f',
    
        textarea = document.querySelector('textarea'),
        button = document.querySelector('button'),
        span = document.querySelector('span'),
        select = document.querySelector('select');

        button.addEventListener('click', (e) => {
            e.preventDefault();
          

            let url = `https://translate.yandex.net/api/v1.5/tr.json/translate`,
            body = `key=${API_KEY}&text=${textarea.value}&lang=${select.value}`;
            
            const postData = (url, body) => {
                return fetch(url, {
                    method: 'POST',
                    body: body,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                }); 
            };

            postData(url, body)
            .then((response) => {
                if (response.status !== 200) {
                    throw 'error !!! ';
                }   
                return response.json();
                }).then((response) => {
                    span.textContent = response.text;

                    
                })
                .catch((error) => {
                    console.log(error);
    
        });   
    });

});






        //     postData(url, body)
        //       .then((response) => {
        //           console.log(response.status);
                  
        //         if (response.status !== 200) {
        //             throw 'error !!! ';
        //         }          
        //         console.log(response.json());
                
        //       })
        //       .catch((error) => {
        //           console.log(error);
                  
        //       });  
        // });

        
        // const postData = (url, body) => {
        //     return fetch(url, {
        //         method: 'POST',
        //         mode: 'no-cors',
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         },
        //         body: body
        //     }); 
        // };



