const trash = document.querySelector('.trash');
const question = document.querySelector('.trash .question');

trash.addEventListener('click', function(){
    question.innerText = "Al mar JAJJAJ";
});

const trashBag = document.getElementById('trashBag');

trashBag.addEventListener('click', function(){
    trash.classList.toggle("active");
});

//const sea = document.querySelector('.sea');
const physical = document.getElementById('physical');
const chemical = document.getElementById('chemical');

physical.addEventListener('click', function(){

    setTimeout(function () {
        window.location.href = 'sub_sceneries/beach_subscenery.html';
    }, 0);
    
/* en sub escenario
    setTimeout(function () {
        window.location.href = 'sub_sceneries/beach_subscenery_good.html';
    }, 3000);
    */
});

chemical.addEventListener('click', function(){

    setTimeout(function () {
        window.location.href = 'sub_sceneries/beach_subscenery.html';
    }, 0);
/*
    setTimeout(function () {
        window.location.href = 'sub_sceneries/beach_subscenery_bad.html';
    }, 3000);
*/
});

