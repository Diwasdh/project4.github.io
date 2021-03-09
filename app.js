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
    const container1 = document.querySelector('.rating2');
const item1=container1.querySelectorAll(".star1");

container1.onclick = e =>{
    const elclass=e.target.classList;
    if(!elclass.contains('active')){
        item1.forEach(
            item1=>item1.classList.remove('active')
        );
        console.log(e.target.getAttribute("data-rate"));
        console.log(container1.getAttribute("id"));
        elclass.add('active');
    }
};

}

{
    const container2 = document.querySelector('.rating3');
const item2=container2.querySelectorAll(".star2");

container2.onclick = e =>{
    const elclass=e.target.classList;
    if(!elclass.contains('active')){
        item2.forEach(
            item2=>item2.classList.remove('active')
        );
        console.log(e.target.getAttribute("data-rate"));
        console.log(container2.getAttribute("id"));
        elclass.add('active');
    }
};
}

{
    const container3 = document.querySelector('.rating4');
    const item3=container3.querySelectorAll(".star3");
    
    container3.onclick = e =>{
        const elclass=e.target.classList;
        if(!elclass.contains('active')){
            item3.forEach(
                item3=>item3.classList.remove('active')
            );
            console.log(e.target.getAttribute("data-rate"));
            console.log(container3.getAttribute("id"));
            elclass.add('active');
        }
    };
}





