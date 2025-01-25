import { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";

export interface footerContact {
    id: string | number
    icon: IconType
    title: string
    url: string
}

export const dataFooterContact: footerContact[] = [
    {
        id: 1,
        icon: IoLocationSharp,
        title: "Location",
        url: "/location"
    },
    {
        id: 2,
        icon: IoCall,
        title: "Call +62 8532 2701 120",
        url: "/call"
    },
    {
        id: 3,
        icon: MdMail,
        title: "linmidofficial@gmail.com",
        url: "/gmail"
    },
]

export interface footerSocialMedia {
    id: number | string
    icon: IconType
    url: string
}


export const dataFooterSocialMedia: footerSocialMedia[] = [
    {
        id: 1,
        icon: FaFacebookF,
        url: "https://www.facebook.com/qqqqmln"
    },
    {
        id: 2,
        icon: FaInstagram,
        url: "https://www.instagram.com/lindanmaulana01"
    },
    {
        id: 3,
        icon: FaLinkedinIn,
        url: "https://www.linkedin.com/in/lindan-maulana-ab86aa300/"
    },
]