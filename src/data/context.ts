import { createContext } from "react";
import { ApplicationMessages } from "../models/language";

export const Messagecontext = createContext<ApplicationMessages>({ heading: "" })