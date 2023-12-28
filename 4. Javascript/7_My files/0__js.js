async function sum(request, responce){
    const obj1 = await{ // await: waiting, it holds data
        name: "Navnoor Singh",
        age : 18,
        id : 756
    }
    console.log(obj1);    
}
sum();

