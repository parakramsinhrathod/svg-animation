let paths = document.querySelectorAll('path')

fillSvgPaths()

document.addEventListener('scroll', fillSvgPaths)

function fillSvgPaths(){
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)


    for(let i = 0; i< paths.length; i++){
        let path  = paths[i]
        let pathLength = path.getTotalLength()
        console.log('pathlenghttt', pathLength)

        path.style.strokeDasharray  = pathLength
        path.style.strokeDashoffset = pathLength

        let drawLenght  = pathLength * scrollPercentage
        path.style.strokeDashoffset = pathLength - drawLenght 
    }
}