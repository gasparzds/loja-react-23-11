import imgCollection1 from "./assets/images/collection1.jpg"
import imgCollection2 from "./assets/images/collection2.jpg"
import imgCollection3 from "./assets/images/collection3.jpg"
import imgCollection4 from "./assets/images/collection4.jpg"

import { Collection } from "./components/Collection"
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {Brands} from "./components/Brand"
import {Newsletter} from "./components/Newsletter"
import {Products} from "./components/Products"
import { useEffect, useState } from "react"
import {Product} from './@types'
import axios from "axios"

function App() {
    const brands = [
        {alt: 'brand1', source: 'assets/images/brand1.png'},
        {alt: 'brand2', source: 'assets/images/brand2.png'},
        {alt: 'brand3', source: 'assets/images/brand3.png'},
        {alt: 'brand4', source: 'assets/images/brand4.png'},
        {alt: 'brand5', source: 'assets/images/brand5.png'},
    ];

    const [products, setProducts] = useState<Product[]>([] as Product[]);
    useEffect(() => {
        //TODO: CARREGUE DO SERVER OS DADOS DO PRODUTOS
        axios.get('http://localhost:3333/products')
        .then(result =>{
            setProducts(result.data);
        })
        .catch(error =>{
            console.log('ERRO!',error);
        })  
    },[]);

    return (
    <div>
      <Header/>
    <main>
        <div className="container">

          <Collection />

            <div className="carousel">
                <div className="carousel-item">
                    <div className="carousel-caption">
                        <h5>Coleção</h5>
                        <h4>Feminina <span>2021</span></h4>
                        <p>Um texto aqui para falar um pouco sobre a coleção Feminina 2021</p>
                        <button>Conheça nossa coleção</button>
                    </div>
                </div>
            </div>

            <Products items={products} />

        </div>
    </main>
    <Newsletter/>
    <div className="container">
        <Brands items={brands}/>
    </div>
    <Footer/>
    </div>
  );
}
export default App;
