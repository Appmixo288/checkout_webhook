import axios from "axios";
export const appCheckoutUpdateWebhookHandler = async (topic, shop, body) => {
  console.log(
    "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
  );
  const dd = JSON.parse(body);
  console.log("body :", typeof dd);
  console.log("body dd:", dd.token);
  console.log(
    "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
  );
  const token = dd.token;
  // console.log("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");
  var config = {
    method: "get",
    url: `https://purchase-app-store.myshopify.com//admin/api/2022-10/checkouts/${token}.json`,
    headers: {
      "X-Shopify-Access-Token": "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",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log(
    "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
  );
  console.log("topic :", topic);
  console.log(
    "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
  );
  console.log("shop :", shop);
  console.log(
    "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
  );
};
