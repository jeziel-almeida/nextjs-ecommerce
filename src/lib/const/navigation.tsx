import { RiTruckFill, RiUser3Fill } from 'react-icons/ri';
import { TbShoppingCartFilled } from 'react-icons/tb';

export const CATEGORY_LINKS = [
    {
        label: "Mobile Phones",
        path: "/list"
    },
    {
        label: "Laptos & Desktops",
        path: "/list"
    },
    {
        label: "PC Games",
        path: "/list"
    },
    {
        label: "Home & Furniture",
        path: "/list"
    },
]

export const HEADER_NAV = [
    {
        label: "Profile",
        path: "/profile",
        icon: <RiUser3Fill fontSize={20} />
    },
    {
        label: "Orders",
        path: "/orders",
        icon: <RiTruckFill fontSize={20} />
    },
    {
        label: "My Cart",
        path: "/cart",
        icon: <TbShoppingCartFilled fontSize={20} />
    }
]