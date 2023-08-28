const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
    //Button click active
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })

    }

    // for (let i = 0; i < sectBtn.length; i++) {
    //     sectBtn[i].addEventListener('click', handleButtonClick);
    //   }

    // function handleButtonClick(event) {
    //   const currentBtn = document.querySelector('.active-btn');
    //   if (currentBtn) {
    //     currentBtn.classList.remove('active-btn');
    //   }
    //   event.target.classList.add('active-btn');
    // }

    //sections active class 
    allSections.addEventListener('click', (e) => {
        // console.log(e.target);
        const id = e.target.dataset.id;
        if (id) {
            //remove selected from the other btn
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

pageTransitions();


