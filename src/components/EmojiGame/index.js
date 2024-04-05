/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    score: 0,
    bestScore: 0,
    displayEmojis: true,
    time: 30
  }

  // finishGameAndDisplayView = score => <WinOrLoseCard score={score} />

  onClickPlayAgain = () => {
    this.setState({
      score: 0,
      clickedEmojis: []
    })
    this.setState(prevState => ({
      displayEmojis: !prevState.displayEmojis,
    }))
  }

  onClickedEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojis, score, bestScore} = this.state;
    const checkEmoji = clickedEmojis.includes(id)
    if (checkEmoji) {
      clearInterval(this.interval);
      document.getElementById("start").className='start-btn';
      this.setState(prevState => ({
        displayEmojis: !prevState.displayEmojis,
      }))
      if (clickedEmojis.length < emojisList.length) {
        if (clickedEmojis.length > bestScore) {
          localStorage.removeItem("topScore");
          localStorage.setItem("topScore",JSON.stringify(clickedEmojis.length));
          this.setState({
            bestScore: clickedEmojis.length,
          })
        }
      }
      this.setState({
        clickedEmojis: [],
      })
    } else {
      if(score === emojisList.length-1){
        clearInterval(this.interval);
        document.getElementById("start").className='start-btn';
        this.setState((prevState) => ({
          displayEmojis: !prevState.displayEmojis
        }))
        localStorage.removeItem("topScore");
        localStorage.setItem("topScore",JSON.stringify(emojisList.length));
        this.setState({
          clickedEmojis: [],
          bestScore: emojisList.length
        })
      }
      if (score < emojisList.length) {
        this.setState(prevState => ({
          score: prevState.score + 1,
        }))
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  timer = ()=> {
    document.getElementsByClassName('display-emojis-list')[0].style.display='flex';
    document.getElementById("start").className='timer-btn';
    const {emojisList} = this.props
    const {clickedEmojis, score, bestScore} = this.state;
    let count=30;
    document.getElementById('start').innerHTML=count;
    this.interval = setInterval(()=>{
      count = count - 1;
      document.getElementById('start').innerHTML=count;
      if(count==0){
        clearInterval(this.interval);
        document.getElementById("start").className='start-btn';
        this.setState(prevState => ({
          displayEmojis: !prevState.displayEmojis,
        }))
        if (clickedEmojis.length < emojisList.length) {
          if (clickedEmojis.length > bestScore) {
            this.setState({
              bestScore: clickedEmojis.length,
            })
          }
        }
        this.setState({
          clickedEmojis: [],
        })
      }
    },1000);
  }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const {score, bestScore, displayEmojis} = this.state
    const emojisList = shuffledEmojisList()
    const emojiDisplay = displayEmojis
      ? 'display-emojis-list'
      : 'dont-display-emojis-list'
    let mainDisplay
    if (displayEmojis === true) {
      mainDisplay = (
        <>
          {' '}
          <NavBar score={score} bestScore={bestScore} />
          <div className="bg-containers">
            <ul className={emojiDisplay}>
              {emojisList.map(emoji => (
                <EmojiCard
                  key={emoji.id}
                  id={emoji.id}
                  emojiName={emoji.emojiName}
                  emojiUrl={emoji.emojiUrl}
                  onClickedEmoji={this.onClickedEmoji}
                />
              ))}
            </ul>
            <button className='start-btn' id='start' onClick={this.timer}><b>Start</b></button>
          </div>

        </>
      )
    } else {
      mainDisplay = (
        <WinOrLoseCard score={score} onClickPlayAgain={this.onClickPlayAgain} />
      )
    }
    return <>{mainDisplay}</>
  }
}
export default EmojiGame