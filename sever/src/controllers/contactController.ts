import { handleGetContactById, handleGetContacts, handleSubmitContact } from "../repositories/contactRepository.js";
import { RequestHandlerCustom } from "../utils/services/custom.js";
import { parseRequestData } from "../utils/services/helper.js";

export const getAllContacts = RequestHandlerCustom(
  async (req, res) => {
    const contacts = await handleGetContacts();

    res.status(200).json({
      message: "Get all contacts successfully",
      data: {
        contacts: contacts
      }
    });
  }
);

export const getContact = RequestHandlerCustom(
  async (req, res) => {
    const id = req.params.id;

    const contact = await handleGetContactById({ id });

    res.status(200).json({
      message: "Get contact successfully",
      data: {
        contact: contact
      }
    });
  }
);

export interface ISubmitContactData {
  name: string,
  email: string,
  phone: string,
  message: string
};

export const submitContact = RequestHandlerCustom(
  async (req, res) => {
    const data: ISubmitContactData = parseRequestData(req);

    const contact = await handleSubmitContact(data);

    res.status(201).json({
      message: "New contact created",
      data: {
        contact: contact
      }
    });
  }
);