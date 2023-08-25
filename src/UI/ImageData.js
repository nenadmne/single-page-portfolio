import homePage from "../assets/Online-Store/Homepage.png";
import adminPage from "../assets/Online-Store/Admin-Homepage.png";
import loggedPage from "../assets/Online-Store/Logged-Homepage.png";
import productInfo from "../assets/Online-Store/ProductInfo.png";
import productReview from "../assets/Online-Store/ProductInfo-Review.png";
import userHp from "../assets/Online-Store/User.png";
import userEdit from "../assets/Online-Store/User-edit.png";
import userEditCity from "../assets/Online-Store/User-city.png";
import userCart from "../assets/Online-Store/Cart.png";
import deleteList from "../assets/Online-Store/Delete.png";
import orders from "../assets/Online-Store/Orders.png";
import editItem from "../assets/Online-Store/Item.png";
import userList from "../assets/Online-Store/Users.png";

const homepageImages = [homePage, loggedPage, adminPage];
const infoImages = [productInfo, productReview];
const userImages = [userHp, userEdit, userEditCity, userCart];
const adminImages = [editItem, orders, userList, deleteList];

const imageData = { homepageImages, infoImages, userImages, adminImages };

export default imageData;
