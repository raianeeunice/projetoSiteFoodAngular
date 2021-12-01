import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

   // fooddetails 
  
   foodDetails = [
    {
      id:1,
      foodName:"Caipirinha",
      foodDetails:"Caipirinha maravilhosa.",
      foodPrice:15,
      foodImg:"https://res.cloudinary.com/djvvnzpzc/image/upload/v1638304882/sam-hojati-pb7oJwtNVU4-unsplash_wlndfp.jpg"
    },
    {
      id:2,
      foodName:"Pizza",
      foodDetails:"Massa, molho, queijo e sabores diversos de recheios.",
      foodPrice:60,
      foodImg:"https://res.cloudinary.com/djvvnzpzc/image/upload/v1638305285/karthik-garikapati-oBbTc1VoT-0-unsplash_ca4sf6.jpg"
    },
    {
      id:3,
      foodName:"Burger",
      foodDetails:"Pão, hamburguer, queijo, presunto, tomate, alface, cebola e acompanhamentos.",
      foodPrice:25,
      foodImg:"https://res.cloudinary.com/djvvnzpzc/image/upload/v1638305383/amirali-mirhashemian-9hIJ4ZLMnZA-unsplash_ns2b0l.jpg"
    },
    {
      id:4,
      foodName:"Coffee",
      foodDetails:"Coffee",
      foodPrice:18,
      foodImg:"https://res.cloudinary.com/djvvnzpzc/image/upload/v1638305073/taisiia-shestopal-xO9NotFY4mU-unsplash_mfye5w.jpg"
    },
    {
      id:5,
      foodName:"Brownie",
      foodDetails:"Um sabor de tirar o fôlego.",
      foodPrice:10,
      foodImg:"https://res.cloudinary.com/djvvnzpzc/image/upload/v1638305637/ella-olsson-uG1jwfpCRhg-unsplash_prfciz.jpg"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream.",
      foodPrice:15,
      foodImg:"https://res.cloudinary.com/djvvnzpzc/image/upload/v1638321780/clarissa-carbungco-uy9DJw9e_vs-unsplash_up5iwc.jpg"
    },
    {
      id:7,
      foodName:"Juice",
      foodDetails:"Frutas naturais. Pode ser com água ou leite.",
      foodPrice:10,
      foodImg:"https://res.cloudinary.com/djvvnzpzc/image/upload/v1638305783/francesca-hotchin-DSxurmhrfuc-unsplash_zpmsnw.jpg"
    },
    {
      id:8,
      foodName:"Ice Cream",
      foodDetails:"Diversos sabores e com alta cremosidade.",
      foodPrice:28,
      foodImg:"https://res.cloudinary.com/djvvnzpzc/image/upload/v1638305519/erwan-hesry-OlQ-NaEyVmQ-unsplash_eyjzd8.jpg"
    },
    {
      id:9,
      foodName:"Cake",
      foodDetails:"Cake",
      foodPrice:18,
      foodImg:"https://res.cloudinary.com/djvvnzpzc/image/upload/v1638355806/henrik-hjortshoj-XtYPjMTNQUA-unsplash_p8wsw2.jpg"
    }
  ]

}
