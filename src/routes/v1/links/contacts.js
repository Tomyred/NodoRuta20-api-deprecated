import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const contactsRouter = defineEntityRouter("contact", schema);

export default contactsRouter;
