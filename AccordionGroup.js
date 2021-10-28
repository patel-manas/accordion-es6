import Accordion from "./Accordion.js";

export default class AccordionGroup {
  constructor(root, accordions = []){
    this.root = root;
    this.accordions = accordions;
    this.dataFetched = false
  }

  render() {
    this.accordions.forEach(acc => {
      const accordion = new Accordion(acc)
      const accNode = accordion.render()
      this.root.append(accNode.accordion)
      this.root.append(accNode.content)
    })
  }
}