import { StaticImageData } from "next/image";

export interface AdminType{
    name: string;
    email: string;
    phone: string;
    isAdmin: true
}
export interface UserType{
    name: string;
    email:string;
    phone: string;
}
export interface NavlinkTypes{
    label: string;
    href: string;
    icon: StaticImageData
}