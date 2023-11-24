// let player=new Audio(audio.mp3);
// player.play();



let click = document.getElementsByTagName("div")[0];
        click.addEventListener('click', function(){
            let player=new Audio('audio.mp3');
            player.play();
        })