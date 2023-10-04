let workMain = document.getElementById("work-main")
let workSub = document.getElementById("work-sub")

let playMain = document.getElementById("paly-main")
let playSub = document.getElementById("play-sub")

let studyMain = document.getElementById("study-main")
let studySub = document.getElementById("study-sub")

let exerciseMain = document.getElementById("exercise-main")
let exerciseSub = document.getElementById("exercise-sub")

let socialMmain = document.getElementById("social-main")
let socialSub = document.getElementById("social-sub")

let selfMain = document.getElementById("self-main")
let selfSub = document.getElementById("self-sub")

let dailyHead = document.getElementById("dailyHead")
let weeklyHead = document.getElementById("weeklyHead")
let monthlyHead = document.getElementById("monthlyHead")

function daily() {
    dailyHead.classList.add("select")
    weeklyHead.classList.remove("select")
    monthlyHead.classList.remove("select")

    workMain.innerHTML = 5
    workSub.innerHTML = 7

    playMain.innerHTML = 1
    playSub.innerHTML = 2

    studyMain.innerHTML = 0
    studySub.innerHTML = 1

    exerciseMain.innerHTML = 1
    exerciseSub.innerHTML = 1

    socialMmain.innerHTML = 1
    socialSub.innerHTML = 3

    selfMain.innerHTML = 0
    selfSub.innerHTML = 1
}

function weekly() {

    weeklyHead.classList.add("select")
    dailyHead.classList.remove("select")
    monthlyHead.classList.remove("select")

    workMain.innerHTML = 32
    workSub.innerHTML = 36

    playMain.innerHTML = 10
    playSub.innerHTML = 8

    studyMain.innerHTML = 4
    studySub.innerHTML = 7

    exerciseMain.innerHTML = 4
    exerciseSub.innerHTML = 5

    socialMmain.innerHTML = 5
    socialSub.innerHTML = 10

    selfMain.innerHTML = 2
    selfSub.innerHTML = 2
}

function monthly() {

    monthlyHead.classList.add("select")
    weeklyHead.classList.remove("select")
    dailyHead.classList.remove("select")

    workMain.innerHTML = 103
    workSub.innerHTML = 128

    playMain.innerHTML = 103
    playSub.innerHTML = 128

    studyMain.innerHTML = 23
    studySub.innerHTML = 29

    exerciseMain.innerHTML = 13
    exerciseSub.innerHTML = 19

    socialMmain.innerHTML = 21
    socialSub.innerHTML = 23

    selfMain.innerHTML = 7
    selfSub.innerHTML = 11
}