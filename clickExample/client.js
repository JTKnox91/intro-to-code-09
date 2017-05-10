var contentDiv = document.getElementById('content-div');
var btn = document.getElementById('btn');
btn.addEventListener('click',changeDiv);



function changeDiv(){
    contentDiv.innerHTML = "<h2>This is STILL a div</h2><p>...but it has new content now.</p>";
}

