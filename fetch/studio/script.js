//TODO: Add Your Code Below
window.addEventListener("load", function () {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        jsonPromise = response.json();
        jsonPromise.then(function (json) {
            let container = document.getElementById("container");
            let astronautList = "";
            let hoursArray = [];

            for (let i = 0; i < json.length; i++){
                hoursArray.push(json[i].hoursInSpace)
            }
            hoursArray.sort((a,b) => b-a);
            console.log(hoursArray)

            for (let i = 0; i < json.length; i++) {

                astronautList += ` 
                <div class="astronaut">
                <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                    <li>Hours in Space: ${json[i].hoursInSpace}</li>
                    <li>Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills}</li>
                    </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                    </div>`
            }
            container.innerHTML = astronautList;
        })
    })
})