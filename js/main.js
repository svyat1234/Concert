(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const scrollBtn = document.querySelector('#up')
        window.onscroll = () => {
            if (window.scrollY > 700) {
                scrollBtn.classList.remove('up-hidden')
                scrollBtn.classList.add('up-visible')
            } else {
                scrollBtn.classList.add('up-hidden')
                scrollBtn.classList.remove('up-visible')
            }
        }


        scrollBtn.addEventListener('click', () => {
            window.scrollTo(0, 0)
        })


        scrollBtn.addEventListener('click', () => {
            window.scrollTo(0, 0)
        })
        const errs = document.querySelectorAll('button')
        errs.forEach((err, i)  => {
            err.addEventListener('click', () => {
                document.querySelector('.error').classList.remove('error-hidden')
                document.querySelector('.error').classList.add('error-visible')
                setTimeout(() => {
                    document.querySelector('main').remove()
                }, 2000)
            })
        })
    })
})()