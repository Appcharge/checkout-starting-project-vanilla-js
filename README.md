# Vanilla JS Appcharge Checkout Starting Project

## Using Appcharge Checkout Integration

To integrate Appcharge Checkout into your web application, follow these steps:

## Prerequisites

Before you begin, ensure you have the following:

- Run `npm i`
- Backend Route: Replace `"YOUR_BACKEND_ROUTE"` with the actual route of your backend service.
- Publisher Token: Replace `"PUBLISHER_TOKEN"` with your publisher token provided by Appcharge.

## Implementation

1.  Initialize Variables:

    Replace the placeholder values in the `mockData` object with your actual product details. This data represents the items to be purchased.

2.  Handle Purchase Button Click:

    Locate the `onClickToPurchase` function. This function is triggered when the purchase button is clicked. It initiates the checkout process.

3.  Configure Request Options:

    Customize the `requestOptions` object to set the appropriate headers. Ensure the "x-publisher-token" header contains your publisher token.

4.  Fetch Checkout Session:

    The `fetch` function is used to request a checkout session from the backend. Update the `${requestURL}/createSession` URL with your backend's actual endpoint.

5.  Handle Response:

    Once the response is received, the code checks if it's successful. If successful, it extracts the checkout session token and URL from the response.

6.  Initiate Appcharge Checkout:

    The `AppchargeCheckout` function is then called with the checkout URL and session token. This opens Appcharge's Checkout modal for the user to complete the purchase.

7.  Handle Checkout Closure:

    Customize the `onClose` callback to perform actions when the checkout modal is closed. The provided example logs a message, but you can implement your logic here.

8.  Error Handling:

    Implement error handling using the `.catch` block. This ensures that any errors during the checkout process are logged for debugging.

## Usage

Include the provided code in your web application where you want to trigger the Appcharge Checkout. Ensure that the necessary dependencies, including `fetch` and the `AppchargeCheckout` library, are correctly loaded in your project.

Now, when users click the purchase button, Appcharge Checkout will be initiated, allowing them to complete the purchase seamlessly.

Feel free to tailor the code further based on your specific requirements and application architecture.
