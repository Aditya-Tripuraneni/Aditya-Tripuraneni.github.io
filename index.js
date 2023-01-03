isDark = true 
isOpen = false

nameEl = document.getElementById("name")
aboutEl = document.getElementById("about-me")
contactEl = document.getElementById("contact")
timelineEl= document.getElementById("time-line")
webInfoEl = document.getElementById("web-info")

headerTwo = document.getElementsByTagName("h2")

subTitleEl = document.getElementsByClassName("sub-title")
timeLineNames = document.getElementsByClassName("time")
console.log(timeLineNames)


headerFour = document.getElementsByTagName("h4")
paragraphs = document.getElementsByTagName("p")


observeName = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            entry.target.classList.add("name-animation")
        }
    })
})

observeName.observe(nameEl)

observerTopBottomTitles = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if (entry.isIntersecting)
        {
            entry.target.classList.add("subtitle-animation")
        }
    })

})


observerTopBottomTitles.observe(aboutEl)
observerTopBottomTitles.observe(contactEl)


observerMiddleTitle = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if (entry.isIntersecting)
        {
            entry.target.classList.add("subtitle-animation-2")
        }
    })
})

observerMiddleTitle.observe(timelineEl)


observeText = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if (entry.isIntersecting)
        {
            entry.target.classList.add("change-colors")
        }
    })
})

observeText.observe(webInfoEl)

function slideNavBar(){
    if (isOpen == true){
        isOpen = false //closing nav bar
        console.log("Nav bar has just been closed")

    }
    else{
        isOpen = true //openning nav bar
        console.log("Nav bar has just been opened")

        
    }
}

function changeMode(){
    let backgroundColor = document.getElementById("background")

    if (isDark == true)
    {
        changeWebsiteBlack()
        backgroundColor.style.background = "white"
        backgroundColor.classList.add("trial")
        backgroundColor.addEventListener("animationend", function(){
            backgroundColor.classList.remove("trial")
        })

        headerTwo[0].style.color = "black"
        isDark = false
    }
    else
    {
        changeWebsiteWhite()
        backgroundColor.style.background = "#2a2a2a"
        backgroundColor.classList.add("trial")
        backgroundColor.addEventListener("animationend", function(){
            backgroundColor.classList.remove("trial")
        })
        headerTwo[0].style.color = "white"
        isDark = true
    }


}

function changeWebsiteWhite(){
    for (let i = 0; i < subTitleEl.length; i ++){
        subTitleEl[i].style.color = "white"
    }

    for (let i = 0; i < timeLineNames.length; i ++){
        timeLineNames[i].style.color = "white"
    }

    for (let i = 0; i < headerFour.length; i ++){
        headerFour[i].style.color = "white"
    }

    for (let i = 0; i < paragraphs.length; i ++){
        paragraphs[i].style.color = "white"
    }

    for (let i = 0; i < paragraphs.length; i ++){
        headerTwo[i].style.color = "white"
    }
}

function changeWebsiteBlack(){
    for (let i = 0; i < subTitleEl.length; i ++){
        subTitleEl[i].style.color = "black"
    }

    for (let i = 0; i < timeLineNames.length; i ++){
        timeLineNames[i].style.color = "black"
    }

    for (let i = 0; i < headerFour.length; i ++){
        headerFour[i].style.color = "black"
    }

    for (let i = 0; i < paragraphs.length; i ++){
        paragraphs[i].style.color = "black"
    }

    for (let i = 0; i < headerTwo.length; i ++){
        headerTwo[i].style.color = "black"
    }
}