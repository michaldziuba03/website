import React, {useState} from "react";
import { Icon } from "./icons/Icon";
import { Container } from "./Container";
import { Logo } from "./Logo";
import {Menu} from "./Menu";


export const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    function openMenu() {
        setMenuOpen(true);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className='absolute w-full z-50'>
            <Container>
                <div className='w-full flex justify-between py-6 pt-10 md:py-12 items-center'>
                    <Logo />
                    <Menu isOpen={isMenuOpen} onClose={closeMenu} />
                    <button className='md:hidden text-2xl' onClick={openMenu}>
                        <Icon name='menu' />
                    </button>
                </div>
            </Container>
        </header>
    )
}
