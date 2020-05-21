import { observable, action } from "mobx";
import React, { createContext } from "react";

class PM_Model {
  @observable dayOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  @observable week = [
    {
      day: 1,
      meals: {
        desayuno: null,
        comida: {
          label: "Chicken Paprikash 1",
          image:
            "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
          source: "No Recipes 1",
          url: "http://norecipes.com/recipe/chicken-paprikash/",
          yield: 4.0,
          dietLabels: ["Low-Carb"],
          healthLabels: ["Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free"],
          ingredientLines: [
            "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
            "1/2 teaspoon salt",
            "1/4 teaspoon black pepper",
            "1 tablespoon butter – cultured unsalted (or olive oil)",
            "240 grams onion sliced thin (1 large onion)",
            "70 grams Anaheim pepper chopped (1 large pepper)",
            "25 grams paprika (about 1/4 cup)",
            "1 cup chicken stock",
            "1/2 cup sour cream",
            "1 tablespoon flour – all-purpose",
          ],
        },
        merienda: null,
        cena: null,
      },
    },
    {
      day: 2,
      meals: {
        desayuno: null,
        comida: {
          label: "Chicken Paprikash 2",
          image:
            "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
          source: "No Recipes 2",
          url: "http://norecipes.com/recipe/chicken-paprikash/",
          yield: 4.0,
          dietLabels: ["Low-Carb"],
          healthLabels: ["Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free"],
          ingredientLines: [
            "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
            "1/2 teaspoon salt",
            "1/4 teaspoon black pepper",
            "1 tablespoon butter – cultured unsalted (or olive oil)",
            "240 grams onion sliced thin (1 large onion)",
            "70 grams Anaheim pepper chopped (1 large pepper)",
            "25 grams paprika (about 1/4 cup)",
            "1 cup chicken stock",
            "1/2 cup sour cream",
            "1 tablespoon flour – all-purpose",
          ],
        },
        merienda: null,
        cena: null,
      },
    },
    {
      day: 3,
      meals: {
        desayuno: null,
        comida: null,
        merienda: null,
        cena: null,
      },
    },
    {
      day: 4,
      meals: {
        desayuno: null,
        comida: null,
        merienda: null,
        cena: null,
      },
    },
    {
      day: 5,
      meals: { desayuno: null, comida: null, merienda: null, cena: null },
    },
    {
      day: 6,
      meals: { desayuno: null, comida: null, merienda: null, cena: null },
    },
    {
      day: 0,
      meals: { desayuno: null, comida: null, merienda: null, cena: null },
    },
  ];

  //'day' i 'meal' serien index, int
  //'recipe' seria un objecte json de una recepta concreta
  @action updateMeal({ day, meal, recipe }) {
    switch (meal) {
      case 0:
        if (this.week[day].meals.desayuno != null) {
          this.week[day].meals.desayuno = null;
        }
        this.week[day].meals.desayuno = recipe;
        break;
      case 1:
        if (this.week[day].meals.comida != null) {
          this.week[day].meals.comida = null;
        }
        this.week[day].meals.comida = recipe;
        break;
      case 2:
        if (this.week[day].meals.merienda != null) {
          this.week[day].meals.merienda = null;
        }
        this.week[day].meals.merienda = recipe;
        break;
      case 3:
        if (this.week[day].meals.cena != null) {
          this.week[day].meals.cena = null;
        }
        this.week[day].meals.cena = recipe;
        break;
      default:
        break;
    }
    this.updateFood(recipe);
  }

  //Acció d'esborrar la llista de la compra
  //Fer que s'executi els diumeges a les 23:55
  @action deleteWeekMeals() {
    this.week.forEach((day) => {
      day.meals.desayuno = null;
      day.meals.comida = null;
      day.meals.merienda = null;
      day.meals.cena = null;
    });
  }
}

const model = new PM_Model();

export const PM_Context = createContext(model);

export const PM_Provider = ({ children }) => (
  <PM_Context.Provider value={model}>{children}</PM_Context.Provider>
);
