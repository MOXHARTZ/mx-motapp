import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Room = {
    pay?: string;
    owner: string | number;
    firstname: string;
    lastname: string;
    roomId?: number;
    suspended?: number
    rentcycle?: number;
    phone?: string;
}


const Room = createSlice({
    name: "Room",
    initialState: {
        pay: "",
        owner: "",
        firstname: "",
        lastname: "",
        roomId: 0,
        suspended: 0,
        rentcycle: 0,
        phone: ""
    } as Room,
    reducers: {

    }
})

export const { } = Room.actions
export const store = configureStore({
    reducer: {
        Divider: Room.reducer
    }
})
export default Room.reducer