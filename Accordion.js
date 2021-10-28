export default class Accordion {
  constructor(accObj){
    this.data = accObj
    this.accordion = document.createElement('div')
    this.accordion.classList.add('accordion')

    this.accordion.innerHTML = `
    <div class="header-pannel">
      <div class="title"></div>
      <div class="close">V</div>
    </div>
    `
    this.titleContainer = this.accordion.querySelector('.header-pannel .title')
    this.titleContainer.innerHTML = this.data.title

    this.contentContainer = document.createElement('div')
    this.contentContainer.classList.add('content-pannel')
    this.contentContainer.style.display = 'none'
    this.contentContainer.style.cursor = 'auto'
    this.contentContainer.innerHTML = this.data.body
  }

  toggleContent(){
    if(this.nextElementSibling.style.display === 'none'){
      this.nextElementSibling.style.display = 'block'
    } else {
      this.nextElementSibling.style.display = 'none'
    }
  }

  render() {
    this.accordion.addEventListener('click', this.toggleContent)
    return {
      accordion: this.accordion,
      content: this.contentContainer
    }
  }
}