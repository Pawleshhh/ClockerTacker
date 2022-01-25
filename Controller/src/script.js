function loadData()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        document.getElementById("result").innerHTML = this.response;
    };
    xhttp.open("GET", "./LogicScripts/getGroups.php?id=47", true);
    xhttp.send();
}

function createGroup()
{
    var name = document.getElementById("input").innerHTML;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        document.getElementById("result").innerHTML = this.response;
    };
    xhttp.open("GET", "./LogicScripts/createGroup.php?id=47&name=" + name, true);
    xhttp.send();
}

function addUserToGroup()
{
    var userId = document.getElementById("input").innerHTML;
    var groupId = document.getElementById("input").innerHTML;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        document.getElementById("result").innerHTML = this.response;
    };
    xhttp.open("GET", "./LogicScripts/addUserToGroup.php?userid=" + userId + "&groupid=" + groupId, true);
    xhttp.send();
}

function addProject()
{
    var groupId = 34;
    var name = "SuperProjekt";
    var desc = "najlepszy projekt na świecie";
    var clientId = 31;
    var start = "2022-01-27 23:13:00";
    var stop = "2022-01-28 11:20:11";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        document.getElementById("result").innerHTML = this.response;
    };
    xhttp.open("GET", "./LogicScripts/addProject.php?groupid=" + groupId
        + "&name=" + name
        + "&desc=" + desc
        + "&clientid=" + clientId
        + "&start=" + start
        + "&stop=" + stop, true);
    xhttp.send()
}

function startProject()
{
    var projectId = 27;
    var start = "2022-01-27 23:13:00";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        document.getElementById("result").innerHTML = this.response;
    };
    xhttp.open("GET", "./LogicScripts/startProject.php?projectid=" + projectId
        + "&start=" + start, true);
    xhttp.send()
}

function stopProject()
{
    var projectId = 27;
    var stop = "2022-01-28 11:20:11";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        document.getElementById("result").innerHTML = this.response;
    };
    xhttp.open("GET", "./LogicScripts/stopProject.php?projectid=" + projectId
        + "&stop=" + stop, true);
    xhttp.send()
}

function addEntry()
{
    var projectId= 27;
    var desc = "Zaczynamy projekt!";
    var userid = 47;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        document.getElementById("result").innerHTML = this.response;
    };
    xhttp.open("GET", "./LogicScripts/addEntry.php?projectid=" + projectId
        + "&desc=" + desc
        + "&userid=" + userid, true);
    xhttp.send()
}