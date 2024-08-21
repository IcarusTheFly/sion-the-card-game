"use client";

import { Button } from "@nextui-org/button";
import { loginService } from "../db/auth/login";
import { FormEvent, useState } from "react";
import ButtonSpinner from "../icons/ButtonSpinner";
import { useRouter } from "next/navigation";
import { useUserDataContext } from "../UserDataContext";

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const { createSession, fetchSession } = useUserDataContext();

  const login = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const result = await loginService(formData.email, formData.password);
    setIsLoading(false);
    if (!result.data) {
      setErrorMessage("Nombre de usuario o contraseña incorrectos");
    } else if (result.error !== "") {
      setErrorMessage(result.error);
    } else {
      await createSession(result.data);
      setErrorMessage("");
      fetchSession();
      router.push("/");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="bg-gray-900 text-white flex-grow">
      <section className="px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">¡Loguéate!</h2>
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg">
              <form className="space-y-6" onSubmit={login}>
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
                    name="email"
                    placeholder="Email"
                    required
                    minLength={6}
                    onChange={handleChange}
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
                    name="password"
                    placeholder="Contraseña"
                    required
                    minLength={8}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 focus:border-gray-300 bg-slate-600 sm:text-sm md:w-full rounded-md"
                  />
                </div>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
                  <p className="text-red-500 text-sm mt-4 sm:my-auto sm:py-2">
                    {errorMessage}
                  </p>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full sm:w-auto bg-[#ffd700] text-gray-800 rounded-md hover:bg-[#ffcc00] focus:ring-[#ffd700] focus:outline-none
                      ${isLoading && "cursor-not-allowed opacity-50"}
                    `}
                  >
                    {isLoading ? <ButtonSpinner size="5" /> : "Log In"}
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
