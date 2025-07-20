import { useState } from 'react';
import { Clock, Star, Utensils, Leaf, ChefHat } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { image} from '.@/components/'

const Menu = () => {
  const menuCategories = [
    {
      id: 'breakfast',
      name: 'Breakfast',
      icon: '🌅',
      items: [
        {
          id: 1,
          name: "Selroti",
          description: " a traditional Nepali ring-shaped sweet fried dough made from rice flour",
          price: 20,
          image: "https://mail.google.com/mail/u/0?ui=2&ik=c60b78f42e&attid=0.1&permmsgid=msg-f:1838152366512763718&th=19826dd6a1097346&view=att&disp=safe&realattid=f_mdbe5k2b0&zw",
          chef: "Ms Kalpana Sharma",
          rating: 4.8,
          cookTime: "12 mins",
          tags: ["fluffy", "sweet"],
          isPopular: true
        },
        {
          id: 2,
          name: "MO:MO",
          description: "Nepali dumplings filled with spiced meat or vegetables",
          price: 12.99,
          image: "https://mail.google.com/mail/u/0?ui=2&ik=c60b78f42e&attid=0.1&permmsgid=msg-f:1838152605249389300&th=19826e0e36d942f4&view=att&disp=safe&realattid=f_mdbeagol0&zw",
          chef: "Healthy Start Co",
          rating: 4.7,
          cookTime: "12 mins",
          tags: ["healthy", "vegetarian"],
          isPopular: false
        },
        {
          id: 3,
          name: "Samosa",
          description: "a triangular savoury pastry fried in ghee or oil, containing spiced vegetables or meat.",
          price: 10.99,
          image: "https://mail.google.com/mail/u/0?ui=2&ik=c60b78f42e&attid=0.1&permmsgid=msg-f:1838152584147136172&th=19826e094d0e6eac&view=att&disp=safe&realattid=f_mdbea2zt0&zw",
          chef: "French Corner",
          rating: 4.9,
          cookTime: "18 mins",
          tags: ["sweet", "comfort"],
          isPopular: true
        }
      ]
    },{
      id: 'snacks',
      name: 'Snacks',
      icon: '🍿',
      items: [
        {
          id: 4,
          name: "Chatpate",
          description: "A popular Nepali snack made with puffed rice, vegetables, chowchow and spices",
          price: 50,
          image: "data:image/",
          chef: "",
          rating: 4.5,
          cookTime: "10 mins",
          tags: ["spicy", "snack", "quick"],
          isPopular: true
        },
        {
          id: 5,
          name: "Chow mein",
          description: "Stir-fried noodles with vegetables and your choice of protein",
          price: 50,
          image: "",
          chef: "Noodle Nirvana",
          rating: 4.8,
          cookTime: "5 mins",
          tags: ["", "noodles", "asian"],
          isPopular: false
        },
        {
          id: 6,
          name: " Chukauni",
          description: "A traditional Nepali potato salad with yogurt, spices, and herbs",
          price: 40,
          image: "",
          chef: "Roll It Up",
          rating: 4.6,
          cookTime: "8 mins",
          tags: ["vegetarian", "fresh"],
          isPopular: true
        },
        {
          id: 7,
          name: "Veg Pakora",
          description: "Crispy vegetable fritters made with chickpea flour and spices",
          price: 15,
          image: "",
          chef: "Pakora Palace",
          rating: 4.7,
          cookTime: "10 mins",
          tags: ["vegetarian", "snack"],
          isPopular: false
        }
      ]
    },
    {
      id: 'lunch',
      name: 'Lunch',
      icon: '🌞',
      items: [
        {
          id: 8,
          name: "",
          description: "Nutritious bowl with quinoa, roasted vegetables, chickpeas, and tahini dressing",
          price: 13.99,
          image: "https://bagaanthakali.com/wp-content/uploads/2025/06/thakali-2.png",
          chef: "Healthy Bites",
          rating: 4.6,
          cookTime: "20 mins",
          tags: ["vegan", "healthy", "gluten-free"],
          isPopular: true
        },
        {
          id: 9,
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
          id: 10,
          name: "fdf",
          description: "",
          price:5,
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
          id: 11,
          name: "Dal Bhaat Tarkari",
          description: "Traditional dal bhat with aromatic spices, served with basmati rice",
          price: 150,
          image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
          chef: "Maria's Kitchen",
          rating: 4.9,
          cookTime: "40 mins",
          tags: ["spicy", "comfort", "traditional"],
          isPopular: true
        },
        {
          id: 12,
          name: "Chiura-Masu",
          description: "A traditional Nepali dish of beaten rice with spiced meat and vegetables",
          price: 100,
          image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400",
          chef: "mRS. Kritika Adhikari",
          rating: 4.8,
          cookTime: "30 mins",
          tags: ["quick", "comfort", "traditional","protein"],
          isPopular: true
        },
        {
          id: 13,
          name: "",
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
          id: 14,
          name: "Ladddoo",
          description: "sweet made from flour, ghee, and sugar, often spiced with cardamom and garnished with nuts",
          price: 6.99,
          image: "",
          chef: "Sweet Treats Co",
          rating: 4.9,
          cookTime: "",
          tags: ["sweet", "homemade"],
          isPopular: true
        },
        {
          id: 15,
          name: "Ice cream",
          description: "Creamy ice cream with a variety of flavors and toppings",
          price: 8.99,
          image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400",
          chef: "Dessert Dreams",
          rating: 4.8,
          cookTime: "",
          tags: ["sweet", "creamy", "classic"],
          isPopular: true
        },
        {
          id: 16,
          name: "Artisan Ice Cream",
          description: "House-made ice cream in rotating flavors with premium ingredients",
          price: 5.99,
          image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
          chef: "Ice Cream Artisans",
          rating: 4.6,
          cookTime: "",
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
                          <span className="text-2xl font-bold text-primary">Rs. {item.price}</span>
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