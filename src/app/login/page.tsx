import React from "react";
import Image from "next/image";
import { CircleUser } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="flex h-screen bg-bege justify-center">
      <div className="w-1/2 h-full hidden md:block">
        <Image
          src="/image/login.png" 
          alt="Discos"
          width={800}
          height={800}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="lg:w-1/2 h-full flex items-center justify-center p-8 w-screen">
        <div className="bglogin shadow-lg rounded-lg p-8 max-w-md w-full">
          <div className="flex flex-col items-center mb-8">
            <CircleUser className="text-bege w-40 h-40" />
            <h2 className="text-3xl font-bold text-center mb-4 text-bege">DisCode</h2>
          </div>

          
          <form>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                Usuário
              </label>
              <input
                id="username"
                type="text"
                placeholder="Usuário"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Senha
              </label>
              <input
                id="password"
                type="password"
                placeholder="Senha"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-amarelo text-white font-bold py-2 w-14 h-14 rounded-full hover:bg-salmao focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
            <div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
