import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: "Marketplace Moderne",
      description: "Achetez et vendez vos vêtements sur une plateforme sécurisée et intuitive"
    },
    {
      title: "Paiements Sécurisés",
      description: "Transactions protégées avec les dernières normes de sécurité"
    },
    {
      title: "Mode Durable",
      description: "Favorisez l'économie circulaire et la mode responsable"
    },
    {
      title: "Multi-plateformes",
      description: "Compatible sur mobile, tablette et ordinateur"
    },
    {
      title: "Système d'évaluation",
      description: "Vendeurs notés par les acheteurs pour plus de confiance"
    },
    {
      title: "Suivi de Commandes",
      description: "Suivez vos achats en temps réel jusqu'à la livraison"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">TrandyPlace</h1>
          <nav>
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-purple-600 transition mr-4"
            >
              Se connecter
            </Link>
            <Link 
              to="/register" 
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              S'inscrire
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenue sur TrandyPlace</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            La plateforme e-commerce innovante pour acheter et vendre des vêtements tendances
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-white text-purple-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Découvrir les produits
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© 2025 TrandyPlace. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;