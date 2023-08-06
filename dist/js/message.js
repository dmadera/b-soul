$(document).ready(function () {
    //showMessage('signup-success', null);
})

function showMessage(type, details) {
    var modal = $("#modal-info")

    switch (type) {
        case "message-success":
            setModalData(
                modal,
                "Zpráva",
                `
        Děkujeme za zprávu.<br>
        Budeme tě kontaktovat na email ihned, jak to bude možné.<br>
      `
            )
            break

        case "message-failure":
            setModalData(
                modal,
                "Chyba odeslání zprávy",
                `
        Zprávu se nepodařilo odeslat.
        Zkotrolujte, zda máte správně vyplněný formulář z zkuste to znovu.<br>
        V případě dalšího selhání nás kontaktujte, prosím, přímo na emailu - info@b-soul.cz.<br>
        Děkujeme.<br>
        <br>
        Detail chyby: ` +
                    JSON.stringify(details) +
                    `
      `
            )
            break

        case "signup-success":
            setModalData(
                modal,
                "Přihláška",
                `
        Tak a je to! Už jsi součástí B-SOUL.
        Teď už jen stačí vzít kecky do batohu
        a budeme tě čekat na první lekci. <br>
        Těšíme se na tebe.<br>
        <br>
        PS: Doplňující informace dostaneš do emailu.
      `
            )
            break

        case "signup-failure":
            setModalData(
                modal,
                "Chyba odeslání přihlášky",
                `
        Nepodařilo se odeslat přihlášku.<br>
        Prosím, zkotrolujte správnost vyplněné přihlášky.<br>
        V případě dalšího selhání nás kontaktujte, prosím, přímo na emailu - info@b-soul.cz.<br>
        <br>
        Detail chyby: ` +
                    JSON.stringify(details) +
                    `
     `
            )
            break

        case "kemp-2022":
            setModalData(
                modal,
                "B-SOUL KEMP & B-SOUL COMMUNITY TIME",
                `
        <div class="container-fluid">
          <div class="row">
            <a class="col-md-6" href="https://www.facebook.com/events/1155331575286331" title="B-SOUL COMMUNITY TIME na Facebooku">
              <img src="img/b-soul-community-time-2022.jpg" alt="Zveme Tě na naši show!">
            </a>
            <a class="col-md-6" href="https://forms.gle/Wr3wuqQML459Sh8y9" title="Přihláška na B-SOUL KEMP">
              <img src="img/b-soul-kemp-2022.jpg" alt="Zveme Tě na náš kemp!">
            </a>
          </div>
        </div>  
     `
            )
            break

        case "kemp-2023":
            setModalData(
                modal,
                "B-SOUL KEMP & B-SOUL COMMUNITY TIME",
                `
        <div class="container-fluid">
          <div class="row">
            <a class="col-md-12" href="https://forms.gle/xjy5j71tZr51VBtYA" title="Přihláška na B-SOUL KEMP">
              <img src="img/b-soul-kemp-2023.jpg" alt="Zveme Tě na náš kemp!">
            </a>
          </div>
        </div>  
      `
            )
            break
        case "welcome-banner":
            setModalData(
                modal,
                "B-SOUL DAY - WELCOME PARTY",
                `
          <div class="container-fluid">
            <div class="row">
                <img src="img/b-soul-welcome-party.jpg" alt="Zveme Tě welcome party!">
            </div>
          </div>  
        `
            )
            break
        default:
            setModalData(modal, "Zpráva", `Ahoj tanečníku!`)
    }
    modal.modal("show")
}

function setModalData(modal, title, body) {
    modal.find(".modal-title").text(title)
    modal.find(".modal-text").html(body)
}
