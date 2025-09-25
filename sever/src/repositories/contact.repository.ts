

import { ISubmitContactData } from "../controllers/contact.controller.js";
import { Contact } from "../models/contact.model.js";
import { HandlerCustom } from "../utils/configs/custom.js";

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