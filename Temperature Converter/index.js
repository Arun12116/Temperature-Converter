let cel=document.getElementById("cel");
let fah=document.getElementById("fah");
let btn=document.getElementById("btn");
function convert(){
    let c=document.getElementById("cel").value;
    let f=(c *9/5) + 32;
    console.log(f);
    let fah=document.getElementById("fah").value=f;

}
btn.addEventListener("click",convert)
