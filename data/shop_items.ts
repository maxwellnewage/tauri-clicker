import { IconType } from 'react-icons'
import { BsHandIndexThumb, BsMinecartLoaded, BsBank } from 'react-icons/bs'
import { MdElderlyWoman, MdFactory } from 'react-icons/md'
import { GiFarmTractor } from 'react-icons/gi'
import { HiCursorClick } from 'react-icons/hi'

export enum ItemMethodEnum { 'M', 'A' }

export type ItemType = {
    name: string,
    icon: IconType,
    cost: number,
    give: number,
    method: ItemMethodEnum,
}

const items: ItemType[] = [
    {
        name: "Click",
        icon: HiCursorClick,
        cost: 1,
        give: 1,
        method: ItemMethodEnum.M
    },
    {
        name: "Cursor",
        icon: BsHandIndexThumb,
        cost: 1,
        give: 0.01,
        method: ItemMethodEnum.A
    },
    {
        name: "Abuela",
        icon: MdElderlyWoman,
        cost: 5,
        give: 0.02,
        method: ItemMethodEnum.A
    },
    {
        name: "Granja",
        icon: GiFarmTractor,
        cost: 10,
        give: 0.05,
        method: ItemMethodEnum.A
    },
    {
        name: "Mina",
        icon: BsMinecartLoaded,
        cost: 20,
        give: 0.07,
        method: ItemMethodEnum.A
    },
    {
        name: "Fabrica",
        icon: MdFactory,
        cost: 50,
        give: 0.10,
        method: ItemMethodEnum.A
    },
    {
        name: "Banca",
        icon: BsBank,
        cost: 100,
        give: 0.25,
        method: ItemMethodEnum.A
    },
]

export default items