import path from "./path"

const navigations = [
    {
        id: '1',
        path: '/',
        text:'Home'
    },
    {
        id: '2',
        path: `/${path.ABOUT_US}`,
        text:'ABOUT US'
    },
    {
        id: '3',
        path: `/${path.OUR_AGENTS}`,
        text:'OUR AGENTS'
    },
    {
        id: '4',
        path: `/${path.PROPERTIES}`,
        text:'PROPERTIES'
    },
    {
        id: '5',
        path: `/${path.SEARCH}`,
        text:'SEARCH'
    },
]

export default navigations