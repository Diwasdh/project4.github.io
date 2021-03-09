//Scrolling animation

AOS.init({
    mirror: true
});

//

const container = document.querySelector('.rating');
const item=container.querySelectorAll(".star");

container.onclick = e =>{
    const elclass=e.target.classList;
    if(!elclass.contains('active')){
        item.forEach(
            item=>item.classList.remove('active')
        );
        console.log(e.target.getAttribute("data-rate"));
        console.log(container.getAttribute("id"));
        elclass.add('active');
    }
};

{
    const container = document.querySelector('.rating2');
const item=container.querySelectorAll(".star");

container.onclick = e =>{
    const elclass=e.target.classList;
    if(!elclass.contains('active')){
        item.forEach(
            item=>item.classList.remove('active')
        );
        console.log(e.target.getAttribute("data-rate"));
        console.log(container.getAttribute("id"));
        elclass.add('active');
    }
};

}

{
    const container = document.querySelector('.rating3');
const item=container.querySelectorAll(".star");

container.onclick = e =>{
    const elclass=e.target.classList;
    if(!elclass.contains('active')){
        item.forEach(
            item=>item.classList.remove('active')
        );
        console.log(e.target.getAttribute("data-rate"));
        console.log(container.getAttribute("id"));
        elclass.add('active');
    }
};
}

{
    const container = document.querySelector('.rating4');
    const item=container.querySelectorAll(".star");
    
    container.onclick = e =>{
        const elclass=e.target.classList;
        if(!elclass.contains('active')){
            item.forEach(
                item=>item.classList.remove('active')
            );
            console.log(e.target.getAttribute("data-rate"));
            console.log(container.getAttribute("id"));
            elclass.add('active');
        }
    };
}





