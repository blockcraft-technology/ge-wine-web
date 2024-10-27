import { Link } from 'react-router-dom';
import { Wine, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Wine className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl">GE.WINE</span>
            </Link>
            <p className="text-muted-foreground">
              Transform your wine collection into digital assets on the Mantra Chain.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-muted-foreground hover:text-primary">Products</Link></li>
              <li><Link to="/marketplace" className="text-muted-foreground hover:text-primary">Marketplace</Link></li>
              <li><Link to="/my-cellar" className="text-muted-foreground hover:text-primary">My Cellar</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">FAQs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GE.WINE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}