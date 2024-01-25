const requestURL = "YOUR_BACKEND_ROUTE";
const PUBLISHER_TOKEN = "PUBLISHER_TOKEN";
let session;

const mockData = {
  customer: {
    id: "Appcharge",
    email: "fe@appcharge.com",
  },
  priceDetails: {
    price: 20000,
    currency: "USD",
  },
  offer: {
    name: "bundle-one",
    sku: "bundle-1",
    assetUrl:
      "https://png.pngtree.com/png-vector/20220612/ourmid/pngtree-golden-coin-game-ui-icon-png-image_5030176.png",
  },
  items: [
    {
      name: "Coins",
      assetUrl: "https://media-dev.appcharge.com/media/product-3.png",
      sku: "coins-01",
      quantity: 6580,
    },
    {
      name: "Tokens",
      assetUrl: "https://media-dev.appcharge.com/media/bills.png",
      sku: "tokens-01",
      quantity: 150,
    },
    {
      name: "Boosters",
      assetUrl: "https://media-dev.appcharge.com/media/booster.png",
      sku: "boosters-01",
      quantity: 3,
    },
  ],
};

const onClickToPurchase = () => {
  console.log("Purchase button clicked!");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-publisher-token": PUBLISHER_TOKEN,
    },
    body: JSON.stringify(mockData),
  };

  fetch(`${requestURL}/createSession`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      session = {
        token: data.checkoutSessionToken,
        url: data.url,
      };

      AppchargeCheckout({
        checkoutUrl: session.url,
        sessionToken: session.token,
        onClose: () => {
          console.log("Checkout Closed"); // Hook to the close event of Appcharge's Checkout
        },
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
