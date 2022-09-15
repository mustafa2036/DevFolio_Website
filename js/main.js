let nums = document.querySelectorAll('.counter-num .counter-nums');

nums.forEach((num)=> startCount(num));

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval( () => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    }, 1000 / goal);
}

let landing = $("#landing");

window.onscroll = () => {
    if(window.scrollY > 0 && window.scrollY > 100){
        document.querySelector(".navbar").classList.add("active");
        
    }
    else{
        document.querySelector(".navbar").classList.remove("active");
    }
    if(window.scrollY > 100){
        document.querySelector('.back-tp-top').style.opacity = '1'
    }
    else{
        document.querySelector('.back-tp-top').style.opacity = '0'
    }
}

$(document).ready(function () {
    $(".spinner").fadeOut(2000, () => {
        $(landing).fadeOut(1000, () => {
            $("body").css("overflow-y","auto");
        })
    });
    let typed = new Typed('.element', {
        strings: ['Photographer', 'Designer', 'Developer', 'Freelancer'],
        typeSpeed: 100,
        loop: true,
    });  
});
