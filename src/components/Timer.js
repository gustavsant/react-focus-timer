import React, { useEffect, useState } from 'react'
import './Timer.css'
import configs from '../TimerConfigs.js'
import MyModal from './MyModal'

const Timer = () => {
  let focusTime = configs.focusMin
  let shortRestMin = configs.shortRestMin
  let longRestMin = configs.longRestMin

  const [timeInSeconds, setTimeInSeconds] = useState(focusTime)
  const [clockState, setClockState] = useState('pause')
  const [totalTime, setTotalTime] = useState(timeInSeconds)
  const minutes = Math.floor(timeInSeconds / 60)
  const seconds = timeInSeconds % 60

  const changeTime = (time) => {
    let willChange = window.confirm(
      'Fazer isso resetará o relógio, você tem certeza?'
    )
    if (willChange) {
      setTotalTime(time)
      document.querySelector('#progress').style.strokeDashoffset =
        1131 - (1131 * timeInSeconds) / totalTime
      setTimeInSeconds(time)
    } else {
      return
    }
  }

  useEffect(() => {
    console.log('tempo inteiro: ', totalTime)
  }, [totalTime])

  useEffect(() => {
    console.log(timeInSeconds)
    if (timeInSeconds === 0) {
      alert('tempo acabou')
      return
    } else {
      if (clockState !== 'pause') {
        setTimeout(() => {
          document.querySelector('#progress').style.strokeDashoffset =
            1131 - (1131 * timeInSeconds) / totalTime

          setTimeInSeconds(timeInSeconds - 1)
        }, 999)
      }
    }
  }, [timeInSeconds, clockState])

  const [statText, setStatText] = useState(
    <i class="bi bi-play-circle-fill"></i>
  )

  const handleClockStats = () => {
    if (clockState === 'resume') {
      setClockState('pause')
      setStatText(<i class="bi bi-play-circle-fill"></i>)
      document.querySelector('.timer-options').classList.remove('hidden')
    } else {
      setClockState('resume')
      document.querySelector('.timer-options').classList.add('hidden')
      setStatText(<i class="bi bi-pause-circle-fill"></i>)
    }
  }

  return (
    <div className="main-container">
      <h1>react focus timer</h1>
      <div className="options-container">
        <div className="timer-options">
          <span
            className="timer-opt"
            onClick={() => {
              changeTime(focusTime)
            }}
          >
            Focus time
          </span>
          <span
            className="timer-opt"
            onClick={() => {
              changeTime(shortRestMin)
            }}
          >
            Short rest
          </span>
          <span
            className="timer-opt"
            onClick={() => {
              changeTime(longRestMin)
            }}
          >
            Long rest
          </span>
        </div>
      </div>
      <div className="main-clock">
        <svg>
          <circle cx="180" cy="180" r="180"></circle>
          <circle
            id="progress"
            cx="180"
            cy="180"
            r="180"
            strokeLinecap="round"
          ></circle>
        </svg>
        <div className="inside-clock">
          <div className="time-left">
            <span>{minutes.toString().padStart(2, '0')}</span>
            <span>:</span>
            <span>{seconds.toString().padStart(2, '0')}</span> <br />
            <button onClick={handleClockStats}>{statText}</button>
          </div>
        </div>
        <MyModal />
      </div>
    </div>
  )
}

export default Timer
