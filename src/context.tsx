import { createContext } from 'react';
import { DisplayContextInterface } from './types';

export const DisplayContext = createContext<DisplayContextInterface | null>(null);