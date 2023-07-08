// function small(){
//     // const reduce= document.querySelector(".toggle");
//     // reduce.classList.toggle("show");
//     // // if(reduce===onclick){
//     //     alert("hello")
//     // }

//     const allText = document.querySelector('.alltext');
//     document.querySelector
// }
document.querySelector('.btn').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebar-sub')
    // document.querySelectorAll('.text').forEach((item)=>{
    //     item.style.display = 'none'
    // })
    document.querySelectorAll('.text').forEach((item)=>{
        item.style.display = 'none'
    })
})