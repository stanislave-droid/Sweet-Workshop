import{a as l,i as C,F as S}from"./assets/vendor-ChxBTWY0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const f=document.querySelector(".sweeties-category-list"),M=document.querySelector("#sweeties-category-select"),c=document.querySelector(".sweeties-category-loader"),g=document.querySelector(".sweeties-desserts-list"),s=document.querySelector(".sweeties-load-more-btn"),a=document.querySelector(".sweeties-desserts-loader");function D(t){return t.map(({_id:n,name:r})=>({text:r,value:n,class:"sw-cat-select-item"}))}function q(t){return t.map(({_id:n,name:r})=>`<label class="sweeties-category-label">
        <input
          type="radio"
          value="${n}"
          name="sweeties-category-btn"
          class="sweeties-category-radio-btn"
        />
        <div class="sweeties-category-button">${r}</div>
      </label>`).join("")}function m(t,e){return e.li===void 0&&(e.li=""),e.img===void 0&&(e.img=""),e.content===void 0&&(e.content=""),e.contentHeader===void 0&&(e.contentHeader=""),e.category===void 0&&(e.category=""),e.nameWrapper===void 0&&(e.nameWrapper=""),e.name===void 0&&(e.name=""),e.description===void 0&&(e.description=""),e.priceWrapper===void 0&&(e.priceWrapper=""),e.price===void 0&&(e.price=""),e.button===void 0&&(e.button=""),e.svg===void 0&&(e.svg=""),t.map(r=>`
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
      `).join("")}const H="https://deserts-store.b.goit.study/api",w=["/desserts","/categories","/orders","/feedbacks"],y={li:"sweeties-dessert-card dessert-card",img:"sweeties-dessert-img",content:"sweeties-dessert-content-wrapper",contentHeader:"sweeties-dessert-all-text-wrapper",category:"sweeties-dessert-category",nameWrapper:"sweeties-dessert-text-wrapper",name:"sweeties-dessert-title-name",description:"sweeties-dessert-desc",priceWrapper:"sweeties-dessert-price-wrapper",price:"sweeties-dessert-price",button:"sweeties-dessert-btn"};l.defaults.baseURL=H;const W=8;async function E(){return(await l.get(w[1])).data}async function h(t=1,e){const n={params:{page:t,limit:W}};return e!==void 0&&(n.params.category=e),(await l.get(w[0],n)).data}function v(t){C.show({title:"Error",message:t,titleColor:"white",messageColor:"white",position:"topRight",backgroundColor:"red"})}function b({totalItems:t,limit:e,page:n}){return t-e*n>0}let L=1,$;function u(t){a.hidden=!1,c.hidden=!1,h(1,t).then(({desserts:e,...n})=>{g.innerHTML=m(e,y),$=t,L=1,b(n)?(s.classList.remove("is-hidden"),s.addEventListener("click",p)):(s.classList.add("is-hidden"),s.removeEventListener("click",p))}).catch(e=>{v(e.message)}).finally(()=>{a.hidden=!0,c.hidden=!0})}function p(){a.hidden=!1,s.disabled=!0,h(++L,$).then(({desserts:t,...e})=>{g.insertAdjacentHTML("beforeend",m(t,y)),b(e)||(s.classList.add("is-hidden"),s.removeEventListener("click",p))}).catch(t=>{v(t.message)}).finally(()=>{a.hidden=!0,s.disabled=!1})}const k=new S({select:M,events:{afterChange:([{value:t}])=>{if(t==="Всі десерти"){u();return}u(t)}},settings:{showSearch:!1,openPosition:"down"}});E().then(t=>{k.setData([{text:"Всі десерти",class:"sw-cat-select-item"},...D(t)]),f.insertAdjacentHTML("beforeend",q(t)),f.addEventListener("change",({target:{value:e}})=>{u(e===""?void 0:e)})}).catch(t=>{console.log(t)}).finally(()=>{c.hidden=!0,a.hidden=!0});const B=document.querySelector(".footer-legal"),F=new Date().getFullYear();B.innerHTML=`&copy; ${F} Солодка Майстерня. Усі права захищені.`;
//# sourceMappingURL=index.js.map
