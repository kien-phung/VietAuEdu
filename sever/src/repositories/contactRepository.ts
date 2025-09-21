

import { ISubmitContactData } from "../controllers/contactController.js";
import { Contact } from "../models/contactModel.js";
import { HandlerCustom } from "../utils/services/custom.js";

export const handleGetContacts = HandlerCustom(async () => {
    const contacts = await Contact
        .find()
        .exec();

    return contacts;
});

export const handleGetContactById = HandlerCustom(async (data: { id: string }) => {
    const contact = await Contact
        .find({ _id: data.id })
        .exec();

    return contact;
});

export const handleSubmitContact = HandlerCustom(async (data: ISubmitContactData) => {
    const contact = await new Contact(
        {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message
        }
    ).save();

    return contact;
});