import { useState, useMemo } from 'react';
import { Search, Filter, Star, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMealType, setSelectedMealType] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [sortBy, setSortBy] = useState('popular');

  // Mock product data
  const products = [
    {
      id: 1,
      name: "Laddoo",
      price: 25,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
      chef: "Maria's Kitchen",
      category: "main",
      mealType: "dinner",
      tags: ["spicy", "comfort food"],
      cookTime: "30 mins"
    },
    {
      id: 2,
      name: "Homestyle Pasta Bolognese",
      price: 14.50,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400",
      chef: "Tony's Table",
      category: "main",
      mealType: "dinner",
      tags: ["italian", "hearty"],
      cookTime: "25 mins"
    },
    {
      id: 3,
      name: "Fresh Garden Salad",
      price: 8.99,
      rating: 4.7,
      reviews: 76,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
      chef: "Green Thumb Meals",
      category: "salad",
      mealType: "lunch",
      tags: ["healthy", "vegetarian"],
      cookTime: "10 mins"
    },
    {
      id: 4,
      name: "",
      price: 90,
      rating: 4.6,
      reviews: 142,
      image: "https://mail.google.com/mail/u/0?ui=2&ik=c60b78f42e&attid=0.1&permmsgid=msg-f:1838152366512763718&th=19826dd6a1097346&view=att&disp=safe&realattid=f_mdbe5k2b0&zw",
      chef: "Morning Glory Kitchen",
      category: "main",
      mealType: "breakfast",
      tags: ["sweet", "fluffy"],
      cookTime: "15 mins"
    },
    {
      id: 5,
      name: "Chocolate Chip Cookies",
      price: 6.99,
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
      chef: "Sweet Treats Co",
      category: "dessert",
      mealType: "dessert",
      tags: ["sweet", "homemade"],
      cookTime: "20 mins"
    },
    {
      id: 6,
      name: "Selroti",
      price: 20,
      rating: 4.5,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400",
      chef: "Healthy Bites",
      category: "breakfast",
      mealType: "breakfast",
      tags: ["sweet", "fluffy"],
      cookTime: "12 mins"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'main', label: 'Main Courses' },
    { value: 'salad', label: 'Salads' },
    { value: 'bowl', label: 'Bowls' },
    { value: 'dessert', label: 'Desserts' }
  ];

  const mealTypes = [
    { value: 'all', label: 'All Meals' },
    { value: 'breakfast', label: 'Breakfast' },
    { value: 'lunch', label: 'Lunch' },
    { value: 'dinner', label: 'Dinner' },
    { value: 'dessert', label: 'Dessert' }
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.chef.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesMealType = selectedMealType === 'all' || product.mealType === selectedMealType;
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        
        return matchesSearch && matchesCategory && matchesMealType && matchesPrice;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'price-low': return a.price - b.price;
          case 'price-high': return b.price - a.price;
          case 'rating': return b.rating - a.rating;
          case 'name': return a.name.localeCompare(b.name);
          default: return b.reviews - a.reviews; // popular
        }
      });
  }, [searchQuery, selectedCategory, selectedMealType, priceRange, sortBy, products]);

  const addToCart = (product: any) => {
    // In a real app, this would update global cart state
    console.log('Added to cart:', product);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Shop Homemade Delights
          </h1>
          <p className="text-muted-foreground text-lg">
            Fresh, authentic meals from passionate home cooks
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="text-sm font-medium text-foreground mb-2 block">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search dishes or chefs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Meal Type Filter */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Meal Type</label>
              <Select value={selectedMealType} onValueChange={setSelectedMealType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {mealTypes.map(type => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Price Range: Rs. {priceRange[0]} - Rs. {priceRange[10000]}
              </label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={10000}
                min={0}
                step={1}
                className="w-full"
              />
            </div>

            {/* Sort */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} dishes
          </p>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filters applied</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="food-card overflow-hidden">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {product.cookTime}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold line-clamp-1">{product.name}</h3>
                  <div className="flex items-center ml-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-muted-foreground ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-3">by {product.chef}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                  <Button 
                    onClick={() => addToCart(product)}
                    className="bg-secondary hover:bg-secondary/90"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No dishes found</h3>
            <p className="text-muted-foreground">Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;