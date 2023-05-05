import { Button, Tabs } from "flowbite-react";
import { HiInbox, HiShoppingCart, HiOutlineHeart } from "react-icons/hi";
const Footer = () => {
  return (
    <>
      <div className=" w-[100%] fixed bottom-0 left-0 z-50">
        <div className="w-[100%]  bg-[#004aaa] shadow-md flex justify-center items-center py-3">
          <Button className="mr-3 rounded-lg footer-btn">
            <HiInbox className="min-[450px]:mr-2 h-5 w-5" />
            <span className="max-[450px]:hidden">Inbox</span>
          </Button>
          <Button className="mr-3 rounded-lg footer-btn">
            <HiShoppingCart className="min-[450px]:mr-2 h-5 w-5" />
            <span className="max-[450px]:hidden">Inbox</span>
          </Button>
          <Button className="mr-3 rounded-lg footer-btn">
            <HiOutlineHeart className="min-[450px]:mr-2 h-5 w-5" />
            <span className="max-[450px]:hidden">Inbox</span>
          </Button>
        </div>
      </div>
    </>
  );
};
export default Footer;
