 
  const container= document.querySelector(".container")
    const slideBox= document.querySelector(".slide-box")
  const startBtn= document.querySelector(".start")
  let letterContentContainer=document.querySelector(".letter-content-container")
  const menuStart=document.querySelector(".menu-start")
  const letter= document.querySelector(".letter")
  const head= document.querySelector(".head")
  const letterShadow= document.querySelector(".letter-shadow")
  const input=document.querySelector(".enter-content")
  const initialTitleContent=document.querySelector(".title-content")
  const initialContent=document.querySelector(".content")
  const writingBtn=document.querySelector(".writing")
  const colorBtn=document.querySelector(".change-color")
  const familyBtn=document.querySelector(".chose-family")
  const saveBtn=document.querySelector(".save")
  const Btn=document.querySelectorAll(".btn")
  const newContent=document.getElementById("new-content")
  const soundPage=document.getElementById("sound-page")


  letter.addEventListener("click",rotate )

  function rotate(){ 
    letter.classList.remove("item-slide")
      container.appendChild(letter)
     
      
      slideBox.style.display="none"

      setTimeout(()=>{
              letter.classList.add("letter2")
      letter.classList.remove("letter")
      letterContentContainer.classList.add("letter-content-container2")
      letterContentContainer.classList.remove("letter-content-container")

      head.setAttribute("class","head2")
      
      setTimeout(()=>{
        soundPage.play();
        ;},450)
        
      
      letterShadow.setAttribute("class","letter-shadow2")
     letter.removeEventListener("click",rotate )
      },10)


  }

  startBtn.addEventListener("click",floatContent)

  function floatContent(){ 
     letterContentContainer.classList.add("letter-content-container3")
    letterContentContainer.classList.remove("letter-content-container2")
    letter.classList.add("letter3")
    letter.classList.remove("letter2")
    
      

      setTimeout(()=>{
          menuStart.style.display="block" },3000)
        
    
      setTimeout(()=>{
          writingBtn.style.opacity="1"
          writingBtn.style.transform="translate(-30px , 0px)"
          writingBtn.style.transition="1s ease" },3005)

    
      
      setTimeout(()=>{
          colorBtn.style.opacity="1"
          colorBtn.style.transform="translate(-30px , 0px)"
          colorBtn.style.transition="1s ease"},3300)

      
      
      setTimeout(()=>{
        familyBtn.style.opacity="1"
          familyBtn.style.transform="translate(-30px , 0px)"
          familyBtn.style.transition="1s ease"},3600)

      

      setTimeout(()=>{
        saveBtn.style.opacity="1"
          saveBtn.style.transform="translate(-30px , 0px)"
          saveBtn.style.transition="1s ease"},3900)

      

    
  
      setTimeout(() => {
            letterContentContainer.classList.add("letter-content-container4")
    letterContentContainer.classList.remove("letter-content-container3")
    
      },2000);
  }


//
// tô đậm nút khi ấn
 for(let i=0;i< Btn.length;i++){
   Btn[i].addEventListener("click",()=>{
     
     for(let a=0;a <Btn.length;a++){ 
     if(a!=i){ Btn[a].classList.remove("bold")}
     }
     Btn[i].classList.toggle("bold")

   })

 }


 //
 // nút viết bài 
 function writing(){
    input.style.display="block"
    input.focus();
    initialContent.innerHTML=""
    initialTitleContent.innerHTML=""
    startBtn.style.display="none"
    newContent.style.display="none"  
   }



   //
   // nút chọn  màu 
   const inputColor= document.getElementById("input-color");
      
      
    function color(){
      inputColor.classList.toggle("hide-color")
      menuFamily.classList.remove("grid")
    }

      inputColor.oninput=()=>{
        input.style.color=inputColor.value
        newContent.style.color=inputColor.value

      }
      



 //
 // nút chọn mẫu chữ     
const familyNumber = document.querySelectorAll(".family")

for( let i= 0;i <familyNumber.length;i++){
familyNumber[i].addEventListener("click",()=>{
  for(let a=0; a< familyNumber.length; a++){
    if(a != i ){familyNumber[a].classList.remove("bold")}
  }
  familyNumber[i].classList.toggle("bold")

  input.style.fontFamily= window.getComputedStyle(familyNumber[i]).fontFamily
})
}

const menuFamily= document.querySelector(".menu-family")

function choseFamily(){
  menuFamily.classList.toggle("grid")
  inputColor.classList.add("hide-color")
}
      

//
// nút lưu
  function save(){
    if(!input.value){alert("please full fill ")}
    else{
      letter.addEventListener("click",rotate )
      newContent.style.display="block" 
      input.style.display="none"
      newContent.innerText=input.value
      newContent.style.color=input.style.color
      newContent.style.fontFamily=input.style.fontFamily
     setTimeout(returnLetter(),1000)
   
       function returnLetter(){

    saveBtn.style.opacity="0"
    saveBtn.style.transform="translate(-30px , 0px)"
    saveBtn.style.transition="1s ease"
     
    setTimeout(()=>{
        familyBtn.style.opacity="0"
          familyBtn.style.transform="translate(-30px , 0px)"
          familyBtn.style.transition="1s ease"},600)
    setTimeout(()=>{
          colorBtn.style.opacity="0"
          colorBtn.style.transform="translate(-30px , 0px)"
          colorBtn.style.transition="1s ease"},900)

    setTimeout(()=>{
          writingBtn.style.opacity="0"
          writingBtn.style.transform="translate(-30px , 0px)"
          writingBtn.style.transition="1s ease" },1200)     

   setTimeout(()=>{
          menuStart.style.display="none" },2000)

    setTimeout(() => {
            letterContentContainer.setAttribute("class","letter-content-container3")
         
    
      },2000);

    setTimeout(()=>{
       letterContentContainer.setAttribute("class","letter-content-container2b")

   letter.setAttribute("class","letter2")

    },3100)  
    


    setTimeout(()=>{
   
    letter.setAttribute("class","letter")

      head.setAttribute("class","head")
    
      letterContentContainer.setAttribute("class","letter-content-container")
   
      letterShadow.setAttribute("class","letter-shadow")
     
    },4000)


  }
  }
  }


 