import{a as d,i as W,S as k,F as A,b as j,N as z,P as R,A as U}from"./assets/vendor-D9qh3azH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const r={container:document.getElementById("feedbacks-container"),body:document.querySelector("body"),headerMenu:document.querySelector(".header"),headerMenuButton:document.querySelector("#header-menu-button"),overlay:document.querySelector("[data-dessert-modal]"),closeBtn:document.querySelector("[data-modal-close]"),starsContainer:document.querySelector("#dessert-raty-stars"),modalImg:document.querySelector("[data-modal-img]"),modalTitle:document.querySelector("[data-modal-title]"),modalPrice:document.querySelector("[data-modal-price]"),modalDescription:document.querySelector("[data-modal-description]"),modalIngredients:document.querySelector("[data-modal-ingredients]"),orderBtn:document.querySelector("[data-order-btn]"),popularList:document.querySelector(".popular-list"),modalReitStars:document.querySelector(".rating-container"),modalOverlay:document.querySelector(".order-modal-overlay"),closeModalBtn:document.querySelector(".order-modal-close-btn"),orderForm:document.querySelector(".order-form")},b=document.querySelector(".sweeties-category-list"),K=document.querySelector("#sweeties-category-select"),y=document.querySelector(".sweeties-category-loader"),L=document.querySelector(".sweeties-desserts-list"),s=document.querySelector(".sweeties-load-more-btn"),l=document.querySelector(".sweeties-desserts-loader"),M="https://deserts-store.b.goit.study/api",u=["/desserts","/categories","/orders","/feedbacks"],S={li:"sweeties-dessert-card dessert-card",img:"sweeties-dessert-img",content:"sweeties-dessert-content-wrapper",contentHeader:"sweeties-dessert-all-text-wrapper",category:"sweeties-dessert-category",nameWrapper:"sweeties-dessert-text-wrapper",name:"sweeties-dessert-title-name",description:"sweeties-dessert-desc",priceWrapper:"sweeties-dessert-price-wrapper",price:"sweeties-dessert-price",button:"sweeties-dessert-btn"};d.defaults.baseURL=M;const G=8;async function V(){return(await d.get(u[1])).data}async function E(e=1,t){const n={params:{page:e,limit:G}};return t!==void 0&&(n.params.category=t),(await d.get(u[0],n)).data}async function Q(e){return(await d.get(`${u[0]}/${e}`)).data}async function Y(e=1,t=10){const n={params:{page:e,limit:t}};return(await d.get(u[3],n)).data}async function _({name:e,phone:t,dessertId:n,comment:o}){const a={name:e,phone:t,dessertId:n,comment:o};return(await d.post(u[2],a)).data}function c(e){W.show({title:"Error",message:e,titleColor:"white",messageColor:"white",position:"topRight",backgroundColor:"red"})}function $({totalItems:e,limit:t,page:n}){return e-t*n>0}function p(e){k.fire({icon:"error",title:"Помилка",text:e})}function J(e){k.fire({icon:"success",title:"Успіх",text:`Замовлення успішно створене! № ${e||"---"}`})}function X(e){return e.map(({_id:n,name:o})=>({text:o,value:n,class:"sw-cat-select-item"}))}function Z(e){return e.map(({_id:n,name:o})=>`
      <li>
        <input
          type="radio"
          value="${n}"
          name="sweeties-category-btn"
          class="sweeties-category-radio-btn"
          id="${n}"
        />
        <label class="sweeties-category-label sweeties-category-button" for="${n}">
        ${o}
      </label>
      </li>`).join("")}function B(e,t){return t.li===void 0&&(t.li=""),t.img===void 0&&(t.img=""),t.content===void 0&&(t.content=""),t.contentHeader===void 0&&(t.contentHeader=""),t.category===void 0&&(t.category=""),t.nameWrapper===void 0&&(t.nameWrapper=""),t.name===void 0&&(t.name=""),t.description===void 0&&(t.description=""),t.priceWrapper===void 0&&(t.priceWrapper=""),t.price===void 0&&(t.price=""),t.button===void 0&&(t.button=""),t.svg===void 0&&(t.svg=""),e.map(o=>`
      <li data-id="${o._id}" class="${t.li}">
        <img src="${o.image}" alt="${o.name}" class="${t.img}" >
        <div class="${t.content}">
          <div class="${t.contentHeader}">
            <p class="${t.category}">${o.category.name}</p>
            <div class="${t.nameWrapper}">
              <h3 class="${t.name}">${o.name}</h3>
              <p class="${t.description}">${o.description}</p>
            </div>
          </div>
          <div class="${t.priceWrapper}">
            <p class="${t.price}">${o.price} грн</p>
            <button class="${t.button}">
              <svg class="${t.svg}" width="24" height="24">
                <use href="/Sweet-Workshop/assets/icons-DlAvQgEL.svg#icon-arrow_outward"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
      `).join("")}function C(e){const t=Math.floor(e),n=e%1>=.5;let o="";for(let a=1;a<=5;a++)a<=t?o+=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill="black" d="M14.513 0.98c0.55-1.306 2.423-1.306 2.973 0l3.246 7.71c0.232 0.551 0.756 0.927 1.358 0.975l8.426 0.667c1.427 0.113 2.006 1.873 0.919 2.793l-6.419 5.432c-0.459 0.388-0.659 0.997-0.519 1.577l1.961 8.123c0.332 1.376-1.183 2.464-2.405 1.727l-7.213-4.353c-0.515-0.311-1.163-0.311-1.678 0l-7.214 4.353c-1.222 0.737-2.738-0.35-2.405-1.727l1.961-8.123c0.14-0.58-0.060-1.189-0.519-1.577l-6.42-5.432c-1.088-0.92-0.509-2.68 0.919-2.793l8.426-0.667c0.602-0.048 1.126-0.424 1.358-0.975l3.246-7.71z"/>
</svg>
      `:a===t+1&&n?o+=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<path d="M31.829 11.312l0.128 0.4c0.105 0.302 0.017 0.637-0.223 0.848l-7.755 6.64 2.298 9.952c0.078 0.318-0.042 0.652-0.303 0.848l-0.351 0.24c-0.136 0.107-0.305 0.164-0.479 0.16-0.146 0.003-0.29-0.036-0.415-0.112l-8.728-5.328-8.68 5.328c-0.125 0.076-0.269 0.115-0.415 0.112-0.173 0.004-0.342-0.053-0.479-0.16l-0.399-0.24c-0.262-0.196-0.381-0.53-0.303-0.848l2.298-9.952-7.739-6.624c-0.252-0.209-0.348-0.554-0.239-0.864l0.176-0.4c0.093-0.316 0.374-0.54 0.702-0.56l10.196-0.816 3.909-9.424c0.125-0.313 0.43-0.516 0.766-0.512h0.415c0.333-0.007 0.634 0.198 0.75 0.512l3.973 9.424 10.196 0.816c0.328 0.020 0.609 0.244 0.702 0.56zM22.574 25.696l-1.787-7.488 5.856-5.008-7.675-0.608-2.968-7.136v16.224l6.574 4.016z"></path>
</svg>
      `:o+=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path
    fill="none"
    stroke="black"
    stroke-width="2"
    d="M15.436 1.367c0.207-0.489 0.922-0.489 1.129 0l3.246 7.711c0.379 0.899 1.232 1.507 2.201 1.584l8.426 0.666c0.559 0.044 0.741 0.703 0.351 1.033l-6.42 5.434c-0.744 0.63-1.073 1.624-0.844 2.574l1.961 8.123c0.116 0.479-0.425 0.932-0.916 0.637l-7.215-4.354c-0.833-0.502-1.878-0.503-2.711 0l-7.215 4.354c-0.491 0.295-1.032-0.157-0.916-0.637l1.961-8.123c0.229-0.951-0.099-1.944-0.844-2.574l-6.42-5.434c-0.389-0.33-0.207-0.989 0.352-1.033l8.426-0.666c0.97-0.077 1.822-0.684 2.201-1.584l3.246-7.711z"
  />
</svg>
      `;return o}function ee(e){return`
    <div class="swiper-slide feedback-card">
      <div class="card-content">

        <div class="feedback-stars">
          ${C(e.rate)}
        </div>

        <p class="feedback-text">
          "${e.description}"
        </p>

        <p class="feedback-user-name">
          ${e.author}
        </p>

      </div>
    </div>
  `}function te(e){return e.map(t=>ee(t)).join("")}async function re(e){const{container:t}=r;if(t)try{const o=(await Y(1,10)).feedbacks;if(!o||o.length<3){c("Недостатньо відгуків для відображення.");return}t.innerHTML=te(o),e()}catch(n){console.error(n),c("Не вдалося завантажити відгуки клієнтів.")}}function ne(e){r.modalImg.src=e.image,r.modalImg.alt=e.name,r.modalReitStars.innerHTML=C(e.rate),r.modalTitle.textContent=e.name,r.modalPrice.textContent=`${e.price} грн`,r.modalDescription.textContent=e.description,r.modalIngredients.textContent=e.composition,r.orderBtn.dataset.id=e._id||e.id}async function oe(e){try{const t=await Q(e);ne(t),document.body.classList.add("modal-open"),r.overlay.classList.remove("is-hidden"),r.orderBtn.dataset.id=e,window.addEventListener("keydown",q),r.overlay.addEventListener("click",D),r.orderBtn.addEventListener("click",T)}catch(t){console.error("Помилка при отриманні десерту через api.js:",t.message),c("На жаль, не вдалося завантажити дані про цей десерт. Спробуйте пізніше.")}}function m(){document.body.classList.remove("modal-open"),r.overlay.classList.add("is-hidden"),window.removeEventListener("keydown",q),r.overlay.removeEventListener("click",D),r.orderBtn.removeEventListener("click",T)}function q(e){e.code==="Escape"&&m()}function D(e){e.target===r.overlay&&m()}r.closeBtn.addEventListener("click",m);L.addEventListener("click",se);let O=null;function ae(e){r.modalOverlay.classList.remove("is-hidden"),r.closeModalBtn.addEventListener("click",f),r.orderForm.addEventListener("submit",N),document.body.style.overflow="hidden",O=e,window.addEventListener("keydown",F),r.modalOverlay.addEventListener("click",I)}let x=1,P;function w(e){l.hidden=!1,y.hidden=!1,E(1,e).then(({desserts:t,...n})=>{L.innerHTML=B(t,S),P=e,x=1,$(n)?(s.classList.remove("is-hidden"),s.addEventListener("click",v)):(s.classList.add("is-hidden"),s.removeEventListener("click",v))}).catch(t=>{c(t.message)}).finally(()=>{l.hidden=!0,y.hidden=!0})}function v(){l.hidden=!1,s.disabled=!0,E(++x,P).then(({desserts:e,...t})=>{L.insertAdjacentHTML("beforeend",B(e,S)),$(t)||(s.classList.add("is-hidden"),s.removeEventListener("click",v))}).catch(e=>{c(e.message)}).finally(()=>{l.hidden=!0,s.disabled=!1})}function H(e){e.key==="Escape"&&h()}function ie(e){e.target.closest("button")===r.headerMenuButton?ce()?h():de():e.target.closest("a")&&h()}function se(e){(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg")&&oe(e.target.closest(".dessert-card").dataset.id)}function T(e){(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg")&&(ae(e.target.closest("[data-order-btn]").dataset.id),m())}function F(e){e.code==="Escape"&&f()}function f(){r.modalOverlay.classList.add("is-hidden"),r.closeModalBtn.removeEventListener("click",m),r.modalOverlay.removeEventListener("click",I),r.orderForm.removeEventListener("submit",N),document.body.style.overflow="",window.removeEventListener("keydown",F)}function I(e){e.target.classList.contains("order-modal-overlay")&&f()}function N(e){e.preventDefault();const t=e.target.elements,n={name:t.name.value.trim(),phone:t.phone.value.trim(),comment:t.comment.value.trim(),dessertId:O};if(n.name.length<2||n.name.length>48){p("Ім'я повинно містити від 2 до 48 символів");return}if(n.phone.length!==12){p("Номер телефону повинен містити 12 цифр");return}if(n.comment.length<2||n.comment.length>256){p("Коментар повинен містити від 2 до 256 символів");return}_(n).then(({orderNum:o})=>{J(o),f()}).catch(o=>{p(o.message)}).finally(()=>{e.target.reset()})}r.headerMenu.addEventListener("click",ie);function de(){r.headerMenu.classList.add("header--open"),r.body.classList.add("prevent-scrolling"),document.addEventListener("keydown",H)}function h(){r.headerMenu.classList.remove("header--open"),r.body.classList.remove("prevent-scrolling"),document.removeEventListener("keydown",H)}function ce(){return r.headerMenu.classList.contains("header--open")}const le=new A({select:K,events:{afterChange:([{value:e}])=>{if(e==="Всі десерти"){w();return}w(e)}},settings:{showSearch:!1,openPosition:"down"}});V().then(e=>{le.setData([{text:"Всі десерти",class:"sw-cat-select-item"},...X(e)]),b.insertAdjacentHTML("beforeend",Z(e)),b.addEventListener("change",({target:{value:t}})=>{w(t===""?void 0:t)})}).catch(e=>{c(e)}).finally(()=>{y.hidden=!0,l.hidden=!0});d.defaults.baseURL=M;function ue(){new j(".feedback-slider",{modules:[z,R],direction:"horizontal",spaceBetween:24,grabCursor:!0,observer:!0,observeParents:!0,slidesPerGroup:1,slidesPerView:1,breakpoints:{768:{slidesPerView:3,slidesPerGroup:1}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:4}})}document.addEventListener("DOMContentLoaded",()=>{re(ue)});new U(".accordion-container",{showMultiple:!1,duration:400});const me=document.querySelector(".footer-legal"),pe=new Date().getFullYear();me.innerHTML=`&copy; ${pe} Солодка Майстерня. Усі права захищені.`;
//# sourceMappingURL=index.js.map
