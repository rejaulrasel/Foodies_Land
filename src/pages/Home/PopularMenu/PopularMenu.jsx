import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Category from './../Category/Category';
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems);
            })
    }, [])
    return (
        <div>
            <SectionTitle
                heading='FROM OUR Menu' subHeading='Check it Out'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 mb-12 space-y-4">
                {
                    menu.map(item => <MenuItem
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;