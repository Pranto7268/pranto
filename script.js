


let navbarActive = ()=>{
    let nav_btn = document.querySelectorAll('#navbar-btn')
    nav_btn.forEach( (navLem)=>{
        navLem.addEventListener('click',()=>{
            document.querySelector('.acive').classList.remove('acive');  
            navLem.classList.add('acive');
        });
    } );
}; navbarActive()



let formValidation = ()=>{
    
    let sentBtn = document.getElementById('sentBtn');
    sentBtn.addEventListener('click',()=>{

        let fullName = document.getElementById('fullname');
        let yourEmail = document.getElementById('youremail');
        let phone = document.getElementById('phone');
        let subject = document.getElementById('subject');
        let message = document.getElementById('message');

        console.log(fullName,yourEmail,phone,subject,message)

        if (fullName.value ==""){
            
            fullName.classList.add('input-box1')
        }

        else if (yourEmail.value ==""){
            
            yourEmail.classList.add('input-box1')
        }

        else if (phone.value ==""){
            
            phone.classList.add('input-box1')
        }

        else if (subject.value ==""){
            
            subject.classList.add('input-box1')
        }

        else if (message.value ==""){
            
            message.classList.add('input-box1')
        }

        else{
            fullName.classList.add('input-box2')
            yourEmail.classList.add('input-box2')
            phone.classList.add('input-box2')
            subject.classList.add('input-box2')
            message.classList.add('input-box2')
        }

    });

}; formValidation()




let skills = ()=>{

    let html = document.querySelector('.html-5');
    let css = document.querySelector('.css-3');
    let bootstrap = document.querySelector('.bootstrap');
    let canva = document.querySelector('.canva');
    let JavaScript = document.querySelector('.JavaScript');
    let jquery = document.querySelector('.jquery');
    let vueJs = document.querySelector('.vueJs');
    let gsaps = document.querySelector('.gsap');

    let show = document.querySelector('#showName');


    html.addEventListener('mouseover', ()=>{
        show.innerHTML = 'HTML-5';
    });
    css.addEventListener('mouseover', ()=>{
        show.innerHTML = 'CSS-3';
    });
    bootstrap.addEventListener('mouseover', ()=>{
        show.innerHTML = 'bootstrap';
    });
    canva.addEventListener('mouseover', ()=>{
        show.innerHTML = 'canva';
    });
    JavaScript.addEventListener('mouseover', ()=>{
        show.innerHTML = 'JavaScript';
    });
    jquery.addEventListener('mouseover', ()=>{
        show.innerHTML = 'jquery';
    });
    vueJs.addEventListener('mouseover', ()=>{
        show.innerHTML = 'vue.Js';
    });
    gsaps.addEventListener('mouseover', ()=>{
        show.innerHTML = 'gsap';
    });

}; skills();


 