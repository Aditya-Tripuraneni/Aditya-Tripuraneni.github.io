console.log("Hello World!")
console.log('tESTING Features')




isDark = true 
function changeMode(){
    backgroundColor = document.getElementById("body")
    headerThree = document.getElementsByTagName("h3")
    headerFive = document.getElementsByTagName("h5")
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

        backgroundColor.style.background = "white"
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

        backgroundColor.style.background = "#BFB8CB"
        isDark = true

    }

}