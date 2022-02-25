function addNewPhone(){
    const phoneForm = document.querySelector("form#phones")
    // IREMOS CLONAR O FILHO DO QUERY SELECTOR
    const newPhone = phoneForm.children[0].cloneNode(true)
    // IREMOS PEGAR A POSIÇÃO DO MEU TELEFONE
    const phonePosition = phoneForm.children.length + 1 
    // ALTERANDO O LABEL DO ELEMENTO
    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ": "
    // ACRESCENTAR O NOVO ELEMENTO PARA O FORMULARIO
    phoneForm.appendChild(newPhone)
    console.log(phoneForm.children)
}

function printPhones(){
    let message = ""
    const phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phone, index) => {
        message += "Telefone " + (index + 1) + ": " + phone.value + "\n"
    })
    alert(message)
}