// js file

let musics = [{
        music: './musics/music.mp3',
        title: "Ternary Opp"
    },
    {
        music: './musics/zack-1.mp3',
        title: "Loving me"
    },
    {
        music: './musics/zack-2.mp3',
        title: "Haters Gone"
    },
    {
        music: './musics/zack-3.mp3',
        title: "National Som"
    },
    {
        music: './musics/Tribal East.mp3',
        title: "Tribal East"
    },
    {
        music: './musics/Trollz.mp3',
        title: "Trollz -6ix9"
    },
    {
        music: 'Wewanv.mp3',
        title: "Grey Heart -Mon"
    },
    {
        music: './musics/wegs.mp3',
        title: "Wegz Nourani"
    },
    {
        music: './musics/Mortals.mp3',
        title: "Mortals"
    },
    {
        music: './musics/m.mp3',
        title: "Great Humanity"
    }
]


btn = document.getElementById('btn')
music_title = document.getElementById('music-title')
music = document.getElementById('mp3')





btn.addEventListener('click', next)

let audio = new Audio();


function next() {

    let random = Math.floor(Math.random() * musics.length);
    music_title.innerHTML = musics[random].title
    music.src = `${musics[random].music}`
}