window.onload=function(){
    let lis=document.getElementsByTagName('li')
    for (let i = 0; i < lis.length; i++) {
       lis[i].onmouseover=function(){
           lis[i].className='active'
       }
       lis[i].onmouseout=function(){
           lis[i].className=''
       }
    }
   
}    


      
  
   
