import { useState } from 'react'
import Modal from 'react-modal'
import './MyModal.css'
import TimerCustomization from './TimerCustomization'

const MyModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }


  function closeModal() {
    const modal = document.querySelector('.modal-content')
    modal.classList.add('disappear')
    modal.addEventListener('animationend', (animation) => {
      if(animation.animationName === 'disappear'){
        setIsOpen(false)
      }
    })
    
  }
  return (
    <div className="Container">
      <button onClick={openModal} className='modal-open-button'><i class="bi bi-gear-fill" ></i></button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        className="modal-content appear"
        ariaHideApp={false}
      >
        <h2>Timer configurations</h2>
        <hr />
        <TimerCustomization />
        <div className="buttons-area">
          <button onClick={closeModal} className="modal-close-button">
            Close
          </button>
          <button className='modal-save-button'>Save</button>
        </div>
      </Modal>
    </div>
  )
}

export default MyModal
