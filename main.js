


const accesskey="rFN_zfZUZ10r2ZHsdt1zJZYJ4DM0glile8czUdOc0WM";



const formE1=document.querySelector("form")
const inputE1=document.getElementById("searchinput")
const searchresults=document.querySelector(".searchresults")
const showmore=document.querySelector("#showmore")




let inputData="";
let page =1;
 async function searchimages(){
    const inputData= inputE1.value
   
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
    

    const response = await fetch(url)
    const data=await response.json()

    const results= data.results

    if(page===1){
        searchresults.innerHTML=""
    }
    results.map((results)=>{
        const imageWrapper=document.createElement('div')
        imageWrapper.classList.add("searchresult")
        const image=document.createElement('img')
        image.src=results.urls.small
        image.alt=results.alt_description
        const imagelink=document.createElement('a')
        imagelink.href=results.links.html
        imagelink.innerText = results.alt_description;
        imagelink.target="_blank"

        console.log(results);

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imagelink);
        searchresults.appendChild(imageWrapper);
        
    })
    page++;
    if(page>1){
        showmore.style.display="block"
    }

}
formE1.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1;
    searchimages();
})
showmore.addEventListener("click",()=>{
   
    searchimages();
})
