function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    
   }
   
   function ShowElementById(elementId){
       const element = document.getElementById(elementId)
       element.classList.remove('hidden')
   }