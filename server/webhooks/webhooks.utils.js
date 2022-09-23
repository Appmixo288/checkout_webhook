import { WEBHOOK_TOPICS, WEBHOOK_PATH } from "../constants/index.js";
import { appUninstallWebhookHandler } from "./handlers/shop.webhook.js";
import { appCheckoutUpdateWebhookHandler } from "./handlers/checkout.webhook.js";
const WEBHOOKS = [
  {
    path: WEBHOOK_PATH,
    topic: WEBHOOK_TOPICS.APP_UNINSTALLED,
    webhookHandler: appUninstallWebhookHandler,
  },
  {
    path: WEBHOOK_PATH,
    topic: WEBHOOK_TOPICS.SHOP_UPDATE,
    webhookHandler: (topic, shop, body) => {
      console.log("00000000000000000000000000000000000000");
    },
  },
  {
    path: WEBHOOK_PATH,
    topic: WEBHOOK_TOPICS.CHECKOUTS_UPDATE,
    webhookHandler: appCheckoutUpdateWebhookHandler,
  },
  {
    path: WEBHOOK_PATH,
    topic: WEBHOOK_TOPICS.CHECKOUTS_DELETE,
    webhookHandler: (topic, shop, body) => {
      console.log("------------------------------------");
      console.log("---------CHECKOUTS_DELETE---------");
      console.log("------------------------------------");
    },
  },
];

export default WEBHOOKS;
