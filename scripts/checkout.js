import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';

renderOrderSummary();
renderPaymentSummary(); 

document.querySelector('.redirect-button').addEventListener('click', function () {
    // Redirige a la página 'datos-usuario.html'
    window.location.href = "./datos_usuario.html";
  });