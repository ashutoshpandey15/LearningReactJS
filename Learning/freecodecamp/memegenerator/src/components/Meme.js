import React,{useState} from 'react'
import memesData from '../memesData'

export default function () {

const [memeImage, setMemeImage] = useState("https://i.imgflip.com/39t1o.jpg")
const [meme, setMeme] = useState({
  topText: "",
  bottomText:"",
  randomImage:"https://i.imgflip.com/39t1o.jpg"
})

const [allmemeimages, setAllMemeImages] = useState(memesData)



const getMemeImage= ()=>{

const memesArray= allmemeimages.data.memes
const randomNumber = Math.floor(Math.random()*memesArray.length)
const url =memesArray[randomNumber].url
setMeme(prevMeme =>({
  ...prevMeme,randomImage:url
}))

}



 return (
    <main>
        <div className='form'>
            <input type="text"
            placeholder='Top text'
            className='form-input' />
            <input type="text"
            placeholder='Bottom text'
            className='form-input' />
            <button className='form-button' onClick={getMemeImage} >Get a new meme image 
            
           
            
            </button>
        </div>
        <div className='image-div'>
        <img src={meme.randomImage} className='meme-image' />
        </div>
        
    </main>
  )
}

