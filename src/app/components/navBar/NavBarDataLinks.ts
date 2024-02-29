import { SportsEsportsOutlined, ElectricBikeOutlined, LaptopChromebookOutlined, MenuBookOutlined } from "@mui/icons-material";

export const menuItems = [
    { text: "Bikes", Icon: ElectricBikeOutlined },
    { text: "Electronics", Icon: LaptopChromebookOutlined },
    { text: "Books", Icon: MenuBookOutlined },
    { text: "Games", Icon: SportsEsportsOutlined },
];

export const vendorAccountItems = [
    { id: "dashboard", title: "Dashboard", subLinks: [] },
    {
        id: "products",
        title: "Products",
        subLinks: [
            { id: "allProduct", title: "All Product" },
            { id: "addEditProduct", title: "Add/Edit Product" },
        ],
    },
    {
        id: "orders", title: "Orders",
        subLinks: [
            { id: "allOrders", title: "All Orders" },
            { id: "orderDEtails", title: "Order Details" },
        ]
    },
    { id: "profile", title: "Profile", subLinks: [] },
];

export const userAccountItems = [
    {
        id: "orders", title: "Orders",
        subLinks: [
            { id: "ordersList", title: "Orders List" },
            { id: "orderDEtails", title: "Order Details" },
        ]
    },
    {
        id: "profile", title: "Profile",
        subLinks: [
            { id: "viewProfile", title: "View Profile" },
            { id: "editProfile", title: "Edit Profile" },
        ]
    },
    {
        id: "address", title: "Address",
        subLinks: [
            { id: "addressList", title: "Address List" },
            { id: "addAddress", title: "Add Address" },
        ]
    },
    {
        id: "supportTickets",
        title: "Support Tickets",
        subLinks: [
            { id: "allTickets", title: "All Tickets" },
            { id: "ticketDetails", title: "Ticket Details" },
        ],
    },
    { id: "wishlist", title: "Wishlist", subLinks: [] },
];

export const pagesItems = [
    {
        id: "salesPage", title: "Sales Page",
        subLinks: [
            { id: "version1", title: "Version 1" },
            { id: "version2", title: "Version 2" },
        ]
    },
    {
        id: "vendor", title: "Vendor",
        subLinks: [
            { id: "allVendors", title: "All Vendors" },
            { id: "vendorStore", title: "Vendor Store" },
        ]
    },
    {
        id: "shop", title: "Shop",
        subLinks: [
            { id: "searchProduct", title: "Search Product" },
            { id: "singleProduct", title: "Single Product" },
            { id: "chart", title: "Chart" },
            { id: "checkout", title: "Checkout" },
            { id: "alternativeCheckout", title: "Alternative Checkout" },
            { id: "orderConfirmation", title: "Order Confirmation" },
        ]
    },
    {
        id: "auth",
        title: "Auth",
        subLinks: [
            { id: "login", title: "Login" },
            { id: "register", title: "Register" },
        ],
    },
];

export const HomeItems = [
    {
        id: "market", title: "Market",
        subLinks: [
            { id: "market1", title: "Market 1" },
            { id: "market2", title: "Market 2" },
        ]
    },
    {
        id: "gadget", title: "Gadget",
        subLinks: [
            { id: "gadget1", title: "Gadget 1" },
            { id: "gadget2", title: "Gadget 2" },
        ]
    },
    {
        id: "grocery", title: "Grocery",
        subLinks: [
            { id: "grocery1", title: "Grocery 1" },
            { id: "grocery2", title: "Grocery 2" },
            { id: "grocery3", title: "Grocery 3" },
        ]
    },
    {
        id: "fashion", title: "Fashion",
        subLinks: [
            { id: "fashion1", title: "Fashion 1" },
            { id: "fashion2", title: "Fashion 2" },
            { id: "fashion3", title: "Fashion 3" },
        ]
    },
    { id: "medical", title: "Medical", subLinks: [] },
    { id: "giftStore", title: "Gift Store", subLinks: [] },
    { id: "furniture1", title: "Furniture 1", subLinks: [] },
    { id: "furniture2", title: "Furniture 2", subLinks: [] },
    { id: "healthAndBeauty", title: "Health and Beauty", subLinks: [] },
];