(function(){
"use strict";
const config=window.NORO_CONFIG||{};
const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".navigation");
const form=document.getElementById("contact-form");
const feedback=document.getElementById("form-feedback");
const year=document.getElementById("current-year");
if(year) year.textContent=String(new Date().getFullYear());
if(menuButton&&nav){
 menuButton.addEventListener("click",function(){
  const open=menuButton.getAttribute("aria-expanded")==="true";
  menuButton.setAttribute("aria-expanded",String(!open));
  menuButton.setAttribute("aria-label",open?"Ouvrir le menu":"Fermer le menu");
  nav.classList.toggle("is-open",!open);
 });
 nav.querySelectorAll("a").forEach(function(link){link.addEventListener("click",function(){nav.classList.remove("is-open");menuButton.setAttribute("aria-expanded","false");menuButton.setAttribute("aria-label","Ouvrir le menu");});});
}
document.querySelectorAll("[data-offer]").forEach(function(link){link.addEventListener("click",function(){const select=form&&form.querySelector('[name="need"]');if(select){const offer=link.getAttribute("data-offer");select.value=offer==="Projet sur mesure"?"Projet sur mesure":"Créer un site vitrine";}});});
if(form){
 form.addEventListener("submit",function(event){
  event.preventDefault();
  if(!form.reportValidity()) return;
  const destination=String(config.contactEmail||"").trim();
  if(!destination||!destination.includes("@")){feedback.textContent="L'adresse de contact n'est pas correctement configurée. Écrivez directement à contact.lanteuilweb@gmail.com.";return;}
  const data=new FormData(form);
  const name=String(data.get("name")||"").trim();
  const company=String(data.get("company")||"").trim();
  const email=String(data.get("email")||"").trim();
  const need=String(data.get("need")||"").trim();
  const message=String(data.get("message")||"").trim();
  const subject=encodeURIComponent("Demande de projet Noro Studio — "+name);
  const body=encodeURIComponent("Bonjour Noro Studio,\n\nNom : "+name+"\nEntreprise : "+(company||"Non renseignée")+"\nE-mail : "+email+"\nBesoin : "+need+"\n\nMessage :\n"+message);
  feedback.textContent="Votre messagerie va s'ouvrir avec le message prérempli. Vérifiez-le puis envoyez-le pour nous contacter.";
  window.location.href="mailto:"+destination+"?subject="+subject+"&body="+body;
 });
}
})();