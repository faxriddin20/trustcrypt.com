const form = document.querySelector("#form");
const checkbox = document.querySelector("#flexSwitchCheckDefault")
form.addEventListener("submit",(evt) => {
    evt.preventDefault();
    const firstValue = evt.target[0].value
    const secondtValue = evt.target[1].value
    const thirdValue = evt.target[2].value
    const fourthValue = evt.target[3].value

    if(firstValue, secondtValue, thirdValue, firstValue){
        const confitmation = confirm(`${firstValue} Your information has been successfully received`)
        setTimeout(()=> {
            document.location.reload()
        },300)
    }
})