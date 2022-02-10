   (_ => {
        const form = document.querySelector('form')
        const generateFrase = () => {
            let frases = [
                'Usain Bolt',
                'La iguana tomaba café',
                'Petro presidente',
                'El pez nada'
            ]
            let frase = document.querySelector('.frase')
            let number = parseInt(Math.random() * 4)
            form.frase.value = frases[number]
            frase.innerText = frases[number]
        }
        generateFrase()
        form.addEventListener('submit', e => {
            e.preventDefault()

            if (form.validation.value !== form.frase.value) {
                form.validation.classList.add('is-invalid')
                let d = document.createElement('span')
                d.classList.add('invalid-feedback')
                d.innerHTML = `<strong>La frase no coincide</strong>`
                form.validation.parentElement.append(d)
            } else {
                form.submit()
            }
        })
    })()