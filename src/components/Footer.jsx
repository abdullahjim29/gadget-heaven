const Footer = () => {
  return (
    <footer className="bg-white py-6 mt-20">
      <div className="w-10/12 mx-auto">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold">Gadget Heaven</h2>
          <p className="text-[#09080F99]">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto ">
            <div>
                <h4 className="text-xl font-bold mb-3">Services</h4>
                <ul className="space-y-1">
                    <li>Product Support</li>
                    <li>Order Tracking</li>
                    <li>Shipping & Delivery</li>
                    <li>Returns</li>
                </ul>
            </div>

            <div>
                <h4 className="text-xl font-bold mb-3">Company</h4>
                <ul className="space-y-1">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div>
                <h4 className="text-xl font-bold mb-3">Legal</h4>
                <ul className="space-y-1">
                    <li>Terms of Servicet</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
