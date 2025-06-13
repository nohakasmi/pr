import React, { useState } from 'react';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = async e => {
    e.preventDefault();
    await login({ email, mot_de_passe: password });
    nav('/');
  };

  return (
    // Container plein écran avec dégradé de violet
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 to-indigo-600">

      {/* Contenu principal : carte de connexion centrée */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Se connecter
          </h1>

          <form onSubmit={submit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="
                  w-full
                  p-3
                  border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                  bg-white bg-opacity-80
                "
                required
              />
            </div>

            {/* Mot de passe */}
            <div>
              <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="
                  w-full
                  p-3
                  border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                  bg-white bg-opacity-80
                "
                required
              />
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              className="
                w-full
                py-3
                rounded-full
                bg-purple-600 text-white font-medium
                hover:bg-purple-700
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50
              "
            >
              Se connecter
            </button>
          </form>

          {/* Liens secondaires */}
          <div className="mt-6 text-center space-y-3">
            <p className="text-gray-700">
              Pas encore de compte ?{' '}
              <Link to="/register" className="text-purple-600 hover:underline font-medium">
                S'inscrire
              </Link>
            </p>
            <p>
              <Link
                to="/forgot-password"
                className="text-purple-600 hover:underline font-medium"
              >
                Mot de passe oublié ?
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

