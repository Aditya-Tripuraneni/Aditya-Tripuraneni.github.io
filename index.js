isDark = true 
isOpen = false

aboutEl = document.getElementById("about-me")
contactEl = document.getElementById("contact")
timelineEl= document.getElementById("time-line")
webInfoEl = document.getElementById("web-info")
console.log(webInfoEl)

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
    backgroundColor = document.getElementById("body")
    
    headerTwo = document.getElementsByTagName("h2")

    headerThree = document.getElementsByTagName("h3")
    headerFour = document.getElementsByTagName("h4")
    paragraphs = document.getElementsByTagName("p")

 

    if (isDark == true)
    {
        for (var i = 0; i < headerThree.length; i ++){
            headerThree[i].style.color = "black"
        }

        for (var i = 0; i < headerFour.length; i ++){
            headerFour[i].style.color = "black"
        }

        for (var i = 0; i < paragraphs.length; i ++){
            paragraphs[i].style.color = "black"
        }

        for (var i = 0; i < headerTwo.length; i ++){
            headerTwo[i].style.color = "black"
        }

        backgroundColor.style.background = "white"
        headerTwo[0].style.color = "black"

        isDark = false
    }
    else{
        for (var i = 0; i < headerThree.length; i ++){
            headerThree[i].style.color = "white"
        }

        for (var i = 0; i < headerFour.length; i ++){
            headerFour[i].style.color = "white"
        }

        for (var i = 0; i < paragraphs.length; i ++){
            paragraphs[i].style.color = "white"
        }

        for (var i = 0; i < paragraphs.length; i ++){
            headerTwo[i].style.color = "white"
        }

        backgroundColor.style.background = "#2a2a2a"
        headerTwo[0].style.color = "white"
        isDark = true
    }

}