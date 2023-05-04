
const scriptURL = 'https://script.google.com/macros/s/AKfycbyv8n1Cc2tEkH_PBGrqrRhUQN-CNySezcAJPbNuQXBcgM7tdf93rNA2FSvEPCTf5wyE/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => { 
      msg.innerHTML="Message sent successfully"
    setTimeout(function(){
      msg.innerHTML = ""
    }, 5)
    form.reset()
  })
    .catch(error => console.error('Error!', error.message))
})
