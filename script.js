/* Consegna

Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

*/

//prelevare gli elementi
const img1Elem = document.getElementById("light-off");
console.log(img1Elem)
const img2Elem = document.getElementById("light-on")
console.log(img2Elem)
const bgCardElem = document.getElementById("bg")
console.log(bgCardElem)
const btnElem = document.querySelector("button")
console.log(btnElem)
const cardElem = document.querySelector(".card")
console.log(cardElem)
const imgBox =document.getElementById("imgBox")
console.log(imgBox)

//quando clicco sul bottone display none l'immagine corrente e display block l'immagine none

btnElem.addEventListener("click", function () {
    imgBox.classList.remove("me-4")


    const isBlack = btnElem.classList.contains("btn-dark")

    console.log(isBlack)
        
    if (isBlack ===true){
        btnElem.classList.remove("btn-dark")
    img2Elem.style.display = "none"//ho provato un approccio misto
    img1Elem.classList.remove("d-none")
     img1Elem.style.display = "flex" 
      img1Elem.classList.add("align-center")
   cardElem.classList.add("bg-dark")
       btnElem.innerText ="Accendi"
   
         
  
  
    }else{

   
   btnElem.classList.add("btn-dark")
    img1Elem.style.display = "none"//ho provato un approccio misto
    img2Elem.classList.remove("d-none")
    img2Elem.style.display = "flex" //non riesco a metterlo al centro
    cardElem.classList.remove("bg-dark")
    btnElem.innerText ="Spegni"
         imgBox.classList.remove("me-4")
     }
  

  

})
