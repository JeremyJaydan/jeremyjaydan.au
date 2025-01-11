
import { getProjectsSortedByDate } from './projects';
import { timeAgo } from './time';

export default class ProjectList extends HTMLElement {
  
  constructor(){
    super();
  }
  
  connectedCallback(){
    this.#render();
  }
  
  #render(){
    this.innerHTML = /*html*/ `
    
      ${ getProjectsSortedByDate().map(project => /*html*/ `
        <a href="${ project.url }" target="_blank" class="relative group select-none border border-black/25 dark:border-white/25">
          <div style="bg-red-500 -top-2 left-0 absolute w-full h-full"></div>
          <div class="relative overflow-hidden flex w-[256px] h-[256px] flex-col p-4">
            <span class="text-black dark:text-white font-bold pb-1">${ project.name }</span>
            <p class="text-[#727272] dark:text-[#B4B4B4] grow">${ project.description }</p>
            <span tooltip="${ project.date }" class="w-full pb-1 !text-[#727272] !dark:text-[#B4B4B4]">${ timeAgo(project.date) }</span>
          </div>
          ${ project.image ? /*html*/ `<img src="/static/project-images/${ project.image }" class="absolute -z-[1] top-0 left-0 w-full h-full object-cover opacity-15" />` : '' }
        </a>
      `).join('') }
      
    `;
  }
  
  
}

customElements.define('project-list', ProjectList);
