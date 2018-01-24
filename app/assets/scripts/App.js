import $ from "jquery";
import MobileMenu from "./modules/MobilMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

var mobilMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".testimonial"),"60%");
var stickyHeader = new StickyHeader();
