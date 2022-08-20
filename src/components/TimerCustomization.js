import configs from '../TimerConfigs.js'
import './TimerCustomization.css'
import React, { useState } from 'react'

const TimerCustomization = () => {
  const [focusTime, setFocusTime] = useState(configs.focusMin / 60)
  const [shortRest, setShortRest] = useState(configs.shortRestMin / 60)
  const [longRest, setLongRest] = useState(configs.longRestMin / 60)

  return (
    <div className="configs-container">
      <form className="configs-box">
        <div className="config focus">
          <span>Focus Time</span>
          <input
            type="number"
            className="input focus"
            value={focusTime}
            onChange={(e) => {
              setFocusTime(e.target.value)
            }}
          />
        </div>
        <div className="config short">
          <span>Short Rest</span>
          <input
            type="number"
            className="input short"
            value={shortRest}
            onChange={(e) => {
              setShortRest(e.target.value)
            }}
          />
        </div>
        <div className="config long">
          <span>Long Rest</span>
          <input
            type="number"
            className="input long"
            value={longRest}
            onChange={(e) => {
              setLongRest(e.target.value)
            }}
          />
        </div>
      </form>
    </div>
  )
}

export default TimerCustomization
