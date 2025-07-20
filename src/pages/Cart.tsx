import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Grandma's Chicken Curry",
      price: 12.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
      chef: "Maria's Kitchen",
      cookTime: "30 mins"
    },
    {
      id: 2,
      name: "",
      price: 8.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
      chef: "Green Thumb Meals",
      cookTime: "10 mins"
    },
    {
      id: 3,
      name: "Chocolate Chip Cookies",
      price: 6.99,
      quantity: 3,
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
      chef: "Sweet Treats Co",
      cookTime: "20 mins"
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState('');

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'welcome10') {
      setAppliedPromo(promoCode);
      setPromoCode('');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedPromo === 'welcome10' ? subtotal * 0.1 : 0;
  const deliveryFee = subtotal > 25 ? 0 : 3.99;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + deliveryFee + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-12">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            Looks like you haven't added any delicious homemade meals to your cart yet.
          </p>
          <Link to="/shop">
            <Button className="gradient-primary border-0 shadow-warm">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/shop" className="hover-lift mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Your Cart</h1>
            <p className="text-muted-foreground">
              {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Image */}
                    <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">by {item.chef}</p>
                          <p className="text-sm text-muted-foreground">Cook time: {item.cookTime}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-lg font-medium w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary">
                            Rs. {(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Rs. {item.price.toFixed(2)} each
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-card sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">Order Summary</h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Promo Code
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      variant="outline" 
                      onClick={applyPromoCode}
                      disabled={!promoCode}
                    >
                      Apply
                    </Button>
                  </div>
                  {appliedPromo && (
                    <p className="text-sm text-green-600 mt-2">
                      ✓ Promo code "{appliedPromo}" applied
                    </p>
                  )}
                </div>

                <Separator className="my-4" />

                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Delivery Fee {subtotal > 25 && <span className="text-green-600">(Free)</span>}
                    </span>
                    <span className="font-medium">
                      {deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                {subtotal < 25 && (
                  <div className="mt-4 p-3 bg-accent rounded-lg">
                    <p className="text-sm text-foreground">
                      Add Rs. {(25 - subtotal).toFixed(2)} more for free delivery!
                    </p>
                  </div>
                )}

                <Link to="/checkout" className="block mt-6">
                  <Button className="w-full gradient-primary border-0 shadow-warm text-lg py-3">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Proceed to Checkout
                  </Button>
                </Link>

                <div className="mt-4 text-center">
                  <Link to="/shop" className="text-sm text-primary hover:underline">
                    Continue Shopping
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;