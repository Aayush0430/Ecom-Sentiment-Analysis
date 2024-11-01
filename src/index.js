import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Card from "./components/Card";
import { products } from "@/products/products";
import Cart from "@/components/Cart";
import Cartitem from "@/components/Cartitem";
import Plusminus from "@/components/Plusminus";
import Cartbill from "@/components/Cartbill";
import ContactInformation from "./pages/checkout/ContactInformation";
import OrderSummary from "./pages/checkout/OrderSummary";
import SummaryCart from "./components/SummaryCart";
import Product from "./components/Product";
import { removeSidebar } from "./helper/removeSidebar";
import { notify } from "./helper/notify";

// import Card from "@/components/Card"
export {
  Header,
  Product,
  SideMenu,
  Plusminus,
  Cartbill,
  SummaryCart,
  Cart,
  Cartitem,
  ContactInformation,
  OrderSummary,
  removeSidebar,
  notify,
  Card,
  products,
};
