import HeaderOnly from "~/layouts/HeaderOnly"
import Following from "~/pages/Following"
import Home from "~/pages/Home"
import Live from "~/pages/Live"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"

const publishRoutes = [
    {path: '/', conponent: Home},
    {path: '/following', conponent: Following},
    {path: '/live', conponent: Live},
    {path: '/@:nickname', conponent: Profile},
    {path: '/upload', conponent: Upload, layout: HeaderOnly},
]

const privateRoutes = []

export {privateRoutes, publishRoutes}