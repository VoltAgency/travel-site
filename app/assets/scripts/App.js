import $ from "jquery";
import MobileMenu from "./modules/MobilMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

var mobilMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".testimonial"),"60%");
