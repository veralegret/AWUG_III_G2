import { observable, action } from "mobx";
import React, { createContext } from "react";

class PM_Model {
  @observable search = null;

  @action async loadSearch() {
    //Com fem un search general si la API requereix el parametre 'q'
    //fetch("https://api.edamam.com/search?q=" + text + "&app_id=b8f6fc18&app_key=3ba492833144f23779ec29839285f849&from=0&to=30");
    const response = await fetch("#");
    const json = await response.json();
    this.search = json.hits.map((recepta) => ({
      label: recepta.recipe.label,
      source: recepta.recipe.source,
      image: recepta.recipe.image,
    }));
  }

  @observable week = [
    {
      day: 1,
      meals: { desayuno: null, comida: null, merienda: null, cena: null },
    },
    {
      day: 2,
      meals: { desayuno: null, comida: null, merienda: null, cena: null },
    },
    {
      day: 3,
      meals: { desayuno: null, comida: null, merienda: null, cena: null },
    },
    {
      day: 4,
      meals: { desayuno: null, comida: null, merienda: null, cena: null },
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
          deleteFoodFromMeal(this.week[day].meals.desayuno);
        }
        this.week[day].meals.desayuno = recipe;
        break;
      case 1:
        if (this.week[day].meals.comida != null) {
          deleteFoodFromMeal(this.week[day].meals.comida);
        }
        this.week[day].meals.comida = recipe;
        break;
      case 2:
        if (this.week[day].meals.merienda != null) {
          deleteFoodFromMeal(this.week[day].meals.merienda);
        }
        this.week[day].meals.merienda = recipe;
        break;
      case 3:
        if (this.week[day].meals.cena != null) {
          deleteFoodFromMeal(this.week[day].meals.cena);
        }
        this.week[day].meals.cena = recipe;
        break;
      default:
        break;
    }
    this.updateFood(recipe);
  }
  @action deleteWeekMeals() {
    this.week.forEach((day) => {
      day.meals.desayuno = null;
      day.meals.comida = null;
      day.meals.merienda = null;
      day.meals.cena = null;
    });
  }

  /* 
  "ingredients" : [ {
      "text" : "1/2 cup olive oil",
      "weight" : 108.0
    },
   */

  @observable food = null;

  //Quan afegim una recepta
  @action updateFood({ recipe }) {
    recipe.ingredients.forEach((ingredient) => {
      this.food.push(ingredient.text);
    });
  }
  //Quan cambiem una recepta
  @action deleteFoodFromMeal({ recipe }) {}

  //Quan fem la compra setmanal
  @action deleteWeekFood() {
    while (this.food.length > 0) {
      this.food.pop();
    }
  }
}

const model = new PM_Model();

export const PM_Context = createContext(model);

export const PM_Provider = ({ children }) => (
  <PM_Context.Provider value={model}>{children}</PM_Context.Provider>
);
