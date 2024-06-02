// Module for the menu page.
export function getMenu() {
    const foodDish = [
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

    const menuContent = document.createElement('div');

    const menuHeading2 = document.createElement('h2');
    menuHeading2.textContent = "Our menu";
    const menuListContainer = document.createElement('div');
    menuListContainer.setAttribute('id', 'menulist');
    const menuList = document.createElement('ul');
    menuListContainer.appendChild(menuList);


    foodDish.forEach(dish => {
        const menuListItem = document.createElement('li');

        const foodDishName = document.createElement('h3');
        foodDishName.textContent = dish.name;
        menuListItem.appendChild(foodDishName);

        const foodDishPrice = document.createElement('span');
        foodDishPrice.textContent = dish.price;
        menuListItem.appendChild(foodDishPrice);

        const foodDishDesc = document.createElement('p');
        foodDishDesc.textContent = dish.description;
        menuListItem.appendChild(foodDishDesc);

        const foodDishImage = document.createElement('img');
        foodDishImage.src = dish.image;
        menuListItem.appendChild(foodDishImage);

        menuList.appendChild(menuListItem);

    });

    
    

    menuContent.appendChild(menuHeading2);
    menuContent.appendChild(menuListContainer);

    return menuContent;
}