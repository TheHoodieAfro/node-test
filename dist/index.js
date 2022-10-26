"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const debug_1 = __importDefault(require("debug"));
const routes_1 = __importDefault(require("./routes"));
const connect_1 = __importDefault(require("./utils/connect"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 4000;
const debuglog = (0, debug_1.default)('app');
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Express server');
});
(0, routes_1.default)(app);
(0, connect_1.default)();
app.listen(port, () => {
    debuglog('Application running');
    console.log('Server is running on port ' + port);
});
