import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';



export default function Register() {
  const [info, setInfo] = useState({ name: '', email: '', mot_de_passe: '' });
  const { register } = useAuth();
  const nav = useNavigate();

  const submit = async e => {
    e.preventDefault();
    await register(info);
    nav('/');
  };

  return (
    // Conteneur plein écran avec dégradé violet
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 to-indigo-600">

      {/* Contenu principal */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            S'inscrire
          </h2>
          <form onSubmit={submit} className="space-y-5">
            {/* Nom */}
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                id="name"
                placeholder="Votre nom"
                value={info.name}
                onChange={e => setInfo({ ...info, name: e.target.value })}
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
            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Votre email"
                value={info.email}
                onChange={e => setInfo({ ...info, email: e.target.value })}
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
              <label htmlFor="mot_de_passe" className="block mb-2 font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                id="mot_de_passe"
                placeholder="Votre mot de passe"
                value={info.mot_de_passe}
                onChange={e => setInfo({ ...info, mot_de_passe: e.target.value })}
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

            {/* Bouton de création */}
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
              Créer un compte
            </button>
          </form>

          {/* Liens secondaires */}
          <div className="mt-6 text-center space-y-3">
            <p className="text-gray-700">
              Déjà un compte ?{' '}
              <Link to="/login" className="text-purple-600 hover:underline font-medium">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
