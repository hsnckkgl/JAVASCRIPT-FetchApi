document.getElementById("button1").addEventListener("click", getTextFile);
document.getElementById("button2").addEventListener("click", getJSON);
document.getElementById("button3").addEventListener("click", getApi);

function getTextFile(){
    fetch("textfile.txt").then(function(response){

        return response.text();
    }).then(function(data){
        document.getElementById("output").innerHTML += data;
    });
}

function getJSON(){
    fetch("article.json").then(function(response){

        return response.json();
    }).then(function(articles){

        let output = "<ul>";

        articles.forEach(function(article){
            output += `<li>Title ${article.title} - Body ${article.body}</li>`
        });
        
        document.getElementById("output").innerHTML += output;
    });
}
function getApi(){
    fetch("https://api.github.com/users").then(function(response){

        return response.json();
    }).then(function(users){
        
        let output = "<ul>";
        users.forEach(function(user){
            output += `<li>Users ${user.login}</li>`;
        });
        
        document.getElementById("output").innerHTML += output;
    });
}