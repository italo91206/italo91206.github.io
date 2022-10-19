function toggleMobileMenu(){
    const body = document.querySelector("body")
    const el = document.querySelector("#menu-mobile")
    
    el.classList.toggle("left-[-100%]")
    el.classList.toggle("left-0")
    body.classList.toggle("overflow-hidden")
}

function closeAllOpenMenus(except){
    const els = document.querySelectorAll('.menu-mobile-item > div')
    const buttons = document.querySelectorAll('.menu-mobile-item > button')
    
    els.forEach((el) => { 
        if(el.attributes.id.value != `submenu-mobile-${except}`){
            el.classList.add("hidden")
        }
    })

    buttons.forEach((b) => {
        b.querySelector("svg").classList.remove("rotate-180")
    })
}

function toggleMobileMenuItem(){
    const target = this.event.target
    const id_to_open = target.attributes['submenu-item-id'].value
    
    this.closeAllOpenMenus(id_to_open)
    
    target.querySelector("svg").classList.toggle("rotate-180")
    document.querySelector(`#submenu-mobile-${id_to_open}`).classList.toggle("hidden")
}

function activateMobileSubMenu(option){
    const all_buttons = document.querySelectorAll("#menu-mobile--actions button")
    all_buttons.forEach((b) => {
        b.classList.remove("bg-[#dddddd]")
    })
    const target = this.event.target
    const options = ['menu', 'account']
    let to_hide = options.filter((f) => { return f != option })[0]

    document.querySelector(`#menu-mobile--${to_hide}`).classList.add("hidden")
    document.querySelector(`#menu-mobile--${option}`).classList.remove("hidden")

    target.classList.add("bg-[#dddddd]")
}