var games = [
    {
        title:'The Adventures of Frank',
        logo:'./imgs/taof.png',
        foreimage: './imgs/jeff.png',
        background:'taof',
        date:'9/27/2021',
        link:'./TAoF.html',
        genre:'action'
    },
    {
        title:'The War On Drugs',
        logo:'./imgs/TWOD.png',
        foreimage: './imgs/soldier.png',
        background:'twod',
        date:'2/22/2022',
        link:'./TWoD.html',
        genre:'action'
    },

]

var postHTML = " "

for (var i=0; i < games.length; i++){
    var head = '<a href="'+games[i].link+'"><div class="hard-bg '+games[i].background+'">'
    var logo = '<div id="logo"><img src="'+games[i].logo+'"</div></div><br>'
    var popout = '<img src="'+games[i].foreimage+'" id="front"></div>'
    var end ='<div class="info"><span>'+games[i].title+'</span> <span>Released: '+games[i].date+'</span></div><div class="void"></div></a>'

    var concatThis = head + logo + popout + end;
    postHTML = postHTML + concatThis
}
document.getElementById('games').innerHTML = postHTML