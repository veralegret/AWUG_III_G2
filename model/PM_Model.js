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
