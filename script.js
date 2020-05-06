document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    select.addEventListener('change', () => {
        fetch('./cars.json', {
            method: 'GET',
            mode: 'cors'
        })    
            .then((response) => {
                if (response.status !== 200) {
                    throw 'error !!! ';
                }
                return (response.json());
            })
            .then((data) => {
                outputData(data);
            })
            .catch((error) => {
                outputData(error);
                console.log('error: ', error);

            });

    });

const outputData = (data) => {
    data.cars.forEach(item => {
        if (item.brand === select.value) {
            const {brand, model, price} = item;
            output.innerHTML = `Тачка ${brand} ${model} <br>
            Цена: ${price}$`;
        } else if (select.value === 'no') {
            output.innerHTML = `выбери тачку`; 
        }
    });
};

const error = (data) => {
    output.innerHTML = data;
};


});




        
// const postData = () => {
//     return new Promise ((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState !== 4) {
//                 return;
//               }
//             if (request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } else {
//                 reject('Произошла ошибка');
//             }
//         });

//         request.open('GET', './cars.json');
//         request.setRequestHeader('Content-type', 'application/json');
//         request.send();
//     });
// };

// const outputData = (data) => {
//     data.cars.forEach(item => {
//         console.log('item', item.brand);
//         console.dir(select);
//         if (item.brand === select.value) {
//             const {brand, model, price} = item;
//             output.innerHTML = `Тачка ${brand} ${model} <br>
//             Цена: ${price}$`;
//         } else if (select.value === 'no') {
//             output.innerHTML = `выбери тачку`; 
//         }
//     });
// };

// const error = (data) => {
//     output.innerHTML = data;
// };

// postData()
//   .then(outputData)
//   .catch(error);