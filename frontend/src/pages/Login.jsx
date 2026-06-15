import AuthLayout from "@/layouts/AuthLayout"

const Login = () => {

    return (

        <AuthLayout>

            <div className="w-full max-w-md">

                <h1 className="text-4xl font-bold">
                    Welcome Back
                </h1>

                <p className="text-gray-500 mt-3">
                    Login to your account
                </p>

                <form className="mt-8 space-y-5">

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-4 rounded-xl border"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-4 rounded-xl border"
                    />

                    <button className="w-full py-4 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold">

                        Login

                    </button>

                </form>

            </div>

        </AuthLayout>
    )
}

export default Login
