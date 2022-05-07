var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
}


var fetchResponse = function(){
    let photo = document.getElementById("anime").files[0];
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.trace.moe/search?anilistInfo");
    xhr.setRequestHeader("Content-Type", "image/jpeg");
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);
        const videoLink = data['result'][0]['video'];
        const aniname = data['result'][0]['anilist']['title']['english'];
        console.log(videoLink, aniname)
        var name = document.getElementById('animename');
	    name.innerHTML = aniname;
        var video = document.getElementById('video');
	    video.href = videoLink;
    };
    xhr.send(photo);
}
