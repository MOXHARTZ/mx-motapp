import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Position = {
    left: number,
    top: number,
    width: number,
    height: number,
}

export type Divider = {
    position: Position
}

const Divider = createSlice({
    name: "Divider",
    initialState: {
        position: {
            left: 0,
            top: 0,
            width: 0,
            height: 0,
        }
    } as Divider,
    reducers: {
        setPosition: (state, action: PayloadAction<Position>) => {
            state.position = action.payload
        }
    }
})

export const { setPosition } = Divider.actions
export const store = configureStore({
    reducer: {
        Divider: Divider.reducer
    }
})
export default Divider.reducer