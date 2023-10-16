import { TestBed, fakeAsync } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import {
  ShoppingCart,
  ShoppingCartItem,
  WishlistService,
} from './wishlist.service';

describe('WishlistService', () => {
  let service: WishlistService;

  const sampleItem: ShoppingCartItem = {
    id: '1',
    name: 'Sample Item',
    image: 'sample.jpg',
    price: 10,
    quantity: 1,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishlistService],
    });
    service = TestBed.inject(WishlistService);

    service['shoppingCart'] = new BehaviorSubject<ShoppingCart>({
      totalQuantity: 0,
      totalAmount: 0,
      listOfItems: [],
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#addToWishlist', () => {
    it('should add an item to the shopping cart', fakeAsync(() => {
      service.addToWishlist(sampleItem);
      const shoppingCart = service['shoppingCart'].getValue();
      expect(shoppingCart.totalQuantity).toBe(1);
      expect(shoppingCart.totalAmount).toBe(10);
    }));

    it('should increment quantity when adding an existing item to the cart', fakeAsync(() => {
      service.addToWishlist(sampleItem);
      service.addToWishlist(sampleItem);
      const shoppingCart = service['shoppingCart'].getValue();
      expect(shoppingCart.totalQuantity).toBe(2);
      expect(shoppingCart.totalAmount).toBe(20);
    }));
  });

  describe('#removeFromWishlist', () => {
    it('should remove an item from the shopping cart', fakeAsync(() => {
      service.addToWishlist(sampleItem);
      service.removeFromWishlist(sampleItem);
      const shoppingCart = service['shoppingCart'].getValue();
      expect(shoppingCart.totalQuantity).toBe(0);
      expect(shoppingCart.totalAmount).toBe(0);
    }));
  });

  describe('#changeQuantity', () => {
    it('should update quantity of an item in the shopping cart', fakeAsync(() => {
      const itemWithQuantity: ShoppingCartItem = {
        ...sampleItem,
        quantity: 3,
      };
      service.addToWishlist(itemWithQuantity);
      itemWithQuantity.quantity = 1;
      service.changeQuantity(itemWithQuantity);
      const shoppingCart = service['shoppingCart'].getValue();
      expect(shoppingCart.totalQuantity).toBe(1);
      expect(shoppingCart.totalAmount).toBe(10);
    }));
  });

  describe('#updateTotalPrice', () => {
    it('should calculate the total price of items in the cart', fakeAsync(() => {
      service.addToWishlist(sampleItem);
      const totalPrice = service['updateTotalPrice']();
      expect(totalPrice).toBe(10);
    }));
  });

  describe('#calculateItemCost', () => {
    it('should calculate the total price with the quantity of the items', fakeAsync(() => {
      service.addToWishlist(sampleItem);
      const totalPrice = service['calculateItemCost']({
        id: '1',
        name: 'Sample Item',
        image: 'sample.jpg',
        price: 10,
        quantity: 3,
      });
      expect(totalPrice).toBe(30);
    }));
  });

  describe('#updateTotalQuantity', () => {
    beforeEach(() => {
      service['shoppingCart'] = new BehaviorSubject<ShoppingCart>({
        totalQuantity: 0,
        totalAmount: 0,
        listOfItems: [
          {
            quantity: 2,
          } as ShoppingCartItem,
          {
            quantity: 4,
          } as ShoppingCartItem,
        ],
      });
    });
    it('should update the total quantity', fakeAsync(() => {
      const totalQuantity = service['updateTotalQuantity']();
      expect(totalQuantity).toBe(6);
    }));
  });
});
