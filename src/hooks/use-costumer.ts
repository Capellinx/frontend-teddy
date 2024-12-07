import { useContext } from "react";
import {CostumerContext} from '../contexts/costumer-context.tsx';

export function useCostumerContext() {
  return useContext(CostumerContext);
}