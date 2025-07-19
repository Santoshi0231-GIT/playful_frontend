import { useState } from 'react';
import { Clock, Star, Utensils, Leaf, ChefHat } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Menu = () => {
  const menuCategories = [
    {
      id: 'breakfast',
      name: 'Breakfast',
      icon: '🌅',
      items: [
        {
          id: 1,
          name: "Fluffy Buttermilk Pancakes",
          description: "Stack of 3 golden pancakes served with maple syrup and fresh berries",
          price: 9.99,
          image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
          chef: "Morning Glory Kitchen",
          rating: 4.8,
          cookTime: "15 mins",
          tags: ["vegetarian", "sweet"],
          isPopular: true
        },
        {
          id: 2,
          name: "Avocado Toast Deluxe",
          description: "Sourdough bread topped with smashed avocado, poached egg, and microgreens",
          price: 12.99,
          image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400",
          chef: "Healthy Start Co",
          rating: 4.7,
          cookTime: "12 mins",
          tags: ["healthy", "vegetarian"],
          isPopular: false
        },
        {
          id: 3,
          name: "Classic French Toast",
          description: "Thick-cut brioche soaked in vanilla custard, grilled to perfection",
          price: 10.99,
          image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400",
          chef: "French Corner",
          rating: 4.9,
          cookTime: "18 mins",
          tags: ["sweet", "comfort"],
          isPopular: true
        }
      ]
    },
    {
      id: 'lunch',
      name: 'Lunch',
      icon: '🌞',
      items: [
        {
          id: 4,
          name: "Quinoa Buddha Bowl",
          description: "Nutritious bowl with quinoa, roasted vegetables, chickpeas, and tahini dressing",
          price: 13.99,
          image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400",
          chef: "Healthy Bites",
          rating: 4.6,
          cookTime: "20 mins",
          tags: ["vegan", "healthy", "gluten-free"],
          isPopular: true
        },
        {
          id: 5,
          name: "Gourmet Grilled Sandwich",
          description: "Artisan bread with turkey, brie, arugula, and cranberry sauce",
          price: 11.99,
          image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400",
          chef: "Sandwich Masters",
          rating: 4.5,
          cookTime: "15 mins",
          tags: ["comfort", "hearty"],
          isPopular: false
        },
        {
          id: 6,
          name: "Mediterranean Salad",
          description: "Fresh greens with feta, olives, tomatoes, and lemon vinaigrette",
          price: 10.99,
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
          chef: "Mediterranean Delights",
          rating: 4.7,
          cookTime: "10 mins",
          tags: ["vegetarian", "healthy", "fresh"],
          isPopular: true
        }
      ]
    },
    {
      id: 'dinner',
      name: 'Dinner',
      icon: '🌙',
      items: [
        {
          id: 7,
          name: "Grandma's Chicken Curry",
          description: "Traditional chicken curry with aromatic spices, served with basmati rice",
          price: 15.99,
          image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
          chef: "Maria's Kitchen",
          rating: 4.9,
          cookTime: "35 mins",
          tags: ["spicy", "comfort", "traditional"],
          isPopular: true
        },
        {
          id: 8,
          name: "Homestyle Pasta Bolognese",
          description: "Rich meat sauce with fresh herbs over perfectly cooked pasta",
          price: 14.50,
          image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400",
          chef: "Tony's Table",
          rating: 4.8,
          cookTime: "30 mins",
          tags: ["italian", "hearty", "comfort"],
          isPopular: true
        },
        {
          id: 9,
          name: "Herb-Crusted Salmon",
          description: "Atlantic salmon with herb crust, roasted vegetables, and lemon butter",
          price: 18.99,
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
          chef: "Seaside Kitchen",
          rating: 4.7,
          cookTime: "25 mins",
          tags: ["healthy", "gourmet", "protein"],
          isPopular: false
        }
      ]
    },
    {
      id: 'dessert',
      name: 'Desserts',
      icon: '🍰',
      items: [
        {
          id: 10,
          name: "Classic Chocolate Chip Cookies",
          description: "Soft-baked cookies with premium chocolate chips, served warm",
          price: 6.99,
          image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
          chef: "Sweet Treats Co",
          rating: 4.9,
          cookTime: "20 mins",
          tags: ["sweet", "homemade"],
          isPopular: true
        },
        {
          id: 11,
          name: "New York Cheesecake",
          description: "Creamy cheesecake with graham cracker crust and berry compote",
          price: 8.99,
          image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400",
          chef: "Dessert Dreams",
          rating: 4.8,
          cookTime: "5 mins",
          tags: ["sweet", "creamy", "classic"],
          isPopular: true
        },
        {
          id: 12,
          name: "Artisan Ice Cream",
          description: "House-made ice cream in rotating flavors with premium ingredients",
          price: 5.99,
          image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
          chef: "Ice Cream Artisans",
          rating: 4.6,
          cookTime: "2 mins",
          tags: ["sweet", "cold", "artisan"],
          isPopular: false
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('breakfast');

  const addToCart = (item: any) => {
    console.log('Added to cart:', item);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Our Homemade Menu
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our collection of carefully crafted dishes made with love by passionate home cooks. 
            Each meal tells a story of tradition, flavor, and community.
          </p>
        </div>

        {/* Menu Navigation */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center space-x-2"
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center justify-center space-x-3">
                  <span className="text-4xl">{category.icon}</span>
                  <span>{category.name}</span>
                </h2>
                <p className="text-muted-foreground">
                  Start your day right with our wholesome breakfast options
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.items.map((item) => (
                  <Card key={item.id} className="food-card overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3 aspect-square md:aspect-auto overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      {item.isPopular && (
                        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                          Popular
                        </Badge>
                      )}
                    </div>
                    
                    <CardContent className="md:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                          <span className="text-2xl font-bold text-primary">${item.price}</span>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                        
                        <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <ChefHat className="h-4 w-4 mr-1" />
                            {item.chef}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {item.cookTime}
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 mr-1 text-yellow-500 fill-current" />
                            {item.rating}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag === 'vegetarian' && <Leaf className="h-3 w-3 mr-1" />}
                              {tag === 'vegan' && <Leaf className="h-3 w-3 mr-1" />}
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => addToCart(item)}
                        className="bg-secondary hover:bg-secondary/90 w-full"
                      >
                        <Utensils className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Chef's Special Section */}
        <section className="mt-20 gradient-hero rounded-lg p-8 md:p-12 text-center">
          <ChefHat className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Chef's Daily Special
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Every day, our featured home chef creates something special just for you. 
            Limited quantities available - order early to avoid disappointment!
          </p>
          <Button size="lg" className="gradient-primary border-0 shadow-warm">
            View Today's Special
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Menu;