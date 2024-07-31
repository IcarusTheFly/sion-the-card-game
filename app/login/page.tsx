"use client";

import { Button } from "@nextui-org/button";
import { loginService } from "../auth/login";

export default function LoginPage() {
  const login = () => {
    // Call login service
    console.log("Logging in...");
  };

  return (
    <main className="bg-gray-900 text-white flex-grow">
      <section className="px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Loguéate!</h2>
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg">
              <form className="space-y-6" action={login}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                    minLength={6}
                    className="w-full mt-2 p-2 focus:border-gray-300 bg-slate-600 sm:text-sm md:w-full rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-5"
                  >
                    Contraseña
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    required
                    minLength={8}
                    className="w-full mt-2 p-2 focus:border-gray-300 bg-slate-600 sm:text-sm md:w-full rounded-md"
                  />
                </div>
                <div className="flex flex-row-reverse">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-[#ffd700] text-gray-800 rounded-md hover:bg-[#ffcc00] focus:ring-[#ffd700] focus:outline-none"
                  >
                    Log In
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
