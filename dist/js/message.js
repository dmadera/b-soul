$(document).ready(function() {
  //showMessage('signup-success', null);
});

function showMessage(type, details) {
  var modal = $('#modal-info');

  switch(type) {
    case 'message-success':
      setModalData(modal, "Zpráva", `
        Děkujeme za zprávu.<br>
        Budeme Tě kontaktovat na email ihned, jak to bude možné.<br>
      `);
      break;

    case 'message-failure':
      setModalData(modal, "Chyba odeslání zprávy", `
        Zprávu se nepodařilo odeslat.
        Zkotrolujte, zda máte správně vyplněný formulář z zkuste to znovu.<br>
        V případě dalšího selhání nás kontaktujte, prosím, přímo na emailu - info@b-soul.cz.<br>
        Děkujeme.<br>
        <br>
        Detail chyby: ` + JSON.stringify(details) + `
      `);
      break;

    case 'signup-success':
      setModalData(modal, "Přihláška", `
        Tak a je to! Už jsi součástí B-SOUL.
        Teď už jen stačí vzít kecky do batohu
        a budeme tě čekat na první lekci. <br>
        Těšíme se na tebe.<br>
        <br>
        PS: Doplňující informace dostaneš do emailu.
      `);
      break;

    case 'signup-failure':
      setModalData(modal, "Chyba odeslání přihlášky", `
        Nepodařilo se odeslat přihlášku.<br>
        Prosím, zkotrolujte správnost vyplněné přihlášky.<br>
        V případě dalšího selhání nás kontaktujte, prosím, přímo na emailu - info@b-soul.cz.<br>
        <br>
        Detail chyby: ` + JSON.stringify(details) + `
     `);

    default:
      setModalData(modal, "Zpráva", `Ahoj tanečníku!`);
  }
  modal.modal('show');
}

function setModalData(modal, title, body) {
  modal.find(".modal-title").text(title);
  modal.find(".modal-text").html(body);
}
