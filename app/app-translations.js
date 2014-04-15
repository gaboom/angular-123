angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('de', {"Current message:":["Aktuelle Nachricht:","{{count}} aktualle Nachrichten:"],"Greetings Earthlings!":"Güße an euch Erdlinge!","Locales":"Sprachen","Please select a language:":"Bitte wählen Sie eine Sprache:","See Messages":"Nachrichten","Welcome to the universe! Please use the navigation on the top.":"Willkommen im Universum! Bitte benutzen Sie die obige Navigation."});
/* jshint +W100 */
}]);