import './App.css';
import {Header} from "./ui/components/header/header.component";
import {ItemCard} from "./ui/components/item-card/item-card.component";
import Moca from "./assets/a-moca-dos-olhos.png"
import Cogus from "./assets/deusa-cogus.png"
import Aquarelinha from "./assets/aquarelinha-verde.png"
import {CategoriesComponent} from "./ui/components/categories/categories.component";

function App() {
    const items = [
        {
            title: "AQUARELINHA VERDE",
            description: "Print de arte pintada em aquarela. Papel com qualidade glossy, semibrilho, nos tamanhos A4 e A5",
            size: ["A3", "A4", "A5"],
            price: 14.99,
            image: Aquarelinha,
            category: "DIGITAL"
        },
        {
            title: "DEUSA DOS COGUS",
            description: "Print de arte digital. Papel com qualidade glossy, semibrilho, nos tamanhos A3, A4 e A5.",
            size: ["A4", "A5"],
            price: 14.99,
            image: Cogus,
            category: "DIGITAL"
        },
        {
            title: "A MOÇA DOS OLHOS",
            description: "Print de arte pintada em aquarela. Papel com qualidade glossy, semibrilho, nos tamanhos A4 e A5",
            size: ["A3", "A4", "A5"],
            price: 14.99,
            image: Moca,
            category: "DIGITAL"
        },
        {
            title: "AQUARELINHA VERDE",
            description: "Print de arte pintada em aquarela. Papel com qualidade glossy, semibrilho, nos tamanhos A4 e A5",
            size: ["A4"],
            price: 14.99,
            image: Aquarelinha,
            category: "DIGITAL"
        },
        {
            title: "DEUSA DOS COGUS",
            description: "Print de arte digital. Papel com qualidade glossy, semibrilho, nos tamanhos A3, A4 e A5.",
            size: ["A3", "A4"],
            price: 444.99,
            image: Aquarelinha,
            category: "DIGITAL"
        },
        {
            title: "A MOÇA DOS OLHOS",
            description: "Print de arte pintada em aquarela. Papel com qualidade glossy, semibrilho, nos tamanhos A4 e A5",
            size: ["A3", "A4", "A5"],
            price: 14.99,
            image: Aquarelinha,
            category: "DIGITAL"
        },
        {
            title: "AQUARELINHA VERDE",
            description: "Print de arte pintada em aquarela. Papel com qualidade glossy, semibrilho, nos tamanhos A4 e A5",
            size: ["A3", "A5"],
            price: 14.99,
            image: Aquarelinha,
            category: "DIGITAL"
        },
        {
            title: "DEUSA DOS COGUS",
            description: "Print de arte digital. Papel com qualidade glossy, semibrilho, nos tamanhos A3, A4 e A5.",
            size: ["A5"],
            price: 14.99,
            image: Aquarelinha,
            category: "DIGITAL"
        },
        {
            title: "A MOÇA DOS OLHOS",
            description: "Print de arte pintada em aquarela. Papel com qualidade glossy, semibrilho, nos tamanhos A4 e A5",
            size: ["A3", "A4", "A5"],
            price: 14.99,
            image: Aquarelinha,
            category: "DIGITAL"
        },
    ]

    const itemCard = items.map((item, key) => {
        return (
            <ItemCard item={item} key={key}/>
        )
    })

    return (
        <div className="App">
            <Header>
            </Header>
            <CategoriesComponent/>
            <div className="cards">
                {itemCard}
            </div>
        </div>
    );
}

export default App;
