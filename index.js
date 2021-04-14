

const audioClips = [
    {
        keyCode:81,
        keyTrigger: 'Q',
        id: 'Chord-1',
        url: './sounds/chord-1.mp3'
    }
    ,
    {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Chord-2',
        url: './sounds/chord-2.mp3'
    }
    ,
    {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Chord-3',
        url: './sounds/chord-3.mp3'
    }
    ,
    {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Chord-4',
        url: './sounds/chord-4.mp3'
    }
    ,
    {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'HiHat-1',
        url: './sounds/hihat-1.wav'
    }
    ,
    {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'HiHat-2',
        url: './sounds/hihat-2.wav'
    }
    ,
    {
        keyCode: 90,
        keyTrigger: 'Z',
        id: "Kick",
        url: './sounds/kick-1.wav'
      },
      {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Snare-1',
        url: './sounds/snare-1.wav'
      },
      {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Snare-2',
        url: './sounds/snare-2.wav'
      }
]
function App(){
    return (
       <div className="wrapper">
           <h2>L O - F I</h2>
           {audioClips.map((clip) => 
            <Pad clip={clip} key={clip.id}/>
            )}
       </div>
    )  
}

function Pad({clip}) {

  React.useEffect(() => {
      document.addEventListener('keydown',handleKeyPress) 
      return(()=>{
          document.removeEventListener('keydown',handleKeyPress)
      })
  })

  const handleKeyPress = (e) => {
   if(e.keyCode == clip.keyCode) {
       playSound();
   }
  }

  const playSound = () => {
  const audioTag = document.getElementById(clip.keyTrigger);
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