import renderFunction from "./src/render";
import {transistors, diods, resistors,capicators} from "./src/info";
import handleChange from './src/dark-theme';
import { handlePopup } from "./src/popup";
import { handleNavigation } from "./src/navigation";


renderFunction(transistors);
renderFunction(diods);
renderFunction(resistors);
renderFunction(capicators);
handlePopup();

