isDark = true 


observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if (entry.isIntersecting)
        {
            entry.target.classList.add("subtitle-animation")
        }
    })
})


subTitleEl = document.querySelectorAll('.sub-title')


for (var i = 0; i < subTitleEl.length; i ++){
    observer.observe(subTitleEl[i])
}


function changeMode(){
    backgroundColor = document.getElementById("body")
    
    headerTwo = document.getElementsByTagName("h2")

    headerThree = document.getElementsByTagName("h3")
    headerFive = document.getElementsByTagName("h4")
    paragraphs = document.getElementsByTagName("p")

 

    if (isDark == true)
    {
        for (var i = 0; i < headerThree.length; i ++){
            headerThree[i].style.color = "black"
        }

        for (var i = 0; i < headerFive.length; i ++){
            headerFive[i].style.color = "black"
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

        for (var i = 0; i < headerFive.length; i ++){
            headerFive[i].style.color = "white"
        }

        for (var i = 0; i < paragraphs.length; i ++){
            paragraphs[i].style.color = "white"
        }

        for (var i = 0; i < paragraphs.length; i ++){
            headerTwo[i].style.color = "white"
        }

        backgroundColor.style.background = "#BFB8CB"
        headerTwo[0].style.color = "white"
        isDark = true
    }

}