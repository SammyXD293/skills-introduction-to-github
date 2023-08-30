const SameerSelectorBtn = document.querySelector('#Sameer-selector')
const AydinSelectorBtn = document.querySelector('#Aydin-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('clear-chat-button')

const chatMessageElement = (message) => ` 
<div class="message ${message.sender === 'Sameer' ? 'blue-bg' : 'gray-bg'}">
    <div class="message-sender">${message.sender}</div>
<div class="message-text"${message.text}</div>
<div class="message-timestamp">${message.timestamp}</div>
</div>
`
let messageSender = 'Sameer'
const updateMessageSender = (name) => {
    messageSender = name
    chatHeader.innerText = ${messageSender}chatting...`
    chatInput.placeholder = `Type here, ${messageSender}`
if(name === 'Sameer'){
SameerSelectorBtn.classList.add('active-person')
AydinSelectorBtn.classList.remove('active-person')
 }
if(name === 'Aydin'){
AydinSelectorBtn.classList.add('active-person')
SameerSelectorBtn.classList.remove('active-person')
 }
}
SameerSelectorBtn.onclick = () => updateMessageSender('Sameer')
AydinSelectorBtn.onclick = () => updateMessageSender('Aydin')

const sendMessage = (e) => {
    e.preventDefault()
    
    const timstamp = new Date().toLocaleString('en-GB', {hour: 'numeric' minute: 'numeric', hour12: true })
    const message = {
        sender: '',
        text: chatInput.value,
        timestamp,
}
}

