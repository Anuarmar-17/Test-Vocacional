import { useContext } from "react";
import { VocacionalContext, VocacionalContextType } from "@/src/context/VocacionalContext";

export function useVocacional(): VocacionalContextType {
  const context = useContext(VocacionalContext);
  if (!context) {
    throw new Error("useVocacional debe usarse dentro de un VocacionalProvider");
  }
  return context;
}
