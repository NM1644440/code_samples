/**
 * @file
 * Add Weglot language options to header.
 *
 * Makes a Weglot API call for available languages, adds a dropdown to the
 * header, and adds accessibility helpers to the dropdown.
 *
 * @see web/themes/custom/dcpl/templates/menu/menu--topbar.html.twig
 * @see https://developers.weglot.com/javascript/javascript
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/
 * @see https://allyjs.io/#what-is-focusable
 */

(function (Drupal) {
  "use strict";

  Drupal.behaviors.weglotMenu = {
    attach: function (context, settings) {
      // Confirm libraries.
      if (!Weglot || !ally) {
        return;
      }

      // Init Weglot.
      const container = document.querySelector("#header-weglot-container");
      let tabHandle;

      Weglot.initialize({
        api_key: "wg_7ba518f27ee266cc4bc68a9c0757d7748",
        hide_switcher: true,
      });

      Weglot.on("initialized", () => {
        addLanguageMenu();
        addMenuHelpers();
      });

      // Add language dropdown.
      function addLanguageMenu() {
        const links = [];
        const languages = Weglot.getAvailableLanguages() ?? [];

        const containerMarkup = (links) => `<ul
               id="weglot-dropdown"
               role="menu"
               aria-label="Language options">
                 ${links}
               </ul>`;

        const linkMarkup = (lang, text) => `<li
                role="none">
                  <a
                    role="menuitem"
                    href="#Weglot-${lang}"
                    onclick="Weglot.switchTo('${lang}'); return false;"
                    >${text}</a>
              </li>`;

        languages.forEach((lang) => {
          links.push(
            linkMarkup(lang, Weglot.getLanguageName(lang))
          );
        });

        container.innerHTML = containerMarkup(links.join(""));
      }

      // Add accessibility helpers.
      function addMenuHelpers() {
        // Watch for show/ hide.
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (
              mutation.type === "attributes" &&
              mutation.attributeName === "class"
            ) {
              container.classList.contains("show") ? whenShown() : whenHidden();
            }
          });
        });

        observer.observe(container, { attributes: true });
      }

      // When dropdown is shown.
      function whenShown() {
        // Keep focus in dropdown.
        tabHandle = ally.maintain.tabFocus({
          context: container,
        });
      }

      // When dropdown is hidden.
      function whenHidden() {
        // Remove focus trap.
        tabHandle.disengage();
      }
    },
  };
})(Drupal);
