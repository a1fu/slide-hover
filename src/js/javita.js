//var
    const bxItems = document.querySelector('.bx-items')

//event
    cargarEventListeners()
    function cargarEventListeners() {
        document.addEventListener('DOMContentLoaded', slider)
    }

//function
    //inicializar slider
    function slider() {
        //width
        const widht = bxItems.clientWidth
        //posicion
        const posicion = bxItems.getBoundingClientRect()
        const left = posicion.left
        //children
        const children = bxItems.children.length
        const child = bxItems.children
        //divition slide element
        const div = widht/children
        
        bxItems.addEventListener('mousemove', function mousePosition(e) {
            let posicionX = e.clientX
            loadImage(posicionX, children, div, left, child)
        })
    }

    //load image
    function loadImage(posicionX, children, div, left, child) {
        for (let i = 0; i < children; i++) {
            if( posicionX > (left + (div * i)) && posicionX < (left + (div * (i+1))) ){
                for (let x = 0; x < children; x++) {
                    child[x].classList.remove('active')
                }
                child[i].classList.add('active')
            }
        }
    }


