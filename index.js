// Function to calculate total with default shipping
function calculateTotal(subtotal, shipping = 2.50) {
  return subtotal + shipping;
}

// Function to print top three headlines
function printTopThreeHeadlines(...headlines) {
  return headlines.slice(0, 3).join('\n');
}

