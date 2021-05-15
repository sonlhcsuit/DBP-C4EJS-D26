// let a = Math.floor(Math.random()*10);
// console.log(a)

// if (a<10){
//     console.log("less than ten")
// }else{
//     console.log("ten")
// }

// let times = Math.floor(Math.random()*20);
// console.log(times)
// for(let i = 0;i<times;i++){
//     a = a - 1;
// }

// console.log(a)

let btn = document.querySelector("input[type=button]")

// btn.addEventListener("click",()=>{
//     console.log("you just click me!")
//     console.log("im off")
//     // chặn đứng chương trình
    
// })

// btn.addEventListener("click",()=>{
//     console.log("you just click me second time!")
//     console.log("im off second time")
// })


// xử lý bất đồng bộ
// console.log(btn)


// fetch()
// let user = {
//     name :"son",
//     role:"teaching ",
//     classes:["D26","C07"]
// }
// console.log(typeof user)
// console.log(user)


// let user_as_json= JSON.stringify(user)
// console.log(typeof user_as_json)
// console.log(user_as_json)
// console.log([user_as_json])

// let user_as_object = JSON.parse(user_as_json)

// console.log(typeof user_as_object)
// console.log(user_as_object)

// fetch(url)
// .then((request)=>{
//     return request.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// console.log("fetched!")

function render(pokemon){
    // thao tác hiển thị lên màn hình
    let out = document.querySelector("#output")
    let stats = ""
    for(let i =0;i<pokemon.stats.length;i++){
        stats = stats+ `<li>${pokemon.stats[i]}</li>`

    }
    // for (let stat of pokemon.stats){
    //     stats = stats+ `<li>${stat}</li>`
    // }
        
    out.innerHTML = ""
    out.insertAdjacentHTML("beforeend",`
    <p>${pokemon.name}</p>
    <img src="${pokemon.image}"/>
    <ul>
        ${stats}
    </ul>
    `)
    out.insertAdjacentHTML
}

btn.addEventListener("click",async ()=>{
    // thực hiện việc lấy dữ liệu
    // bất đồng bộ nên dùng await
    let url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*800)}`
    let response = await fetch(url)
    let body = await response.json()
    // đồng bộ rồi => rút thông tin và hiển thị!
    console.log(body)
    let pokemon = {
        image : "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
        name:"name",
        stats: []
    }
    pokemon.image = body["sprites"]["other"]["official-artwork"]["front_default"]
    pokemon.name = body.name.toUpperCase()
    for(let stat of body["stats"]){
        pokemon.stats.push(stat.base_stat)
    }
    
    render(pokemon)
})

// MVC 