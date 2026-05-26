import{a as c,i as I,S as L,F as N,b as W,N as A,P as j,A as z}from"./assets/vendor-B1bA8D6b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const o={container:document.getElementById("feedbacks-container"),overlay:document.querySelector("[data-dessert-modal]"),closeBtn:document.querySelector("[data-modal-close]"),starsContainer:document.querySelector("#dessert-raty-stars"),modalImg:document.querySelector("[data-modal-img]"),modalTitle:document.querySelector("[data-modal-title]"),modalPrice:document.querySelector("[data-modal-price]"),modalDescription:document.querySelector("[data-modal-description]"),modalIngredients:document.querySelector("[data-modal-ingredients]"),orderBtn:document.querySelector("[data-order-btn]"),popularList:document.querySelector(".popular-list"),modalReitStars:document.querySelector(".rating-container"),modalOverlay:document.querySelector(".order-modal-overlay"),closeModalBtn:document.querySelector(".order-modal-close-btn"),orderForm:document.querySelector(".order-form")},b=document.querySelector(".sweeties-category-list"),R=document.querySelector("#sweeties-category-select"),w=document.querySelector(".sweeties-category-loader"),h=document.querySelector(".sweeties-desserts-list"),s=document.querySelector(".sweeties-load-more-btn"),d=document.querySelector(".sweeties-desserts-loader"),k="https://deserts-store.b.goit.study/api",u=["/desserts","/categories","/orders","/feedbacks"],S={li:"sweeties-dessert-card dessert-card",img:"sweeties-dessert-img",content:"sweeties-dessert-content-wrapper",contentHeader:"sweeties-dessert-all-text-wrapper",category:"sweeties-dessert-category",nameWrapper:"sweeties-dessert-text-wrapper",name:"sweeties-dessert-title-name",description:"sweeties-dessert-desc",priceWrapper:"sweeties-dessert-price-wrapper",price:"sweeties-dessert-price",button:"sweeties-dessert-btn"};c.defaults.baseURL=k;const U=8;async function K(){return(await c.get(u[1])).data}async function E(e=1,t){const n={params:{page:e,limit:U}};return t!==void 0&&(n.params.category=t),(await c.get(u[0],n)).data}async function _(e){return(await c.get(`${u[0]}/${e}`)).data}async function G(e=1,t=10){const n={params:{page:e,limit:t}};return(await c.get(u[3],n)).data}async function V({name:e,phone:t,dessertId:n,comment:r}){const i={name:e,phone:t,dessertId:n,comment:r};return(await c.post(u[2],i)).data}function l(e){I.show({title:"Error",message:e,titleColor:"white",messageColor:"white",position:"topRight",backgroundColor:"red"})}function $({totalItems:e,limit:t,page:n}){return e-t*n>0}function p(e){L.fire({icon:"error",title:"Помилка",text:e})}function Y(e){L.fire({icon:"success",title:"Успіх",text:`Замовлення успішно створене! № ${e||"---"}`})}function J(e){return e.map(({_id:n,name:r})=>({text:r,value:n,class:"sw-cat-select-item"}))}function Q(e){return e.map(({_id:n,name:r})=>`<label class="sweeties-category-label">
        <input
          type="radio"
          value="${n}"
          name="sweeties-category-btn"
          class="sweeties-category-radio-btn"
        />
        <div class="sweeties-category-button">${r}</div>
      </label>`).join("")}function M(e,t){return t.li===void 0&&(t.li=""),t.img===void 0&&(t.img=""),t.content===void 0&&(t.content=""),t.contentHeader===void 0&&(t.contentHeader=""),t.category===void 0&&(t.category=""),t.nameWrapper===void 0&&(t.nameWrapper=""),t.name===void 0&&(t.name=""),t.description===void 0&&(t.description=""),t.priceWrapper===void 0&&(t.priceWrapper=""),t.price===void 0&&(t.price=""),t.button===void 0&&(t.button=""),t.svg===void 0&&(t.svg=""),e.map(r=>`
      <li data-id="${r._id}" class="${t.li}">
        <img src="${r.image}" alt="${r.name}" class="${t.img}" >
        <div class="${t.content}">
          <div class="${t.contentHeader}">
            <p class="${t.category}">${r.category.name}</p>
            <div class="${t.nameWrapper}">
              <h3 class="${t.name}">${r.name}</h3>
              <p class="${t.description}">${r.description}</p>
            </div>
          </div>
          <div class="${t.priceWrapper}">
            <p class="${t.price}">${r.price} грн</p>
            <button class="${t.button}">
              <svg class="${t.svg}" width="24" height="24">
                <use href="/img/icons.svg#icon-arrow_outward"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
      `).join("")}function B(e){const t=Math.floor(e),n=e%1>=.5;let r="";for(let i=1;i<=5;i++)i<=t?r+=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill="black" d="M14.513 0.98c0.55-1.306 2.423-1.306 2.973 0l3.246 7.71c0.232 0.551 0.756 0.927 1.358 0.975l8.426 0.667c1.427 0.113 2.006 1.873 0.919 2.793l-6.419 5.432c-0.459 0.388-0.659 0.997-0.519 1.577l1.961 8.123c0.332 1.376-1.183 2.464-2.405 1.727l-7.213-4.353c-0.515-0.311-1.163-0.311-1.678 0l-7.214 4.353c-1.222 0.737-2.738-0.35-2.405-1.727l1.961-8.123c0.14-0.58-0.060-1.189-0.519-1.577l-6.42-5.432c-1.088-0.92-0.509-2.68 0.919-2.793l8.426-0.667c0.602-0.048 1.126-0.424 1.358-0.975l3.246-7.71z"/>
</svg>
      `:i===t+1&&n?r+=`
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
      `;return r}function X(e){return`
    <div class="swiper-slide feedback-card">
      <div class="card-content">

        <div class="feedback-stars">
          ${B(e.rate)}
        </div>

        <p class="feedback-text">
          "${e.description}"
        </p>

        <p class="feedback-user-name">
          ${e.author}
        </p>

      </div>
    </div>
  `}function Z(e){return e.map(t=>X(t)).join("")}async function ee(e){const{container:t}=o;if(t)try{const r=(await G(1,10)).feedbacks;if(!r||r.length<3){l("Недостатньо відгуків для відображення.");return}t.innerHTML=Z(r),e()}catch(n){console.error(n),l("Не вдалося завантажити відгуки клієнтів.")}}function te(e){o.modalImg.src=e.image,o.modalImg.alt=e.name,o.modalReitStars.innerHTML=B(e.rate),o.modalTitle.textContent=e.name,o.modalPrice.textContent=`${e.price} грн`,o.modalDescription.textContent=e.description,o.modalIngredients.textContent=e.composition,o.orderBtn.dataset.id=e._id||e.id}async function re(e){try{const t=await _(e);te(t),document.body.classList.add("modal-open"),o.overlay.classList.remove("is-hidden"),o.orderBtn.dataset.id=e,window.addEventListener("keydown",C),o.overlay.addEventListener("click",q),o.orderBtn.addEventListener("click",P)}catch(t){console.error("Помилка при отриманні десерту через api.js:",t.message),l("На жаль, не вдалося завантажити дані про цей десерт. Спробуйте пізніше.")}}function m(){document.body.classList.remove("modal-open"),o.overlay.classList.add("is-hidden"),window.removeEventListener("keydown",C),o.overlay.removeEventListener("click",q),o.orderBtn.removeEventListener("click",P)}function C(e){e.code==="Escape"&&m()}function q(e){e.target===o.overlay&&m()}o.closeBtn.addEventListener("click",m);h.addEventListener("click",oe);let x=null;function ne(e){o.modalOverlay.classList.remove("is-hidden"),o.closeModalBtn.addEventListener("click",f),o.orderForm.addEventListener("submit",H),document.body.style.overflow="hidden",x=e,window.addEventListener("keydown",T),o.modalOverlay.addEventListener("click",F)}let D=1,O;function y(e){d.hidden=!1,w.hidden=!1,E(1,e).then(({desserts:t,...n})=>{h.innerHTML=M(t,S),O=e,D=1,$(n)?(s.classList.remove("is-hidden"),s.addEventListener("click",v)):(s.classList.add("is-hidden"),s.removeEventListener("click",v))}).catch(t=>{l(t.message)}).finally(()=>{d.hidden=!0,w.hidden=!0})}function v(){d.hidden=!1,s.disabled=!0,E(++D,O).then(({desserts:e,...t})=>{h.insertAdjacentHTML("beforeend",M(e,S)),$(t)||(s.classList.add("is-hidden"),s.removeEventListener("click",v))}).catch(e=>{l(e.message)}).finally(()=>{d.hidden=!0,s.disabled=!1})}function oe(e){(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg")&&re(e.target.closest(".dessert-card").dataset.id)}function P(e){(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg")&&(ne(e.target.closest("[data-order-btn]").dataset.id),m())}function T(e){e.code==="Escape"&&f()}function f(){o.modalOverlay.classList.add("is-hidden"),o.closeModalBtn.removeEventListener("click",m),o.modalOverlay.removeEventListener("click",F),o.orderForm.removeEventListener("submit",H),document.body.style.overflow="",window.removeEventListener("keydown",T)}function F(e){e.target.classList.contains("order-modal-overlay")&&f()}function H(e){e.preventDefault();const t=e.target.elements,n={name:t.name.value.trim(),phone:t.phone.value.trim(),comment:t.comment.value.trim(),dessertId:x};if(n.name.length<2||n.name.length>48){p("Ім'я повинно містити від 2 до 48 символів");return}if(n.phone.length!==12){p("Номер телефону повинен містити 12 цифр");return}if(n.comment.length<2||n.comment.length>256){p("Коментар повинен містити від 2 до 256 символів");return}V(n).then(({orderNum:r})=>{Y(r),f()}).catch(r=>{p(r.message)}).finally(()=>{e.target.reset()})}const ie=new N({select:R,events:{afterChange:([{value:e}])=>{if(e==="Всі десерти"){y();return}y(e)}},settings:{showSearch:!1,openPosition:"down"}});K().then(e=>{ie.setData([{text:"Всі десерти",class:"sw-cat-select-item"},...J(e)]),b.insertAdjacentHTML("beforeend",Q(e)),b.addEventListener("change",({target:{value:t}})=>{y(t===""?void 0:t)})}).catch(e=>{console.log(e)}).finally(()=>{w.hidden=!0,d.hidden=!0});c.defaults.baseURL=k;function ae(){new W(".feedback-slider",{modules:[A,j],direction:"horizontal",spaceBetween:24,grabCursor:!0,observer:!0,observeParents:!0,slidesPerGroup:1,slidesPerView:1,breakpoints:{768:{slidesPerView:3,slidesPerGroup:1}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:4}})}document.addEventListener("DOMContentLoaded",()=>{ee(ae)});new z(".accordion-container",{showMultiple:!1,duration:400});const se=document.querySelector(".footer-legal"),ce=new Date().getFullYear();se.innerHTML=`&copy; ${ce} Солодка Майстерня. Усі права захищені.`;
//# sourceMappingURL=index.js.map
