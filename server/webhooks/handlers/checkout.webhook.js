import axios from "axios";
import { getShopData } from "../../services/db/shop/shop.services.js";

export const appCheckoutUpdateWebhookHandler = async (topic, shop, body) => {
  const shop_data = await getShopData(shop);
  const dd = JSON.parse(body);
  const token = dd.token;
  console.log("token : ", token);
  var config = {
    method: "get",
    url: `https://${shop}/admin/api/${process.env.SHOPIFY_API_VERSION}/checkouts/${token}.json`,
    headers: {
      "X-Shopify-Access-Token": `${shop_data.access_token}`,
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  console.log("shop :", shop);
};
