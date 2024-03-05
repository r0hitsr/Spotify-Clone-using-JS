console.log("Welcome to spotify");

//initialize the elemnent
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let SongItem = Array.from(document.getElementsByClassName('SongItem'));
let songs = [
    { songName: 'menmory reboot', filePath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songName: 'teri bao m esa uljha', filePath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songName: 'shyad mujhe', filePath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songName: 'tere bin', filePath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songName: 'shyad tumhe', filePath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songName: 'kal ho naho', filePath: "songs/4.mp3", coverpath: "covers/6.jpg" },
    { songName: 'mere khyalo me', filePath: "songs/5.mp3", coverpath: "covers/7.jpg" },
    { songName: 'love aj kal', filePath: "songs/2.mp3", coverpath: "covers/8.png" },
    { songName: 'tu na meri no', filePath: "songs/2.mp3", coverpath: "covers/9.jpg" },
    { songName: 'ku tujhe', filePath: "songs/1.mp3", coverpath: "covers/10.jpg" },
]
SongItem.forEach((element, i) => {    
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seekbar
    Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(Progress);
    myProgressBar.value = Progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlay = () => {

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex +1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})