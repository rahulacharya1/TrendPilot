import MainLayout from "./MainLayout"

const DashboardLayout = ({
    children,
}) => {

    return (

        <MainLayout>

            <div className="space-y-8">

                {children}

            </div>

        </MainLayout>
    )
}

export default DashboardLayout
