 
let navBar = ()=>{
    gsap.from('.logos',{
        opacity:0,
        duration:.5,
        scale:0
    })
    gsap.from('#navbar-btn',{
        y:-100,
        opacity:0,
        duration:.3,
        stagger:.2
    })

}; navBar()


let home = ()=>{

    let timeline = gsap.timeline();

    timeline.from('#home-section-part-1',{
        x:-500,
        duration:.8,
        opacity:0,
    },'same')

    timeline.from('#home_pages-icons',{
        opacity:0,
        duration:.4,
        scale:0,
        stagger:.1
    })

    timeline.from('#home-section-part-2',{
        x:500,
        duration:.8,
        opacity:0,
    },'same')

}; home()


let aboutMe = ()=>{

    let timelines =  gsap.timeline({
        scrollTrigger:{
            trigger:'#section-section2',
            scroller:'body',
            start:'top 50%',
           // markers:true,
        }
    });

    timelines.from('#headings',{
        opacity:0,
        duration:.8,
        scale:0
    })
    timelines.from('#about-first',{
        x:-500,
        duration:.8,
        opacity:0,
    },'sayd')
    timelines.from('#about-second',{
        x:500,
        duration:.8,
        opacity:0,
    },'sayd')






}; aboutMe()


let skill = ()=>{

    let timelines =  gsap.timeline({
        scrollTrigger:{
            trigger:'#section-section3',
            scroller:'body',
            start:'top 50%',
           // markers:true,
        }
    });

    timelines.from('#skillHeadings',{
        opacity:0,
        duration:.8,
        scale:0
    })
 
    timelines.from('#skillContent',{
        opacity:0,
        duration:.8,
        scale:0
    })
 
}; skill()

let Portfolio = ()=>{

    let timelines =  gsap.timeline({
        scrollTrigger:{
            trigger:'#section-section4',
            scroller:'body',
            start:'top 50%',
            //markers:true,
        }
    });

    timelines.from('#portfolioHeading',{
        opacity:0,
        duration:.8,
        scale:0
    })
 
    timelines.from('#portfolio-cardes',{
        opacity:0,
        duration:1,
        scale:0
    })
    timelines.from('#portfolio-button',{
        opacity:0,
        duration:.5,
        scale:0
    })
 
}; Portfolio()

let contact = ()=>{

    let timelines =  gsap.timeline({
        scrollTrigger:{
            trigger:'#section-section5',
            scroller:'body',
            start:'top 50%',
           // markers:true,
        }
    });

    timelines.from('#contactHeading',{
        opacity:0,
        duration:.8,
        scale:0
    })
 
    timelines.from('#contact-content',{
        opacity:0,
        duration:1,
        scale:0
    })
 
 
}; contact()

 