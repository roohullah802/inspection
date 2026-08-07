import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { SideBar } from "./SideBar"
import { Outlet } from "react-router-dom"

function DashboardLayout() {
    return (
        <>

            <div className="flex flex-row h-screen overflow-hidden">
                <div className="shrink-0">
                    <SideBar />
                </div>
                <div className="flex flex-col flex-1 min-w-0 min-h-0">
                    <div className="shrink-0">
                        <Header />
                    </div>

                    <div className="flex-1 min-h-0 overflow-y-auto">
                        <Outlet />
                    </div>

                    <div className="shrink-0">
                        <Footer />
                    </div>
                </div>
            </div>
        </>

    )
}

export default DashboardLayout