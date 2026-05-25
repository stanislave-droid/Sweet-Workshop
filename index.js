import{a as c,i as D,F as P,S as T,N as H,P as N,A as O}from"./assets/vendor-BH6JQPA-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const i={container:document.getElementById("feedbacks-container"),overlay:document.querySelector("[data-dessert-modal]"),closeBtn:document.querySelector("[data-modal-close]"),starsContainer:document.querySelector("#dessert-raty-stars"),modalImg:document.querySelector("[data-modal-img]"),modalTitle:document.querySelector("[data-modal-title]"),modalPrice:document.querySelector("[data-modal-price]"),modalDescription:document.querySelector("[data-modal-description]"),modalIngredients:document.querySelector("[data-modal-ingredients]"),orderBtn:document.querySelector("[data-order-btn]"),popularList:document.querySelector(".popular-list"),modalReitStars:document.querySelector(".rating-container")},v=document.querySelector(".sweeties-category-list"),F=document.querySelector("#sweeties-category-select"),f=document.querySelector(".sweeties-category-loader"),y=document.querySelector(".sweeties-desserts-list"),s=document.querySelector(".sweeties-load-more-btn"),d=document.querySelector(".sweeties-desserts-loader"),h="https://deserts-store.b.goit.study/api",u=["/desserts","/categories","/orders","/feedbacks"],b={li:"sweeties-dessert-card dessert-card",img:"sweeties-dessert-img",content:"sweeties-dessert-content-wrapper",contentHeader:"sweeties-dessert-all-text-wrapper",category:"sweeties-dessert-category",nameWrapper:"sweeties-dessert-text-wrapper",name:"sweeties-dessert-title-name",description:"sweeties-dessert-desc",priceWrapper:"sweeties-dessert-price-wrapper",price:"sweeties-dessert-price",button:"sweeties-dessert-btn"};c.defaults.baseURL=h;const W=8;async function I(){return(await c.get(u[1])).data}async function L(t=1,e){const n={params:{page:t,limit:W}};return e!==void 0&&(n.params.category=e),(await c.get(u[0],n)).data}async function A(t){return(await c.get(`${u[0]}/${t}`)).data}async function j(t=1,e=10){const n={params:{page:t,limit:e}};return(await c.get(u[3],n)).data}function l(t){D.show({title:"Error",message:t,titleColor:"white",messageColor:"white",position:"topRight",backgroundColor:"red"})}function k({totalItems:t,limit:e,page:n}){return t-e*n>0}function z(t){return t.map(({_id:n,name:r})=>({text:r,value:n,class:"sw-cat-select-item"}))}function R(t){return t.map(({_id:n,name:r})=>`<label class="sweeties-category-label">
        <input
          type="radio"
          value="${n}"
          name="sweeties-category-btn"
          class="sweeties-category-radio-btn"
        />
        <div class="sweeties-category-button">${r}</div>
      </label>`).join("")}function S(t,e){return e.li===void 0&&(e.li=""),e.img===void 0&&(e.img=""),e.content===void 0&&(e.content=""),e.contentHeader===void 0&&(e.contentHeader=""),e.category===void 0&&(e.category=""),e.nameWrapper===void 0&&(e.nameWrapper=""),e.name===void 0&&(e.name=""),e.description===void 0&&(e.description=""),e.priceWrapper===void 0&&(e.priceWrapper=""),e.price===void 0&&(e.price=""),e.button===void 0&&(e.button=""),e.svg===void 0&&(e.svg=""),t.map(r=>`
      <li data-id="${r._id}" class="${e.li}">
        <img src="${r.image}" alt="${r.name}" class="${e.img}" >
        <div class="${e.content}">
          <div class="${e.contentHeader}">
            <p class="${e.category}">${r.category.name}</p>
            <div class="${e.nameWrapper}">
              <h3 class="${e.name}">${r.name}</h3>
              <p class="${e.description}">${r.description}</p>
            </div>
          </div>
          <div class="${e.priceWrapper}">
            <p class="${e.price}">${r.price} грн</p>
            <button class="${e.button}">
              <svg class="${e.svg}" width="24" height="24">
                <use href="/img/icons.svg#icon-arrow_outward"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
      `).join("")}function $(t){const e=Math.floor(t),n=t%1>=.5;let r="";for(let o=1;o<=5;o++)o<=e?r+=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill="black" d="M14.513 0.98c0.55-1.306 2.423-1.306 2.973 0l3.246 7.71c0.232 0.551 0.756 0.927 1.358 0.975l8.426 0.667c1.427 0.113 2.006 1.873 0.919 2.793l-6.419 5.432c-0.459 0.388-0.659 0.997-0.519 1.577l1.961 8.123c0.332 1.376-1.183 2.464-2.405 1.727l-7.213-4.353c-0.515-0.311-1.163-0.311-1.678 0l-7.214 4.353c-1.222 0.737-2.738-0.35-2.405-1.727l1.961-8.123c0.14-0.58-0.060-1.189-0.519-1.577l-6.42-5.432c-1.088-0.92-0.509-2.68 0.919-2.793l8.426-0.667c0.602-0.048 1.126-0.424 1.358-0.975l3.246-7.71z"/>
</svg>
      `:o===e+1&&n?r+=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<path d="M31.829 11.312l0.128 0.4c0.105 0.302 0.017 0.637-0.223 0.848l-7.755 6.64 2.298 9.952c0.078 0.318-0.042 0.652-0.303 0.848l-0.351 0.24c-0.136 0.107-0.305 0.164-0.479 0.16-0.146 0.003-0.29-0.036-0.415-0.112l-8.728-5.328-8.68 5.328c-0.125 0.076-0.269 0.115-0.415 0.112-0.173 0.004-0.342-0.053-0.479-0.16l-0.399-0.24c-0.262-0.196-0.381-0.53-0.303-0.848l2.298-9.952-7.739-6.624c-0.252-0.209-0.348-0.554-0.239-0.864l0.176-0.4c0.093-0.316 0.374-0.54 0.702-0.56l10.196-0.816 3.909-9.424c0.125-0.313 0.43-0.516 0.766-0.512h0.415c0.333-0.007 0.634 0.198 0.75 0.512l3.973 9.424 10.196 0.816c0.328 0.020 0.609 0.244 0.702 0.56zM22.574 25.696l-1.787-7.488 5.856-5.008-7.675-0.608-2.968-7.136v16.224l6.574 4.016z"></path>
</svg>
      `:r+=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path
    fill="none"
    stroke="black"
    stroke-width="2"
    d="M15.436 1.367c0.207-0.489 0.922-0.489 1.129 0l3.246 7.711c0.379 0.899 1.232 1.507 2.201 1.584l8.426 0.666c0.559 0.044 0.741 0.703 0.351 1.033l-6.42 5.434c-0.744 0.63-1.073 1.624-0.844 2.574l1.961 8.123c0.116 0.479-0.425 0.932-0.916 0.637l-7.215-4.354c-0.833-0.502-1.878-0.503-2.711 0l-7.215 4.354c-0.491 0.295-1.032-0.157-0.916-0.637l1.961-8.123c0.229-0.951-0.099-1.944-0.844-2.574l-6.42-5.434c-0.389-0.33-0.207-0.989 0.352-1.033l8.426-0.666c0.97-0.077 1.822-0.684 2.201-1.584l3.246-7.711z"
  />
</svg>
      `;return r}function U(t){return`
    <div class="swiper-slide feedback-card">
      <div class="card-content">

        <div class="feedback-stars">
          ${$(t.rate)}
        </div>

        <p class="feedback-text">
          "${t.description}"
        </p>

        <p class="feedback-user-name">
          ${t.author}
        </p>

      </div>
    </div>
  `}function _(t){return t.map(e=>U(e)).join("")}async function G(t){const{container:e}=i;if(e)try{const r=(await j(1,10)).feedbacks;if(!r||r.length<3){l("Недостатньо відгуків для відображення.");return}e.innerHTML=_(r),t()}catch(n){console.error(n),l("Не вдалося завантажити відгуки клієнтів.")}}function K(t){i.modalImg.src=t.image,i.modalImg.alt=t.name,i.modalReitStars.innerHTML=$(t.rate),i.modalTitle.textContent=t.name,i.modalPrice.textContent=`${t.price} грн`,i.modalDescription.textContent=t.description,i.modalIngredients.textContent=t.composition,i.orderBtn.dataset.id=t._id||t.id}async function M(t){try{const e=await A(t);K(e),document.body.classList.add("modal-open"),i.overlay.classList.remove("is-hidden"),i.orderBtn.dataset.id=t,window.addEventListener("keydown",B),i.overlay.addEventListener("click",C),i.orderBtn.addEventListener("click",x)}catch(e){console.error("Помилка при отриманні десерту через api.js:",e.message),l("На жаль, не вдалося завантажити дані про цей десерт. Спробуйте пізніше.")}}function p(){document.body.classList.remove("modal-open"),i.overlay.classList.add("is-hidden"),window.removeEventListener("keydown",B),i.overlay.removeEventListener("click",C),i.orderBtn.removeEventListener("click",x)}function B(t){t.code==="Escape"&&p()}function C(t){t.target===i.overlay&&p()}i.closeBtn.addEventListener("click",p);y.addEventListener("click",V);let E=1,q;function g(t){d.hidden=!1,f.hidden=!1,L(1,t).then(({desserts:e,...n})=>{y.innerHTML=S(e,b),q=t,E=1,k(n)?(s.classList.remove("is-hidden"),s.addEventListener("click",w)):(s.classList.add("is-hidden"),s.removeEventListener("click",w))}).catch(e=>{l(e.message)}).finally(()=>{d.hidden=!0,f.hidden=!0})}function w(){d.hidden=!1,s.disabled=!0,L(++E,q).then(({desserts:t,...e})=>{y.insertAdjacentHTML("beforeend",S(t,b)),k(e)||(s.classList.add("is-hidden"),s.removeEventListener("click",w))}).catch(t=>{l(t.message)}).finally(()=>{d.hidden=!0,s.disabled=!1})}function V(t){(t.target.nodeName==="BUTTON"||t.target.nodeName==="svg")&&M(t.target.closest(".dessert-card").dataset.id)}function x(t){(t.target.nodeName==="BUTTON"||t.target.nodeName==="svg")&&(M(t.target.closest("[data-order-btn]").dataset.id),p())}const Y=new P({select:F,events:{afterChange:([{value:t}])=>{if(t==="Всі десерти"){g();return}g(t)}},settings:{showSearch:!1,openPosition:"down"}});I().then(t=>{Y.setData([{text:"Всі десерти",class:"sw-cat-select-item"},...z(t)]),v.insertAdjacentHTML("beforeend",R(t)),v.addEventListener("change",({target:{value:e}})=>{g(e===""?void 0:e)})}).catch(t=>{console.log(t)}).finally(()=>{f.hidden=!0,d.hidden=!0});c.defaults.baseURL=h;function J(){new T(".feedback-slider",{modules:[H,N],direction:"horizontal",spaceBetween:24,grabCursor:!0,observer:!0,observeParents:!0,slidesPerGroup:1,slidesPerView:1,breakpoints:{768:{slidesPerView:3,slidesPerGroup:1}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:4}})}document.addEventListener("DOMContentLoaded",()=>{G(J)});new O(".accordion-container",{showMultiple:!1,duration:400});const Q=document.querySelector(".footer-legal"),X=new Date().getFullYear();Q.innerHTML=`&copy; ${X} Солодка Майстерня. Усі права захищені.`;
//# sourceMappingURL=index.js.map
