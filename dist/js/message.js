$(document).ready(function() {
  showMessage('signup-success', null);
});

function showMessage(type, details) {
  var modal = $('#modal-info');

  switch(type) {
    case 'message-success':
      setModalData(modal, "Zpráva", `
        Děkujeme za zprávu.
        Budeme Tě kontaktovat na email ihned, jak to bude možné.
      `);
      break;

    case 'message-failure':
      setModalData(modal, "Zpráva", `
        Zprávu se nepodařilo odeslat.
        Kontaktujte nás, prosím, přímo na emailu - info@b-soul.cz.
        Děkujeme.
      `);
      break;

    case 'signup-success':
      setModalData(modal, "Přihláška", `
        Tak a je to! Už jsi součástí B-SOUL.
        Teď už jen stačí vzít kecky do batohu
        a budeme tě čekat na první lekci. <br>
        Těšíme se na tebe.<br><br>
        PS: Doplňující informace dostaneš do emailu.
      `);
      break;

    case 'signup-failure':
      setModalData(modal, "Přihláška", `
        Nepodařilo se odeslat přihlášku.
        Prosím, kontaktuj nás o této chybě na emailu - info@b-soul.cz.<br>
        Pokusíme se s tím něco udělat.<br>
        Děkujeme.
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
