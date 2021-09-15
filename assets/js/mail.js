
// modal 
    // modul--login
    const modals = document.querySelectorAll('.js-modal')
    const containers = document.querySelectorAll('.js-modal-container')
    const modalLogin = document.querySelector('.js-modal--login')
    const modalSignup = document.querySelector('.js-modal--signup')
    const login = document.querySelector('.js-login')
    const signup = document.querySelector('.js-signup')
    const backLogin = document.querySelector('.js-close-login')
    const backSignpu = document.querySelector('.js-close-signup')


    // forwark
    const forwarkLogin = document.querySelector('.js-forward-login')
    const forwarkSignup = document.querySelector('.js-forward-signup')

    //open--modal
    function Openlogin(){
        modalLogin.classList.add('open')
    }

    function Opensignin(){
        modalSignup.classList.add('open')
    }

    //close--modal

    function closeModal(){
        modalLogin.classList.remove('open')
        modalSignup.classList.remove('open')
    }

    function closeLogin(){
        modalLogin.classList.remove('open')
    }

    function closeSignup(){
        modalSignup.classList.remove('open')
    }

    //click--forwark
    function clickforwarkLogin(){
        modalSignup.classList.remove('open');
        modalLogin.classList.add('open')
    }

    function clickforwarkSignup(){
        modalLogin.classList.remove('open');
        modalSignup.classList.add('open')
    }
    //EvenClick
    login.addEventListener('click',Openlogin)
    signup.addEventListener('click',Opensignin)
    backLogin.addEventListener('click',closeLogin)
    backSignpu.addEventListener('click',closeSignup)
    forwarkLogin.addEventListener('click',clickforwarkLogin)
    forwarkSignup.addEventListener('click',clickforwarkSignup)

    //closelayout
    for(const modal of modals){
        modal.addEventListener('click',closeModal)
    }

    function notClose(ever){
        ever.stopPropagation()
    }

    for(const container of containers){
        container.addEventListener('click',notClose)
    }


//search
    const main =document.querySelector('.js-main')
    const search = document.querySelector('.js-search')
    const history = document.querySelector('.js-search__history')
    const inputSearch = document.querySelector('.js-search__focus')

    function showHistory(){
        history.classList.add('open')
    }

    function closeHistory(){
        history.classList.remove('open')
    }


    search.addEventListener('click',showHistory)
    inputSearch.addEventListener('click',notClose)
    main.addEventListener('click',closeHistory)


// contain-product
//     const loves = document.querySelectorAll('.contain-rated__love')
//     const divlove = document.querySelectorAll('.contain-rated')

//     function loved(){
//         divlove.classList.add('love')
//     }

//     for(const live of loves){
//         live.addEventListener('click',loved)
//     } 