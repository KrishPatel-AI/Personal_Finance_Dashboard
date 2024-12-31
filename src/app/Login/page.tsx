import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";
import Logo from "@/assets/13.png";

export default function LoginPage() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6  p-6 md:p-10 mt-16">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <div className="flex flex-col items-center gap-2">
                    <div className="flex  items-center gap-2">
                        <Image
                            src={Logo}
                            alt="Wealth Radar Logo"
                            width={60}
                            height={60}
                            className="w-10 h-10"
                        />
                        <h1 className="text-xl font-bold">
                            Welcome to{" "}
                            <span className="text-2xl font-bold">Wealth Radar</span>
                        </h1>
                    </div>

                    <div className="text-center text-sm">
                        AI-Powered Financial, Expense and Investment Tracker
                    </div>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}
