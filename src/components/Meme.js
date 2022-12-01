import memesData from '../memesData.js'
import React from 'react'

export default function Meme(){
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage:'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function handleChange(event){
    const {name, value} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
    }
  

  function getMemeImage(){
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  }
  return(
    <main>
      <div className='form'>
        <input 
          type='text' 
          name='topText' 
          className='form--input' 
          placeholder='top text' 
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          type='text' 
          name='bottomText' 
          className='form--input' 
          placeholder='bottomtext' 
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button 
          className='form--button'
          onClick={getMemeImage}
        >Get a new meme image</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt={meme.randomImage}/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}