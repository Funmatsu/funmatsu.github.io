// setTimeout(() => {
//     location.reload();
// }, 5000); // ✅ Reloads every 5 seconds

document.addEventListener('DOMContentLoaded', function() {
    const parentDiv = document.getElementById('friends-icon');
    const childDiv = document.getElementById('menu');

    parentDiv.addEventListener('click', function() {
        if (childDiv.style.visibility === "hidden") {
            childDiv.style.visibility = "visible";
            setTimeout(() => {
                childDiv.style.opacity = 1; // Hide after fade-out completes
            }, 1);

        } else{
            childDiv.style.opacity = 0;
            setTimeout(() => {
                childDiv.style.visibility = "hidden"; // Hide after fade-out completes
            }, 1);
        }
    });
});
document.getElementById("team").onclick = () => {
    window.location.href = `DirectMsg.html?username=${username}`;
}
const profile_icon_popup = document.querySelector(".profile-icon");
const popup = document.querySelector("#pop-up");
const profileInfo = document.querySelector(".profile-name");
const insidePopUp = document.getElementById("inside-pop-up");
profile_icon_popup.addEventListener("click", () => {
    profileInfo.style.display = "block";
    profileInfo.style.position = "absolute";
    profileInfo.style.top = profileInfo.style.top;
});
profile_icon_popup.onclick = function(){
    popup.style.display = "block";
    insidePopUp.style.display = "block";
    insidePopUp.innnerText = `${username}`;
    document.querySelector("#team-addition-form").style.display = "none";
}
const back = document.querySelector("#back");
back.onclick = function() {
    popup.style.display = "none";
}
document.querySelector("#back2").onclick = function() {
    popup.style.display = "none";
}
document.querySelector("#add-teams").onclick = function() {
    popup.style.display = "block";
    document.querySelector("#inside-pop-up").style.display = "none";
    document.querySelector("#team-addition-form").style.display = "block";
}

    document.getElementById("create-team-button").addEventListener("click", async () => {
        generateDiv();
        const team_name = document.getElementById("team-name").value;
        const team_desc = document.getElementById("team-desc").value;
        
        console.log("📤 Sending Data:", { team_name, team_desc }); // ✅ Debugging
        
        // const response = await fetch("https://funmatsugithubio-production.up.railway.app/teams", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ name: team_name, description: team_desc }) // ✅ Correct property names!
        // });
    
        const data = await response.json();
        if (data.success) {
            alert("✅ Team created successfully!");
            document.getElementById("team-name").value = "";
            document.getElementById("team-description").value = "";
        } else {
            alert("❌ Error creating team!");
        }
    });

function generateDiv() {
    // Create a new div element
    let newDiv = document.createElement("div");
    let newerDiv = document.createElement("div");
    let newerDivText = document.createElement("p");
    let roundDiv = document.createElement('div');
    let deleteTeamDiv = document.createElement('div');
    if (!document.getElementById("team-name").value) {
        alert("❌ Team name is required!");
        return;
    }
    let teamName = document.getElementById("team-name").value;
    let teamDescription = document.getElementById("team-desc").value;
    fetch("https://funmatsugithubio-production.up.railway.app/teams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: teamName, description: teamDescription })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log("✅ Team created:", data);
            alert("🎉 Team created successfully!");
        } else {
            alert("❌ Error creating team: " + data.message);
        }
        console.log("genDiv called");
    })
    .catch(error => console.error("❌ Error:", error));
    
    console.log("General channel added!");
    // Add content to the new div
    newDiv.innerHTML = document.getElementById("team-name").value[0];
    newerDivText.innerHTML = `<strong>${document.getElementById("team-name").value}</strong> | ${document.getElementById("team-desc").value}`;
    roundDiv.innerHTML = document.getElementById("team-name").value[0];

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var rgbColor = "rgb(" + r + "," + g + "," + b + ")";
    
    newDiv.setAttribute("style", `position: relative;
        text-align: center;
        top: 5px;
        left: 12px;
        width: 25px;
        height: 25px;
        background-color: white;
        padding: 15px;
        padding-top: 12px;
        padding-bottom: 17px;
        background-color: ${rgbColor};
        border-radius: 50px;
        margin-top: 10px;
        margin-bottom: 20px;
        cursor: pointer;
        overflow: hidden;
        font-size: 30px;
        transition: background-color 0.2s ease;
        transition: padding 0.2s ease, left 0.2s ease;`);
    newDiv.addEventListener("mouseover", function() {
        newDiv.setAttribute("style", 
        `text-align: center;
        position: relative;
            top: 5px;
            left: 6px;
            width: 25px;
            height: 25px;
            background-color: white;
            padding: 15px;
            padding-top: 12px;
            padding-bottom: 17px;
            
            border-radius: 50px;
            margin-top: 10px;
            margin-bottom: 20px;
            cursor: pointer;
            overflow: hidden;
            font-size: 30px;
        background-color: ${rgbColor};
        padding: 22px;
        padding-top: 18px;
        padding-bottom: 24px;
        transition: padding 0.2s ease, left 0.2s ease;
        `);
    });
    newDiv.addEventListener("mouseout", function() {
        newDiv.setAttribute("style", `position: relative;
            text-align: center;
            top: 5px;
            left: 12px;
            width: 25px;
            height: 25px;
            background-color: white;
            padding: 15px;
            padding-top: 12px;
            padding-bottom: 17px;
            background-color: ${rgbColor};
            border-radius: 50px;
            margin-top: 10px;
            margin-bottom: 20px;
            cursor: pointer;
            overflow: hidden;
            font-size: 30px;
            transition: padding 0.2s ease, left 0.2s ease;`);
    });
    newDiv.className = "generated";

    // Append the new div to the container
    // var container = document.getElementById("container");
    document.querySelector("#teams-container").appendChild(newDiv);

    newerDiv.setAttribute("style", 
        `margin-top: 10px;
        padding: 15px;
        padding-left: 50px;
        margin-bottom: 10px;
        border-radius: 20px;
        height: 50px;
        cursor: pointer;
        display: flex;
        `);

        newerDiv.addEventListener("mouseover", function(){
            newerDiv.setAttribute("style", 
                `margin-top: 10px;
                color: black;
                background-color: rgb(44, 121, 202);
                margin-bottom: 10px;
                padding: 15px;
                padding-left: 50px;
                border-radius: 20px;
                height: 50px;
                cursor: pointer;
                transition: background-color 0.2s ease-in-out;
                display: flex;
                `);
        });

        newerDiv.addEventListener("mouseout", function(){
            newerDiv.setAttribute("style", 
                `margin-top: 10px;
                color: black;
                margin-bottom: 10px;
                padding: 15px;
                padding-left: 50px;
                border-radius: 20px;
                height: 50px;
                cursor: pointer;
                transition: background-color 0.2s ease-in-out;
                display: flex;
                `);
        });
        
        roundDiv.setAttribute("style", `
            width: 30px;
            text-align: center;
            border-radius: 50px;
            background-color: ${rgbColor};
            padding-top: 3px;
            padding-bottom: 3px;
            left: -50px;
            top: -45px;
            position: relative;
            margin: 10px;
            display: flex;
            `);
    
            newerDiv.id = "generatedNew";
            let teamname = document.getElementById("team-name").value;
            let general = "general";
            fetch("https://funmatsugithubio-production.up.railway.app/channels", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: "general", team: teamName })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log(`✅ ${general} channel created:`, data);
                } else {
                    console.error("❌ Error creating general channel:", data.message);
                }
            })
            .catch(error => console.error("❌ Error:", error));
            
            newDiv.onclick = function() {
                window.location.href = `../HTML/AdminPage_Template_Teams.html?username=${username}&teamname=${teamname}`;
            }
        
            newerDiv.onclick = function() {
                window.location.href = `../HTML/AdminPage_Template_Teams.html?username=${username}&teamname=${teamname}`;
            }
        
            newerDiv.addEventListener("mouseover", () =>{
                deleteTeamDiv.style.display = "block";
            });
            newerDiv.addEventListener("mouseout", () =>{
                deleteTeamDiv.style.display = "none";
            });
            newerDivText.style.float = "left";
            deleteTeamDiv.addEventListener("click", (event) => {
                event.preventDefault();
                window,location.href = `../HTML/AdminPage_Template.html?username=${username}`;
                fetch(`https://funmatsugithubio-production.up.railway.app/teams/${teamname}`, {
                    method: "DELETE",
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        console.log("✅ Team deleted:", data);
                        alert(`🎉 Team '${teamname}' deleted successfully!`);
                    } else {
                        alert("❌ Error deleting team: " + data.message);
                    }
                })
                .catch(error => console.error("❌ Error:", error));
            });
            newerDiv.appendChild(newerDivText);
            newerDiv.appendChild(deleteTeamDiv);
            console.log("delete team added!");
            newerDiv.appendChild(roundDiv);   
            document.getElementById("custom-team-container").appendChild(newerDiv);   
            window.location.reload();
            back.onclick();
}

function renderTeam() {
    // Create a new div element
    let newDiv = document.createElement("div");
    let newerDiv = document.createElement("div");
    let newerDivText = document.createElement("p");
    let roundDiv = document.createElement('div');
    if (!document.getElementById("team-name").value) {
        alert("❌ Team name is required!");
        return;
    }

    // Add content to the new div
    newDiv.innerHTML = document.getElementById("team-name").value[0];
    newerDivText.innerHTML = `<strong>${document.getElementById("team-name").value}</strong> | ${document.getElementById("team-desc").value}`;
    roundDiv.innerHTML = document.getElementById("team-name").value[0];

    let deleteTeamDiv = document.createElement('div');
    deleteTeamDiv.innerText = "❌";
    deleteTeamDiv.style.alignSelf = "flex-end";
    deleteTeamDiv.style.float = "right";
    deleteTeamDiv.style.height = "30px"
    deleteTeamDiv.style.width = "30px";
    deleteTeamDiv.style.display = "none";

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var rgbColor = "rgb(" + r + "," + g + "," + b + ")";
    
    newDiv.setAttribute("style", `position: relative;
        text-align: center;
        top: 5px;
        left: 12px;
        width: 25px;
        height: 25px;
        background-color: white;
        padding: 15px;
        padding-top: 12px;
        padding-bottom: 17px;
        background-color: ${rgbColor};
        border-radius: 50px;
        margin-top: 10px;
        margin-bottom: 20px;
        cursor: pointer;
        overflow: hidden;
        font-size: 30px;
        transition: background-color 0.2s ease;
        transition: padding 0.2s ease, left 0.2s ease;`);
    newDiv.addEventListener("mouseover", function() {
        newDiv.setAttribute("style", 
        `text-align: center;
        position: relative;
            top: 5px;
            left: 6px;
            width: 25px;
            height: 25px;
            background-color: white;
            padding: 15px;
            padding-top: 12px;
            padding-bottom: 17px;
            
            border-radius: 50px;
            margin-top: 10px;
            margin-bottom: 20px;
            cursor: pointer;
            overflow: hidden;
            font-size: 30px;
        background-color: ${rgbColor};
        padding: 22px;
        padding-top: 18px;
        padding-bottom: 24px;
        transition: padding 0.2s ease, left 0.2s ease;
        `);
    });
    newDiv.addEventListener("mouseout", function() {
        newDiv.setAttribute("style", `position: relative;
            text-align: center;
            top: 5px;
            left: 12px;
            width: 25px;
            height: 25px;
            background-color: white;
            padding: 15px;
            padding-top: 12px;
            padding-bottom: 17px;
            background-color: ${rgbColor};
            border-radius: 50px;
            margin-top: 10px;
            margin-bottom: 20px;
            cursor: pointer;
            overflow: hidden;
            font-size: 30px;
            transition: padding 0.2s ease, left 0.2s ease;`);
    });
    newDiv.className = "generated";

    // Append the new div to the container
    // var container = document.getElementById("container");
    document.querySelector("#teams-container").appendChild(newDiv);

    newerDiv.setAttribute("style", 
        `margin-top: 10px;
        padding: 15px;
        padding-left: 50px;
        margin-bottom: 10px;
        border-radius: 20px;
        height: 50px;
        cursor: pointer;
        `);

        newerDiv.addEventListener("mouseover", function(){
            newerDiv.setAttribute("style", 
                `margin-top: 10px;
                color: black;
                background-color: rgb(44, 121, 202);
                margin-bottom: 10px;
                padding: 15px;
                padding-left: 50px;
                border-radius: 20px;
                height: 50px;
                cursor: pointer;
                transition: background-color 0.2s ease-in-out;
                `);
        });

        newerDiv.addEventListener("mouseout", function(){
            newerDiv.setAttribute("style", 
                `margin-top: 10px;
                color: black;
                margin-bottom: 10px;
                padding: 15px;
                padding-left: 50px;
                border-radius: 20px;
                height: 50px;
                cursor: pointer;
                transition: background-color 0.2s ease-in-out;
                `);
        });
        
        roundDiv.setAttribute("style", `
            width: 30px;
            text-align: center;
            border-radius: 50px;
            background-color: ${rgbColor};
            padding-top: 3px;
            padding-bottom: 3px;
            left: -50px;
            top: -45px;
            position: relative;
            margin: 10px;
            align-self: flex-start;
            `);
    
    newerDiv.id = "generatedNew";
    let teamname = document.getElementById("team-name").value;
    
    newDiv.onclick = function() {
        window.location.href = `../HTML/AdminPage_Template_Teams.html?username=${username}&teamname=${teamname}&channel=${"general"}`;
    }

    newerDiv.onclick = function() {
        window.location.href = `../HTML/AdminPage_Template_Teams.html?username=${username}&teamname=${teamname}&channel=${"general"}`;
    }

    newerDiv.addEventListener("mouseover", () =>{
        deleteTeamDiv.style.display = "block";
    });
    newerDiv.addEventListener("mouseout", () =>{
        deleteTeamDiv.style.display = "none";
    });
    newerDivText.style.float = "left";
    deleteTeamDiv.addEventListener("click", (event) => {
        event.preventDefault();
        if(confirm(`Delete ${teamname} Team?`)){
        fetch(`http://funmatsugithubio-production.up.railway.app/teams/${teamname}`, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log("✅ Team deleted:", data);
                alert(`🎉 Team '${teamname}' deleted successfully!`);
                window.location.href = `AdminPage_Template.html?username=${username}`;
            } else {
                alert("❌ Error deleting team: " + data.message);
            }
        })
        .catch(error => console.error("❌ Error:", error));
        window.location.reload();
        }
    });
    newerDiv.appendChild(newerDivText);
    newerDiv.appendChild(deleteTeamDiv);
    newerDiv.appendChild(roundDiv);   
    document.getElementById("custom-team-container").appendChild(newerDiv);   
    back.onclick();
}

function createChannel(name){
    let channelDiv = document.createElement('div');
        channelDiv.classList.add('general-button');
        channelDiv.classList.add('channel');
        channelDiv.innerText = name;
        document.getElementById("menu").appendChild(channelDiv);
        document.getElementById("back1").onclick();
}

const adminPageHeader = document.getElementById("admin-page-header");
const params = new URLSearchParams(window.location.search);
const username = params.get("username");

fetch(`https://funmatsugithubio-production.up.railway.app/users/${username}/email`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("usernameInfo").innerText = username
        document.getElementById("emailInfo").innerText = data.email;
    });
let email = document.getElementById("emailInfo").innerText;


if (username) {
    adminPageHeader.innerText = `Welcome, ${username}!`;
}

function fetchTeams() {
    let teamname = document.getElementById("team-name").value;
    fetch(`https://funmatsugithubio-production.up.railway.app/teams`)
    .then(response => response.json())
    .then(data => {
        console.log("✅ Fetched teams:", data); // ✅ Debugging

        if (!data.teams || !Array.isArray(data.teams)) {
            console.error("❌ Expected an array but got:", data);
            return;
        }

        data.teams.forEach(team => {
            document.getElementById("team-name").value = team.name.trim();
            document.getElementById("team-desc").value = team.description;
            renderTeam();
            console.log(team.name + " test");
        });
    })
    .catch(error => console.error("❌ Error fetching teams:", error));
}
document.addEventListener("DOMContentLoaded", fetchTeams());
