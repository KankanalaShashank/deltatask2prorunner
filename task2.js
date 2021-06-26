const canvas = document.getElementById("mycanvas")
const cvx = canvas.getContext("2d")
document.getElementById('startgame').addEventListener('click', () => {
    document.getElementById('startgame').style.display = "none"

    function reloadingpage() {
        window.location.reload()
    }


    cvx.width = innerWidth

    console.log(cvx)
    cvx.fillStyle = "red"
    cvx.fillRect(0, 30, cvx.width, 50)
    cvx.fillStyle = "pink"
    var y = 110
    cvx.fillRect(200, 110, 30, 30)
    console.log("ascac")

    document.getElementById("mycanvas").addEventListener("click", function(event) {
        cvx.clearRect(200, y, 30, 30)
        cvx.fillStyle = "pink"
        if (y == 110) {
            cvx.fillRect(200, 80, 30, 30)
            y = 80
        } else if (y == 80) {
            cvx.fillRect(200, 110, 30, 30)
            y = 110
        }
        console.log(y)
    })
    var counter = 0
    var uniqueid = setInterval(function() {
        document.getElementById("yourscore").innerText = "YOUR score :" + counter
        counter += 1
    }, 3000)
    document.getElementById("yourscore").innerText = "YOUR SCORE :" + counter

    function storagesectionandsiplay() {


        if (localStorage.getItem("users") == null) {
            localStorage.setItem("users", counter)
            var highscore = localStorage.getItem("users")
            document.getElementById("highscore").innerText = "BEST SCORE :" + highscore
        } else if (counter > localStorage.getItem("users")) {
            localStorage.setItem("users", counter)
            var highscore = localStorage.getItem("users")
            document.getElementById("highscore").innerText = "BEST SCORE :" + highscore

        } else {
            var highscore = localStorage.getItem("users")
            document.getElementById("highscore").innerText = "BEST SCORE :" + highscore

        }


        clearInterval(uniqueid)


    }



    function GetCordinates() {
        this.x1co = Math.round(Math.random() * 40)
        this.y1co = Math.round(Math.random() * innerWidth)
        this.x2co = Math.round(Math.random() * 600)
        if ((Math.abs(this.x1co - this.x2co)) < 50) {
            this.x2co += 300
        }
    }


    var dx = 3
    var dy = 3
    var dx2 = 3
    let animateid1
    let animateid2

    var removepart = new GetCordinates()
    console.log(removepart)
    window.voidx1 = (removepart.x1co)
    window.voidx2 = (removepart.x2co)

    function animate1() {
        var animateid1 = requestAnimationFrame(animate1)
        cvx.fillStyle = "red"
        cvx.fillRect(voidx1, 30, 40, 50)
        if (voidx1 > 880 || voidx1 < -100) {
            dx = -dx
        }
        voidx1 += dx
        cvx.clearRect(voidx1, 30, 40, 50)
        if (((voidx1 >= 198 && voidx1 <= 202) || (voidx1 >= 228 && voidx1 <= 232) || ((voidx1 + 10) >= 198 && (voidx1 + 10) <= 202)) && y == 80) {
            console.log("dwendk")
            cancelAnimationFrame(animateid1)
            let reload = document.createElement("button")
            reload.textContent = "RELOAD"
            document.getElementById("reloaddiv").appendChild(reload)
            reload.addEventListener("click", reloadingpage)
            storagesectionandsiplay()

        }

        cvx.fillStyle = "blue"
        cvx.fillRect(voidx2, 140, 40, 50)
        if (voidx2 > 850 || voidx2 < -60) {
            dx2 = -dx2
        }
        voidx2 += dx2
        cvx.clearRect(voidx2, 140, 40, 50)
        if (((voidx2 >= 198 && voidx2 <= 202) || (voidx2 >= 228 && voidx2 <= 231) || ((voidx2 + 10) >= 198 && (voidx2 + 10) <= 202)) && y == 110) {
            console.log("mjhbsa")
            cancelAnimationFrame(animateid1)
            let reload = document.createElement("button")
            reload.textContent = "RELOAD"
            document.getElementById("reloaddiv").appendChild(reload)
            reload.addEventListener("click", reloadingpage)
            storagesectionandsiplay()

        }

    }

    animate1()
    cvx.fillStyle = "blue"
    cvx.fillRect(0, 140, cvx.width, 50)
})