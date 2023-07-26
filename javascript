window.onload = function() {
  // Get the total price element
  var totalPriceElement = document.getElementById('totalPrice');

  // Create the tip input field
  var tipInput = document.createElement('input');
  tipInput.type = 'number';
  tipInput.id = 'tipInput';
  tipInput.min = 0;
  tipInput.placeholder = 'Enter tip percentage';

  // Create a label for the tip input field
  var tipLabel = document.createElement('label');
  tipLabel.htmlFor = 'tipInput';
  tipLabel.innerText = 'Tip: ';

  // Insert the tip field and label before the total price element
  totalPriceElement.parentNode.insertBefore(tipInput, totalPriceElement);
  totalPriceElement.parentNode.insertBefore(tipLabel, tipInput);

  // Calculate the total price including the tip when the tip input changes
  tipInput.onchange = function() {
    var tipPercentage = parseFloat(tipInput.value);
    var totalPrice = parseFloat(totalPriceElement.innerText);

    if (!isNaN(tipPercentage) && !isNaN(totalPrice)) {
      var tipAmount = totalPrice * (tipPercentage / 100);
      var totalPriceWithTip = totalPrice + tipAmount;
      totalPriceElement.innerText = totalPriceWithTip.toFixed(2);
    }
  };
}
