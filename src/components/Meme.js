import memesData from '../memesData.js'
import React from 'react'

export default function Meme(){
  const [memeImage, setMemeImage]  = React.useState(''); 
  function getMemeImage(){
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }
  return(
    <main>
      <div className='form'>
        <input 
          type='text' 
          name='top-text' 
          className='form--input' 
          placeholder='top text' />
        <input 
          type='text' 
          name='bottom-text' 
          className='form--input' 
          placeholder='bottomtext' />
        <button 
          className='form--button'
          onClick={getMemeImage}
        >Get a new meme image</button>
      </div>
      <div className="meme">
        <img src={memeImage} alt='' className='meme--image'/>
      </div>
    </main>
  )
}