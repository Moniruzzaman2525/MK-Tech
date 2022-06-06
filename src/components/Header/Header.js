


import React from 'react';

const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div class="flex-none pr-5">
                    <h2>BN / EN</h2>
                </div>
            </div>
            <div className='px-10'>
                <div class="navbar bg-base-100">
                    <div class="flex-1">
                        <ul class="menu menu-horizontal p-0">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div class="flex-end">
                        <button class="btn btn-primary">Button</button>
                        <button class="btn btn-primary">Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;