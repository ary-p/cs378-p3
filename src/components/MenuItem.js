import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price, quantity, addItem, removeItem}) => {
    var path = "images/" + imageName
    return (
        <div className='container'>
            <div class = "row">
                <div class = "col-4">
                    <img src={path}/>
                </div>
                <div class = "col-8">
                    <div class = "row">
                        <h3>
                            {title}
                        </h3>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div class = "row">
                        <div class = "col-2">
                            {price}
                        </div>
                        <div class = "col-2">
                            <button onClick={removeItem} type = "button">-</button>
                        </div>
                        <div class = "col-4">
                            <h5>{quantity}</h5>
                        </div>
                        <div class = "col-2">
                            <button onClick={addItem} type = "button">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
