import AccordionGroup from "./AccordionGroup.js";

const root = document.querySelector('#accordion-container')
root.innerHTML = 'loading accordions, have patient......';

function clearRoot(){
  root.innerHTML = ''
}

// function clickhandler(evt, id){
//   console.log('id=>', id, `.accordion.no-${id}`)
//   const targetAccordion = document.querySelector(`.accordion.no-${id}`)
//   console.log('targetAccordion=>', targetAccordion)
//   if(!targetAccordion || targetAccordion.length === 0){
//     alert('target not availbel')
//     return
//   }
//   const targetConentpannel = targetAccordion.nextElementSibling;
//   targetConentpannel.style.display = targetConentpannel.style.display === 'none' ? 'block' : 'none'
// }

// function createAccordion(title, content, id) {
//   const accordion = document.createElement('div')
//   accordion.classList.add(`accordion`)
//   accordion.classList.add(`no-${id}`)
//   accordion.innerHTML = `
//   <div class="header-pannel">
//     <div class="title"></div>
//     <div class="close">V</div>
//   </div>
//   `
//   const titleContainer = accordion.querySelector('.header-pannel .title')
//   titleContainer.innerHTML = title

//   const contentContainer = document.createElement('div')
//   contentContainer.classList.add('content-pannel')
//   contentContainer.style.display = 'none'
//   contentContainer.style.cursor = 'auto'
//   contentContainer.innerHTML = content

//   accordion.addEventListener('click', (e) => clickhandler(e, id))
//   return [accordion, contentContainer]
// }

fetch('https://jsonplaceholder.typicode.com/posts')
.then(r => r.json())
.then(r => {
  if(r && r.length > 0) {
    clearRoot()
    const ag = new AccordionGroup(root, r)
    ag.render()
    // r.forEach(post => {
    //   const [acc, cont] = createAccordion(post.title, post.body, post.id)
    //   root.append(acc)
    //   root.append(cont)
    // });
  }
})



