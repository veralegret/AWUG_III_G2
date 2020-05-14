import { observable, action } from "mobx";
import React, { createContext } from "react";

class PM_Model {
  @observable week = [
    {
      day: 1,
      meals: { desayuno: null, comida: null, merienda: null, cena: null },
    },
    {
      day: 2,
      meals: {
        desayuno: null,
        comida: { recipe: "hi" },
        merienda: null,
        cena: null,
      },
    },
    {
      day: 3,
      meals: {
        desayuno: {},
        comida: null,
        merienda: { recipe: "hi" },
        cena: null,
      },
    },
    {
      day: 4,
      meals: {
        desayuno: { recipe: "hi" },
        comida: { recipe: "hi" },
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

  /* 
  @observable week = null;

  @action async loadWeek() {
    for (var i = 1; i < 7; i++) {
      this.week.push({
        day: i,
        meals: { desayuno: null, comida: null, merienda: null, cena: null },
      });
    }
    this.week.push({
      day: 0,
      meals: { desayuno: null, comida: null, merienda: null, cena: null },
    });
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
    this.updateFood(recipe);
  }

  //Acció d'esborrar la llista de la compra
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
