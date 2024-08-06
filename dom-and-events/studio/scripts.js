// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    console.log("hello from the inside") //testing window load
    const missionAbort = document.getElementById("missionAbort");
    const landing = document.getElementById("landing");
    const takeoff = document.getElementById("takeoff");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const flightStatus = document.getElementById("flightStatus");
    const backgroundColor = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    const rocket = document.getElementById("rocket");
    const shuttleHeight = parseInt(spaceShuttleHeight.innerHTML)

    takeoff.addEventListener("click", function () {
        let confirmed = window.confirm("Confirm that the shuttle is ready for takeoff.")

        if (confirmed) {
            flightStatus.innerHTML = "Shuttle in flight";
            backgroundColor.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000;
            let currentTop = parseInt(getComputedStyle(rocket).top);
            rocket.style.top = currentTop - 10 + "px"
        }
    })

    landing.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        backgroundColor.style.backgroundColor = "green";
        let currentTop = parseInt(getComputedStyle(rocket).top);
        rocket.style.top = currentTop + parseInt(spaceShuttleHeight.innerHTML) / 1000 + "px";
        spaceShuttleHeight.innerHTML = 0;
    })
    missionAbort.addEventListener("click", function () {
        let confirmed = window.confirm("Confirm that you want to abort the mission.");
        if (confirmed) {
            flightStatus.innerHTML = "Mission aborted."
            backgroundColor.style.backgroundColor = "red";
            spaceShuttleHeight.innerHTML = 0;
        }
    })
    up.addEventListener("click", function () {
        let currentTop = parseInt(getComputedStyle(rocket).top);
        rocket.style.top = currentTop - 10 + "px"
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
    })
    down.addEventListener("click", function () {
        let currentBottom = parseInt(getComputedStyle(rocket).top);
        rocket.style.top = currentBottom + 10 + "px"
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
    })
    left.addEventListener("click", function () {
        let currentLeft = parseInt(getComputedStyle(rocket).left);
        rocket.style.left = currentLeft - 10 + "px"
    })
    right.addEventListener("click", function () {
        let currentRight = parseInt(getComputedStyle(rocket).right);
        rocket.style.right = currentRight - 10 + "px"
    })




});