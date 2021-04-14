const audioClips = [
    {
        keyCode:81,
        keyTrigger: 'Q',
        id: 'Chord-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    }
]
function App(){
    return (
       <div className="wrapper">
           <h2>LO-FI Drum Machine</h2>
           {audioClips.map(clip => 
            <Pad clip={clip} key={clip.id}/>
            )}
       </div>
    )  
}

function Pad({clip}) {
  const playSound = () => {
  const audioTag = document.getElementById('clip.keyTrigger');
  audioTag.currentTime = 0;
  audioTag.play();
    }

  return(
      <div className="button" onClick={playSound}>
          <audio id={clip.keyTrigger} src={clip.url}/>
          {clip.keyTrigger}
      </div>
  )
}

ReactDOM.render(<App /> , document.getElementById('root'))