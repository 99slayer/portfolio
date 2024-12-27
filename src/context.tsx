import { createContext } from 'react';
import { AppContextInterface, DisplayContextInterface } from './types';

export const AppContext = createContext<AppContextInterface | null>(null);
export const DisplayContext = createContext<DisplayContextInterface | null>(null);
