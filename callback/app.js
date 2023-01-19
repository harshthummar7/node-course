// const geocode = (address,callback) => {
//        setTimeout(() => {
//             const data = {
//                 latitude:0,
//                 longitutde:0
//             }
//             callback(data)
//         },2000)
// }

// geocode("india",(data) => {
//     console.log(data)
// })


//challenge


const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b

        callback(sum)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) 
})