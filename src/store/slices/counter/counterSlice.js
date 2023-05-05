import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

export const counterSlice = createSlice({
  name: "counterName",
  initialState: {
    counter: 10,
    times: 0,
  },
  /**
   * Con los reducer cambiamos el estado del objeto que definimos en el
   * initialState y solo afectara a las propiedades q modifiquemos en cada
   * reducer sin afectar el valor de las otras
   */
  reducers: {
    increment: (state) => {
      //   state.value += 1;
      state.counter += 1;
    },
    decrement: (state) => {
      //   state.value -= 1;
      state.counter -= 1;
    },
    /**
     * @param state es el objeto por el cual tenemos acceso a los valores del estado inicial
     *
     * @param action tiene una propiedad payload que es donde recibirar todos los parametros
     * que le mandemos a la funcion puede ser un valor o un objeto
     */
    incrementByAmount: (state, action) => {
      console.log(action);
      state.counter += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
