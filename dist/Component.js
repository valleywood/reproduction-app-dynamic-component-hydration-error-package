"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Component = () => {
    const [num, setNum] = react_1.default.useState(0);
    react_1.default.useEffect(() => {
        setTimeout(() => {
            setNum(num + 1);
        }, 3000);
    }, [num]);
    return (0, jsx_runtime_1.jsxs)("div", { children: ["Test Inner ", num] });
};
exports.default = Component;
