const canvas = document.getElementById("mycanvas")
const cvx = canvas.getContext("2d")
var canvasbackstyle = document.getElementById("canvasbackstyle")
var backstyle = document.getElementById("firstpart")
var secondcontainer = document.getElementById("secondpart")
var startgamemusic=document.getElementById("rungame")
var endgamemusic=document.getElementById("stopgame")

document.getElementById('startgame').addEventListener('click', () => {
    startgamemusic.play()
    var booster = 0
    cvx.beginPath()
    cvx.rect(200, 250, 100, 20)
    cvx.strokeStyle = "#ffffff"
    cvx.stroke()
    cvx.fillStyle = "white"
    cvx.font = "30px Roboto"
    cvx.fillText("Boost Up : ", 30, 270)
    canvas.classList.add("secondcont-style");
    canvasbackstyle.style.display = "block"
    canvas.style.display = "block"
    document.getElementById('startgame').style.display = "none"
    backstyle.style.display = "none"

    function reloadingpage() {
        window.location.reload()
    }
    cvx.width = innerWidth;
    cvx.fillStyle = "red";
    cvx.fillRect(0, 30, 800, 50);
    var y = 170;
    var counter = 0
    var runscore = 0
    var uniqueid = setInterval(function() {
        counter += 2
        booster += 1
    }, 3000)

    function storagesectionandsiplay() {
        if (localStorage.getItem("users") == null) {
            localStorage.setItem("users", counter)
            var highscore = localStorage.getItem("users")
            cvx.fillStyle = "white"
            cvx.font = "30px Roboto"
            cvx.fillText("Yourscore : " + counter, 320, 500)
            cvx.fillText("Highest Score : " + highscore, 320, 550)
        } else if (counter > localStorage.getItem("users")) {
            localStorage.setItem("users", counter)
            highscore = localStorage.getItem("users")
            cvx.fillStyle = "white"
            cvx.font = "30px Roboto"
            cvx.fillText("Yourscore : " + counter, 320, 500)
            cvx.fillText("Highest Score : " + highscore, 320, 550)
        } else {
            highscore = localStorage.getItem("users");
            cvx.fillStyle = "white"
            cvx.font = "30px Roboto"
            cvx.fillText("Yourscore : " + counter, 320, 500)
            cvx.fillText("Highest Score : " + highscore, 320, 550)
        }
        clearInterval(uniqueid);
    }
    // console.log(y)
    var x = 200
    //to genrerate the hole coordinates randomly
    function GetCordinates() {
        this.x1co = Math.round(Math.random() * 1)
        this.y1co = Math.round(Math.random() * innerWidth)
        this.x2co = Math.round(Math.random() * 600)
        if ((Math.abs(this.x1co - this.x2co)) < 50) {
            this.x2co += 300
        }
    }
    // to move the triangle up and down
    window.addEventListener("click", function(event) {
        if (y == 170) {
            cvx.clearRect(200, 140, 30, 30)
            cvx.beginPath()
            cvx.moveTo(200, 80)
            cvx.lineTo(230, 80)
            cvx.lineTo(215, 110)
            cvx.fillStyle = "rgb(255, 192, 203)"
            cvx.fill()
            y = 80
            //console.log(y)
            //console.log("UP")

        } else if (y == 80) {
            cvx.clearRect(200, 80, 30, 30)
            cvx.beginPath()
            cvx.moveTo(200, 170)
            cvx.lineTo(230, 170)
            cvx.lineTo(215, 140)
            cvx.fillStyle = "rgb(255, 192, 203)"
            cvx.fill()
            y = 170
            //console.log("D")
        }
    })

    if (voidx1 >= 200 && voidx1 <= 230) {
        cvx.clearRect(200, 80, 30, 90)
    }
    var dx = 3
    var dy = 3
    var dx2 = 3
    var dxc = 1
    var circley = 120
    var circlex = 4
    var dy2 = 1
    var dx3 = 10
    var dy3 = 10
    let animateid1
    let animateid2
    var up = "false"
    var removepart = new GetCordinates()
    //console.log(removepart)
    var voidx1 = (removepart.x1co)
    var voidx2 = (removepart.x2co)
    var booster = 0
    var storage

    function animate1() {
        booster += 0.1
        cvx.fillStyle = "orange"
        cvx.fillRect(200, 250, booster, 20)
        console.log(booster)
        cvx.clearRect(0, 80, 200, 90)
        cvx.clearRect(230, 80, window.innerWidth, 90)
        if (booster >= 100) {
            storage = 100
            booster = 0
        }
        if (storage >= 0) {
            booster = 0
            storage = storage - 0.5
            cvx.clearRect(200, 250, 100, 20)
            cvx.clearRect(230, 80, window.innerWidth, 90)
            if (y == 170) {
                cvx.clearRect(200, 80, 30, 90)
                cvx.beginPath()
                cvx.moveTo(200, y)
                cvx.lineTo(230, y)
                cvx.lineTo(215, y - 30)
                cvx.fillStyle = "rgb(255, 192, 203)"
                cvx.fill()
            } else if (y == 80) {
                cvx.clearRect(200, 80, 30, 90)
                cvx.beginPath()
                cvx.moveTo(200, y)
                cvx.lineTo(230, y)
                cvx.lineTo(215, y + 30)
                cvx.fillStyle = "rgb(255, 192, 203)"
                cvx.fill()
            }
            var animateid1 = requestAnimationFrame(animate1)
            cvx.beginPath()
            circley += dy2
            if (circley + 10 >= 170 || circley - 10 <= 80) {
                dy2 = -dy2
                //console.log("down")
            }
            cvx.arc(circlex, circley, 10, 0, Math.PI * 2, false)
            cvx.fillStyle = "#aced7e"
            cvx.fill()
            cvx.fillStyle = "red"
            cvx.fillRect(voidx1, 30, 40, 50)
            if (voidx1 > 880 || voidx1 < -100) {
                dx3 = -dx3
                //console.log("runscore")
            }
            if (circlex > 880 || circlex < -100) {
                dxc = -dxc
            }

            circlex += dxc
            voidx1 += dx3

            cvx.clearRect(voidx1, 30, 40, 50)

            cvx.fillStyle = "blue"
            cvx.fillRect(voidx2, 170, 40, 50)
            if (voidx2 > 850 || voidx2 < -60) {
                dy3 = -dy3
            }
            voidx2 += dy3
            cvx.clearRect(voidx2, 170, 40, 50)


        } else {
            cvx.clearRect(0, 80, 200, 90)
            cvx.clearRect(230, 80, window.innerWidth, 90)
            if (y == 170) {
                cvx.clearRect(200, 80, 30, 90)
                cvx.beginPath()
                cvx.moveTo(200, y)
                cvx.lineTo(230, y)
                cvx.lineTo(215, y - 30)
                cvx.fillStyle = "rgb(255, 192, 203)"
                cvx.fill()
            } else if (y == 80) {
                cvx.clearRect(200, 80, 30, 90)
                cvx.beginPath()
                cvx.moveTo(200, y)
                cvx.lineTo(230, y)
                cvx.lineTo(215, y + 30)
                cvx.fillStyle = "rgb(255, 192, 203)"
                cvx.fill()
            }

            var animateid1 = requestAnimationFrame(animate1)
            cvx.beginPath()
            circley += dy2
            if (circley + 10 >= 170 || circley - 10 <= 80) {
                dy2 = -dy2
                //console.log("down")
            }
            cvx.arc(circlex, circley, 10, 0, Math.PI * 2, false)
            cvx.fillStyle = "#b4c3d6"
            cvx.fill()
            cvx.fillStyle = "red"
            cvx.fillRect(voidx1, 30, 40, 50)
            if (voidx1 > 880 || voidx1 < -100) {
                dx = -dx
                runscore += 20
                // console.log("runscore")
            }
            if (circlex > 880 || circlex < -100) {
                dxc = -dxc
            }

            circlex += dxc
            voidx1 += dx

            if (circlex <= 215 && circlex >= 200 && y == 170) {
                var a = Math.abs(((2 * circlex + circley - 570) / Math.sqrt(5)))
                if (a <= 10 && a >= 9.8) {
                    cancelAnimationFrame(animateid1)
                    let reload = document.createElement("button")
                    reload.textContent = "RELOAD"
                    document.getElementById("reloaddiv").style.display = "block"
                    document.getElementById("reloaddiv").appendChild(reload)
                    reload.addEventListener("click", reloadingpage)
                    storagesectionandsiplay()
                    startgamemusic.pause()
                    endgamemusic.play()
                }
                // console.log(a)
            }

            if (circlex <= 230 && circlex >= 215 && y == 170) {
                var b = Math.abs(((2 * circlex - circley - 290) / Math.sqrt(5)))
                if (b <= 10 && b >= 9.8) {
                    cancelAnimationFrame(animateid1)
                    let reload = document.createElement("button")
                    reload.textContent = "RELOAD"
                    document.getElementById("reloaddiv").style.display = "block"
                    document.getElementById("reloaddiv").appendChild(reload)
                    reload.addEventListener("click", reloadingpage)
                    storagesectionandsiplay()
                    startgamemusic.pause()
                    endgamemusic.play()
                }
                //console.log(b)
            }

            if (circlex <= 215 && circlex >= 200 && y == 80) {
                var c = Math.abs(((2 * circlex - circley - 320) / Math.sqrt(5)))
                if (c <= 10 && c >= 9.9) {
                    cancelAnimationFrame(animateid1)
                    let reload = document.createElement("button")
                    reload.textContent = "RELOAD"
                    document.getElementById("reloaddiv").style.display = "block"
                    document.getElementById("reloaddiv").appendChild(reload)
                    reload.addEventListener("click", reloadingpage)
                    storagesectionandsiplay()
                    startgamemusic.pause()
                    endgamemusic.play()
                }
                //console.log(c)
            }
            if (circlex <= 230 && circlex >= 215 && y == 80) {
                var d = Math.abs(((2 * circlex + circley - 540) / Math.sqrt(5)))
                if (d <= 10 && d >= 9.9) {
                    cancelAnimationFrame(animateid1)
                    let reload = document.createElement("button")
                    reload.textContent = "RELOAD"
                    document.getElementById("reloaddiv").style.display = "block"
                    document.getElementById("reloaddiv").appendChild(reload)
                    reload.addEventListener("click", reloadingpage)
                    storagesectionandsiplay()
                    startgamemusic.pause()
                    endgamemusic.play()
                }
                //console.log(d)
            }
            cvx.clearRect(voidx1, 30, 40, 50)
            if (((voidx1 >= 198 && voidx1 <= 202) || (voidx1 >= 228 && voidx1 <= 232) || ((voidx1 + 10) >= 198 && (voidx1 + 10) <= 202)) && y == 80) {
                //console.log("dwendk")
                cancelAnimationFrame(animateid1)
                let reload = document.createElement("button")
                reload.textContent = "RELOAD"
                document.getElementById("reloaddiv").style.display = "block"
                document.getElementById("reloaddiv").appendChild(reload)
                reload.addEventListener("click", reloadingpage)
                storagesectionandsiplay()
                startgamemusic.pause()
                endgamemusic.play()

            }
            cvx.fillStyle = "blue"
            cvx.fillRect(voidx2, 170, 40, 50)
            if (voidx2 > 850 || voidx2 < -60) {
                dx2 = -dx2
            }
            voidx2 += dx2
            cvx.clearRect(voidx2, 170, 40, 50)
            if (((voidx2 >= 198 && voidx2 <= 202) || (voidx2 >= 228 && voidx2 <= 231) || ((voidx2 + 10) >= 198 && (voidx2 + 10) <= 202)) && y == 170) {
                //console.log("mjhbsa")
                cancelAnimationFrame(animateid1)
                let reload = document.createElement("button")
                reload.textContent = "RELOAD"
                document.getElementById("reloaddiv").appendChild(reload)
                reload.addEventListener("click", reloadingpage)
                storagesectionandsiplay()
                startgamemusic.pause()
                endgamemusic.play()
            }
        }
    }
    animate1()
    cvx.fillStyle = "blue"
    cvx.fillRect(0, 170, 800, 50)
})