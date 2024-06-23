// Module for the menu page.
export function getMenu() {
    // Array of food dishes
    const foodDishes = [
        {
            name: 'Lasagna Bolognese',
            description: 'Traditional Italian lasagna with layers of pasta, rich Bolognese sauce, creamy béchamel, and Parmesan cheese',
            price: '8 EUR',
            image: 'https://images.unsplash.com/photo-1619895092538-128341789043?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Bruschetta',
            description: 'Grilled bread topped with fresh tomatoes, basil, garlic, and a drizzle of olive oil',
            price: '4 EUR',
            image: 'https://plus.unsplash.com/premium_photo-1677686707252-16013f466e61?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        },
        {
            name: 'Tiramisu',
            description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder',
            price: '5 EUR',
            image: 'https://images.unsplash.com/photo-1568627175730-73d05bd69ca9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Spaghetti Bolognese',
            description: 'Classic Spaghetti Bolognese dish where Spaghetti pasta are tossed with a rich, delicious Bolognese sauce. Topped with parmesan and fresh basil',
            price: '7 EUR',
            image: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
            


    ];

    // Elements declarations
    const menuContent = document.createElement('div');
    const menuHeading = document.createElement('h2');
    const menuListContainer = document.createElement('div');
    const menuList = document.createElement('ul');

    // Setting content and attributes
    menuHeading.textContent = "Our menu";
    menuListContainer.setAttribute('id', 'menulist');

    // Writing out each dish in the menu
    foodDishes.forEach(dish => {
        // Elements declarations
        const foodDishName = document.createElement('h3');
        const foodDishPrice = document.createElement('span');
        const foodDishDesc = document.createElement('p');
        const foodDishImage = document.createElement('img');
        const menuListItem = document.createElement('li');

        // Setting content and attributes for each element
        foodDishName.textContent = dish.name;
        foodDishPrice.textContent = dish.price;
        foodDishDesc.textContent = dish.description;
        foodDishImage.src = dish.image;
        foodDishImage.alt = dish.name;
        
        // Appending each element to the menu list item
        menuListItem.appendChild(foodDishName);
        menuListItem.appendChild(foodDishPrice);
        menuListItem.appendChild(foodDishDesc);
        menuListItem.appendChild(foodDishImage);

        // Appending the menu list items to the menu list
        menuList.appendChild(menuListItem);
    });

    // Appending the menu elements to the menu content
    menuListContainer.appendChild(menuList);
    menuContent.appendChild(menuHeading);
    menuContent.appendChild(menuListContainer);

    return menuContent;
}