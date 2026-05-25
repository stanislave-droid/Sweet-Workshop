import{a as c,i as E,F as x,S as D,N as P,P as H,A as T}from"./assets/vendor-BH6JQPA-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const i={container:document.getElementById("feedbacks-container"),overlay:document.querySelector("[data-dessert-modal]"),closeBtn:document.querySelector("[data-modal-close]"),starsContainer:document.querySelector("#dessert-raty-stars"),modalImg:document.querySelector("[data-modal-img]"),modalTitle:document.querySelector("[data-modal-title]"),modalPrice:document.querySelector("[data-modal-price]"),modalDescription:document.querySelector("[data-modal-description]"),modalIngredients:document.querySelector("[data-modal-ingredients]"),orderBtn:document.querySelector("[data-order-btn]"),popularList:document.querySelector(".popular-list"),modalReitStars:document.querySelector(".rating-container"),handlerOrderButton:document.querySelector("[data-order-btn]")},v=document.querySelector(".sweeties-category-list"),O=document.querySelector("#sweeties-category-select"),m=document.querySelector(".sweeties-category-loader"),w=document.querySelector(".sweeties-desserts-list"),s=document.querySelector(".sweeties-load-more-btn"),d=document.querySelector(".sweeties-desserts-loader"),h="https://deserts-store.b.goit.study/api",u=["/desserts","/categories","/orders","/feedbacks"],b={li:"sweeties-dessert-card dessert-card",img:"sweeties-dessert-img",content:"sweeties-dessert-content-wrapper",contentHeader:"sweeties-dessert-all-text-wrapper",category:"sweeties-dessert-category",nameWrapper:"sweeties-dessert-text-wrapper",name:"sweeties-dessert-title-name",description:"sweeties-dessert-desc",priceWrapper:"sweeties-dessert-price-wrapper",price:"sweeties-dessert-price",button:"sweeties-dessert-btn"};c.defaults.baseURL=h;const F=8;async function W(){return(await c.get(u[1])).data}async function L(t=1,e){const n={params:{page:t,limit:F}};return e!==void 0&&(n.params.category=e),(await c.get(u[0],n)).data}async function I(t){return(await c.get(`${u[0]}/${t}`)).data}async function N(t=1,e=10){const n={params:{page:t,limit:e}};return(await c.get(u[3],n)).data}function l(t){E.show({title:"Error",message:t,titleColor:"white",messageColor:"white",position:"topRight",backgroundColor:"red"})}function k({totalItems:t,limit:e,page:n}){return t-e*n>0}function A(t){return t.map(({_id:n,name:r})=>({text:r,value:n,class:"sw-cat-select-item"}))}function j(t){return t.map(({_id:n,name:r})=>`<label class="sweeties-category-label">
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
      `;return r}function z(t){return`
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
  `}function R(t){return t.map(e=>z(e)).join("")}async function U(t){const{container:e}=i;if(e)try{const r=(await N(1,10)).feedbacks;if(!r||r.length<3){l("Недостатньо відгуків для відображення.");return}e.innerHTML=R(r),t()}catch(n){console.error(n),l("Не вдалося завантажити відгуки клієнтів.")}}function _(t){i.modalImg.src=t.image,i.modalImg.alt=t.name,i.modalReitStars.innerHTML=$(t.rate),i.modalTitle.textContent=t.name,i.modalPrice.textContent=`${t.price} грн`,i.modalDescription.textContent=t.description,i.modalIngredients.textContent=t.composition,i.orderBtn.dataset.id=t._id||t.id}async function G(t){try{const e=await I(t);_(e),document.body.classList.add("modal-open"),i.overlay.classList.remove("is-hidden"),i.handlerOrderButton.dataset.order=t,window.addEventListener("keydown",M),i.overlay.addEventListener("click",C)}catch(e){console.error("Помилка при отриманні десерту через api.js:",e.message),l("На жаль, не вдалося завантажити дані про цей десерт. Спробуйте пізніше.")}}function y(){document.body.classList.remove("modal-open"),i.overlay.classList.add("is-hidden"),window.removeEventListener("keydown",M),i.overlay.removeEventListener("click",C)}function M(t){t.code==="Escape"&&y()}function C(t){t.target===i.overlay&&y()}i.closeBtn.addEventListener("click",y);w.addEventListener("click",K);let B=1,q;function f(t){d.hidden=!1,m.hidden=!1,L(1,t).then(({desserts:e,...n})=>{w.innerHTML=S(e,b),q=t,B=1,k(n)?(s.classList.remove("is-hidden"),s.addEventListener("click",g)):(s.classList.add("is-hidden"),s.removeEventListener("click",g))}).catch(e=>{l(e.message)}).finally(()=>{d.hidden=!0,m.hidden=!0})}function g(){d.hidden=!1,s.disabled=!0,L(++B,q).then(({desserts:t,...e})=>{w.insertAdjacentHTML("beforeend",S(t,b)),k(e)||(s.classList.add("is-hidden"),s.removeEventListener("click",g))}).catch(t=>{l(t.message)}).finally(()=>{d.hidden=!0,s.disabled=!1})}function K(t){(t.target.nodeName==="BUTTON"||t.target.nodeName==="svg")&&G(t.target.closest(".dessert-card").dataset.id)}const V=new x({select:O,events:{afterChange:([{value:t}])=>{if(t==="Всі десерти"){f();return}f(t)}},settings:{showSearch:!1,openPosition:"down"}});W().then(t=>{V.setData([{text:"Всі десерти",class:"sw-cat-select-item"},...A(t)]),v.insertAdjacentHTML("beforeend",j(t)),v.addEventListener("change",({target:{value:e}})=>{f(e===""?void 0:e)})}).catch(t=>{console.log(t)}).finally(()=>{m.hidden=!0,d.hidden=!0});c.defaults.baseURL=h;function Y(){new D(".feedback-slider",{modules:[P,H],direction:"horizontal",spaceBetween:24,grabCursor:!0,observer:!0,observeParents:!0,slidesPerGroup:1,slidesPerView:1,breakpoints:{768:{slidesPerView:3,slidesPerGroup:1}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:4}})}document.addEventListener("DOMContentLoaded",()=>{U(Y)});new T(".accordion-container",{showMultiple:!1,duration:400});const J=document.querySelector(".footer-legal"),Q=new Date().getFullYear();J.innerHTML=`&copy; ${Q} Солодка Майстерня. Усі права захищені.`;
//# sourceMappingURL=index.js.map
