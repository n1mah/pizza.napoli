import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex py-5' dir='rtl'>
            <ul className='flex gap-x-[30px]'>
                <li>خانه</li>
                <li>منو</li>
                <li>درباره ما</li>
                <li>سبد خرید</li>
            </ul>
        </nav>
    );
};

export default Navbar;