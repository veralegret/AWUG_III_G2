import { observable, action } from "mobx";
import React, { createContext } from "react";

class PM_Model {
  @observable dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  @observable week = [
    {
      day: 1,
      meals: {
        desayuno: null,
        comida: null,
        merienda: null,
        cena: null,
      },
    },
    {
      day: 2,
      meals: {
        desayuno: null,
        comida: null,
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
  /* {
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
        } */
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
    //console.log(this.week);
  }
  @action deleteMeal({ day, meal }) {
    switch (meal) {
      case 0:
        this.week[day].meals.desayuno = null;
        break;
      case 1:
        this.week[day].meals.comida = null;
        break;
      case 2:
        this.week[day].meals.merienda = null;
        break;
      case 3:
        this.week[day].meals.cena = null;
        break;
      default:
        break;
    }
  }
}

const model = new PM_Model();

export const PM_Context = createContext(model);

export const PM_Provider = ({ children }) => (
  <PM_Context.Provider value={model}>{children}</PM_Context.Provider>
);
