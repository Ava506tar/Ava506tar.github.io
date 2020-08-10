const sectionFlex = document.querySelector('.doc-flexbox')
const section = document.querySelector('.doc-section')
const sectionoff = document.querySelector('.off')

sectionFlex.addEventListener('click', () => {
    section.classList.toggle('true');
    sectionoff.classList.toggle('one');
});



