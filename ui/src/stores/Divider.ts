import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Position = {
    left: number,
    top: number,
    width: number,
    height: number,
}

export type Divider = {
    position: Position;
    active: number | null;
}

const Divider = createSlice({
    name: "Divider",
    initialState: {
        position: {
            left: 0,
            top: 0,
            width: 0,
            height: 0,
        },
        active: null
    } as Divider,
    reducers: {
        setPosition: (state, action: PayloadAction<Position>) => {
            state.position = action.payload
        },
        setActive: (state, action: PayloadAction<number | null>) => {
            state.active = action.payload
        }
    }
})

export const { setPosition, setActive } = Divider.actions
export const store = configureStore({
    reducer: {
        Divider: Divider.reducer
    }
})
export default Divider.reducer