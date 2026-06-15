import banner from "@/assets/images/auth-banner.png"

const AuthLayout = ({
    children,
}) => {

    return (

        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

            <div className="hidden lg:flex items-center justify-center bg-linear-to-r from-blue-50 to-purple-50">

                <img
                    src={banner}
                    alt="Auth Banner"
                    className="w-[80%]"
                />

            </div>

            <div className="flex items-center justify-center p-8 bg-white">

                {children}

            </div>

        </div>
    )
}

export default AuthLayout
