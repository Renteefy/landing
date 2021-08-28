import App from "./App.svelte";
import Survey from "./Survey.svelte";
import QRcode from "./QRcode.svelte";
export default {
  "/": App,
  "/survey": Survey,
  "/qrcode": QRcode,
};
