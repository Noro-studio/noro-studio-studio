(function () {
  "use strict";

  const config = window.NORO_CONFIG || {};
  const menuButton = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const contactForm = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  const year = document.getElementById("current-year");

  if (year) year.textContent = String(new Date().getFullYear());

  if (menuButton && mainNav) {
    menuButton.addEventListener("click", function () {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
      mainNav.classList.toggle("is-open", !isOpen);
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Ouvrir le menu");
      });
    });
  }

  document.querySelectorAll("[data-offer]").forEach(function (link) {
    link.addEventListener("click", function () {
      const needSelect = contactForm && contactForm.querySelector('[name="need"]');
      if (needSelect) {
        const offer = link.getAttribute("data-offer");
        needSelect.value = offer === "Projet sur mesure" ? "Autre demande" : "Créer un site vitrine";
      }
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const destination = String(config.contactEmail || "").trim();
      if (!destination || destination === "A_REMPLACER" || !destination.includes("@")) {
        feedback.textContent = "Le formulaire est prêt, mais l'adresse de réception n'est pas encore configurée. Ouvre site-config.js et remplace contactEmail par ton adresse e-mail avant de publier le site.";
        feedback.classList.add("feedback-warning");
        return;
      }

      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const company = String(formData.get("company") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const need = String(formData.get("need") || "").trim();
      const message = String(formData.get("message") || "").trim();
      const subject = encodeURIComponent("Demande de contact — " + name);
      const body = encodeURIComponent(
        "Bonjour,\n\n" +
        "Nom : " + name + "\n" +
        "Entreprise : " + (company || "Non renseignée") + "\n" +
        "E-mail : " + email + "\n" +
        "Besoin : " + need + "\n\n" +
        "Message :\n" + message + "\n\n" +
        "Envoyé depuis le site " + (config.brandName || "du studio") + "."
      );
      feedback.textContent = "Ton application de messagerie va s'ouvrir avec le message prérempli. Vérifie-le puis envoie-le.";
      feedback.classList.remove("feedback-warning");
      window.location.href = "mailto:" + destination + "?subject=" + subject + "&body=" + body;
    });
  }
})();
