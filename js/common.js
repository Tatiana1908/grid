

;(function(){

    imgOnFullScreen();


    // burger menu start    
    
    let overlay = document.querySelector('.overlay'),
        burger = document.querySelector('.menu-btn'),
        menu = document.querySelector('.menu-btn> ul.nav');
        
        
    burger.addEventListener('click', function(){
        menu.classList.toggle('active')
        overlay.classList.toggle('visible')        
        
        window.onscroll = function(){
        if (window.pageYOffset> 500 ){
            menu.classList.remove('active') 
            overlay.classList.remove('visible')

            }
        }
    })
    overlay.onclick = function(){
        overlay.classList.remove('visible');
        menu.classList.remove('active');
    }
    // burger menu end
   
    // arrows in aside menu

    let arrows = document.querySelectorAll('span.arrow');

    for(i = 0; i < arrows.length; i++){

        arrows[i].addEventListener('click', function(e){
            
            let hidden = this.closest('li').querySelector('.hidden');
            
            if ( hidden !== null){
                this.classList.toggle('down');
                hidden.classList.toggle('active');
            } 
        } )
    }
    // arrows in aside menu end
}());

function imgOnFullScreen(){
    let fullScreenBtns = document.querySelectorAll('.full-screen'),
        overlayFull = document.querySelector('.overlay-full'),
        close = document.querySelector('.wrapper-for-img span'),
        wrapperImg = document.querySelector('.wrapper-for-img');


    for(i = 0; i < fullScreenBtns.length; i++){

        fullScreenBtns[i].addEventListener('click', function (){

            let imgSrc = this.closest('.photo').firstElementChild.getAttribute("src");

            let img = document.createElement("IMG");
            img.src = imgSrc;
            wrapperImg.appendChild(img);

            wrapperImg.classList.add('active');
            overlayFull.classList.add('visible');
          
            close.addEventListener('click', function (){
                wrapperImg.classList.remove('active');
                wrapperImg.removeChild(img);
                overlayFull.classList.remove('visible');
            })
            overlayFull.onclick = function(){
                overlayFull.classList.remove('visible');
                wrapperImg.classList.remove('active');
                wrapperImg.removeChild(img); 
            }
        })
    }
}