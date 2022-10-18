// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
// const emailRef =document.querySelector(".email");


// // 1. then
// // fetch("https://jsonplaceholder.typicode.com/users/1")
// //     .then(response => {
// //     return response.json();
// //     }).then(data => {
// //         console.log(data);
// //         emailRef.innerHTML= data.email
// //     });


// // 2. async/ await
// // async function main(){
// // const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
// // const data = await response.json()
// // console.log(data)
// // emailRef.innerHTML = data.email

// // }

// // main();


const statusRef = document.querySelector(".status");

const videoRef = document.querySelector(".video");



function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("")
        }, 2000);
    })
}


// // 1 .then
// getSubscriptionStatus().then (response => console.log(response))


// // 2 async/await






function getVideo(SubscriptionStatus){
    return new Promise((resolve, reject) => {
        if (SubscriptionStatus === "VIP") {
            resolve("show video")
        }
        else if (SubscriptionStatus === "FREE") {
            resolve("show trailer")
        }
        else {
            reject("no video")
        }
    })
}

async function main() {
    const status = await getSubscriptionStatus()
    statusRef.innerHTML = status;
    try {
        console.log(await getVideo(status))
    }
    catch (e) {
        console.log(e)
        videoRef.innerHTML =e;
    }
    
}

main()