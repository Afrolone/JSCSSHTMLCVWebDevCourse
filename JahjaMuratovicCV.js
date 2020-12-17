function display() {  
    alert("Hello World!");  
}

function hideOrShow() {
    if (document.getElementById('button1').innerHTML === 'Hide the image') {
        document.getElementById('profileImage').style.display='none';
        document.getElementById('button1').innerHTML = 'Show the image';
    } else {
        document.getElementById('profileImage').style.display='';
        document.getElementById('button1').innerHTML = 'Hide the image';
    } 
}

function openUpMyLocation(){
    url = "https://www.google.com/maps/place/43%C2%B054'41.0%22N+17%C2%B051'11.1%22E/@43.9113988,17.8508953,666m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d43.9113948!4d17.8530844";
    window.open(
        url,
        "_blank"
    );
}

function openUpMyGithub(){
    url = "https://github.com/Afrolone";
    window.open(
        url,
        "_blank"
    );
}